import { createServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    const supabase = createServerClient()

    // Authenticate user
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    if (authData.user) {
      // Get complete user profile
      const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("*")
        .eq("id", authData.user.id)
        .single()

      if (profileError) {
        // If profile doesn't exist, create it from auth metadata
        const metadata = authData.user.user_metadata
        const { error: createError } = await supabase.from("users").insert({
          id: authData.user.id,
          email: authData.user.email!,
          role: metadata.role || "veteran",
          first_name: metadata.first_name || "",
          last_name: metadata.last_name || "",
          phone: metadata.phone || null,
          email_verified: authData.user.email_confirmed_at ? true : false,
          is_active: true,
        })

        if (createError) {
          console.error("Profile creation error:", createError)
        }
      }

      // Get role-specific profile
      let roleProfile = null
      const userRole = profile?.role || authData.user.user_metadata.role

      if (userRole === "veteran") {
        const { data } = await supabase.from("veteran_profiles").select("*").eq("user_id", authData.user.id).single()
        roleProfile = data
      } else if (userRole === "employer") {
        const { data } = await supabase.from("employer_profiles").select("*").eq("user_id", authData.user.id).single()
        roleProfile = data
      } else if (userRole === "recruiter") {
        const { data } = await supabase.from("recruiter_profiles").select("*").eq("user_id", authData.user.id).single()
        roleProfile = data
      }

      return NextResponse.json({
        message: "Login successful",
        user: {
          ...profile,
          roleProfile,
        },
      })
    }

    return NextResponse.json({ error: "Login failed" }, { status: 400 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
