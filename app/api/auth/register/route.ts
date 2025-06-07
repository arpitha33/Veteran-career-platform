import { createServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password, role, firstName, lastName, phone, location } = await request.json()

    const supabase = createServerClient()

    // Create auth user with metadata
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          role: role,
          phone: phone,
        },
      },
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    if (authData.user) {
      // Create user profile in our custom table with all signup data
      const { error: profileError } = await supabase.from("users").insert({
        id: authData.user.id,
        email,
        role,
        first_name: firstName,
        last_name: lastName,
        phone: phone || null,
        email_verified: false,
        is_active: true,
      })

      if (profileError) {
        console.error("Profile creation error:", profileError)
        return NextResponse.json({ error: "Failed to create user profile" }, { status: 500 })
      }

      // Create role-specific profile with initial data
      if (role === "veteran") {
        const { error: veteranError } = await supabase.from("veteran_profiles").insert({
          user_id: authData.user.id,
          current_location: location || null,
          profile_completion_percentage: 25, // Higher since we have basic info
          bio: `${firstName} ${lastName} - Military Veteran`,
          skills: [],
          certifications: [],
          awards: [],
          languages: ["English"],
          job_preferences: [],
        })

        if (veteranError) {
          console.error("Veteran profile creation error:", veteranError)
        }
      } else if (role === "employer") {
        const { error: employerError } = await supabase.from("employer_profiles").insert({
          user_id: authData.user.id,
          company_name: `${firstName} ${lastName} Company`, // Placeholder
          headquarters_location: location || null,
          is_veteran_friendly: true,
          benefits: [],
        })

        if (employerError) {
          console.error("Employer profile creation error:", employerError)
        }
      } else if (role === "recruiter") {
        const { error: recruiterError } = await supabase.from("recruiter_profiles").insert({
          user_id: authData.user.id,
          agency_name: `${firstName} ${lastName} Recruiting`,
          specialization: ["Veteran Placement"],
          placement_count: 0,
          total_earnings: 0,
          monthly_target: 10,
          experience_years: 0,
          success_rate: 0,
          commission_rate: 15.0,
        })

        if (recruiterError) {
          console.error("Recruiter profile creation error:", recruiterError)
        }
      }
    }

    return NextResponse.json({
      message: "Registration successful! Please check your email to verify your account.",
      user: {
        id: authData.user?.id,
        email: authData.user?.email,
        role,
        firstName,
        lastName,
      },
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
