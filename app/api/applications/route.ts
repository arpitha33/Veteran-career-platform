import { createServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = searchParams.get("user_id") || user.id
    const status = searchParams.get("status")

    let query = supabase
      .from("applications")
      .select(`
        *,
        job:jobs(*,
          employer:users!jobs_employer_id_fkey(
            first_name,
            last_name,
            employer_profiles(company_name, company_logo_url)
          )
        ),
        veteran:users!applications_veteran_id_fkey(first_name, last_name, veteran_profiles(*))
      `)
      .eq("veteran_id", userId)
      .order("applied_at", { ascending: false })

    if (status) {
      query = query.eq("status", status)
    }

    const { data, error } = await query

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ applications: data })
  } catch (error) {
    console.error("Applications fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Verify user is a veteran
    const { data: profile } = await supabase.from("users").select("role").eq("id", user.id).single()

    if (profile?.role !== "veteran") {
      return NextResponse.json({ error: "Only veterans can apply for jobs" }, { status: 403 })
    }

    const { jobId, coverLetter, resumeUrl } = await request.json()

    // Check if already applied
    const { data: existingApplication } = await supabase
      .from("applications")
      .select("id")
      .eq("job_id", jobId)
      .eq("veteran_id", user.id)
      .single()

    if (existingApplication) {
      return NextResponse.json({ error: "You have already applied for this job" }, { status: 400 })
    }

    // Calculate match score (simplified algorithm)
    const matchScore = Math.floor(Math.random() * 30) + 70 // 70-100%

    const { data, error } = await supabase
      .from("applications")
      .insert({
        job_id: jobId,
        veteran_id: user.id,
        cover_letter: coverLetter,
        resume_url: resumeUrl,
        match_score: matchScore,
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Update job applications count
    await supabase.rpc("increment_applications_count", { job_id: jobId })

    return NextResponse.json({ application: data })
  } catch (error) {
    console.error("Application creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
