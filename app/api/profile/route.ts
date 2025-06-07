import { createServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
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

    // Get user profile
    const { data: profile, error: profileError } = await supabase.from("users").select("*").eq("id", user.id).single()

    if (profileError) {
      return NextResponse.json({ error: profileError.message }, { status: 400 })
    }

    // Get role-specific profile
    let roleProfile = null

    if (profile.role === "veteran") {
      const { data } = await supabase.from("veteran_profiles").select("*").eq("user_id", user.id).single()
      roleProfile = data
    } else if (profile.role === "employer") {
      const { data } = await supabase.from("employer_profiles").select("*").eq("user_id", user.id).single()
      roleProfile = data
    } else if (profile.role === "recruiter") {
      const { data } = await supabase.from("recruiter_profiles").select("*").eq("user_id", user.id).single()
      roleProfile = data
    }

    return NextResponse.json({
      profile: {
        ...profile,
        roleProfile,
      },
    })
  } catch (error) {
    console.error("Profile fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
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

    const updateData = await request.json()
    const { basicInfo, roleSpecificData } = updateData

    // Update basic user info
    if (basicInfo) {
      const { error: userError } = await supabase.from("users").update(basicInfo).eq("id", user.id)

      if (userError) {
        return NextResponse.json({ error: userError.message }, { status: 400 })
      }
    }

    // Update role-specific profile
    if (roleSpecificData) {
      const { data: profile } = await supabase.from("users").select("role").eq("id", user.id).single()

      let tableName = ""
      if (profile?.role === "veteran") {
        tableName = "veteran_profiles"
      } else if (profile?.role === "employer") {
        tableName = "employer_profiles"
      } else if (profile?.role === "recruiter") {
        tableName = "recruiter_profiles"
      }

      if (tableName) {
        const { error: roleError } = await supabase.from(tableName).update(roleSpecificData).eq("user_id", user.id)

        if (roleError) {
          return NextResponse.json({ error: roleError.message }, { status: 400 })
        }
      }
    }

    return NextResponse.json({ message: "Profile updated successfully" })
  } catch (error) {
    console.error("Profile update error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
