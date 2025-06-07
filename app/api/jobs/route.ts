import { createServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)

    const location = searchParams.get("location")
    const jobType = searchParams.get("job_type")
    const experienceLevel = searchParams.get("experience_level")
    const salaryMin = searchParams.get("salary_min")
    const veteranPreference = searchParams.get("veteran_preference")

    let query = supabase
      .from("jobs")
      .select(`
        *,
        employer:users!jobs_employer_id_fkey(
          first_name,
          last_name,
          employer_profiles(company_name, company_logo_url, is_veteran_friendly)
        )
      `)
      .eq("is_active", true)
      .order("created_at", { ascending: false })

    if (location) {
      query = query.ilike("location", `%${location}%`)
    }

    if (jobType) {
      query = query.eq("job_type", jobType)
    }

    if (experienceLevel) {
      query = query.eq("experience_level", experienceLevel)
    }

    if (salaryMin) {
      query = query.gte("salary_min", Number.parseInt(salaryMin))
    }

    if (veteranPreference === "true") {
      query = query.eq("veteran_preference", true)
    }

    const { data, error } = await query

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ jobs: data })
  } catch (error) {
    console.error("Jobs fetch error:", error)
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

    // Verify user is an employer
    const { data: profile } = await supabase.from("users").select("role").eq("id", user.id).single()

    if (profile?.role !== "employer") {
      return NextResponse.json({ error: "Only employers can post jobs" }, { status: 403 })
    }

    const jobData = await request.json()

    const { data, error } = await supabase
      .from("jobs")
      .insert({
        ...jobData,
        employer_id: user.id,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ job: data })
  } catch (error) {
    console.error("Job creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
