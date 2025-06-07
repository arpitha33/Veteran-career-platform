import { createServerClient } from "./supabase/server"
import { redirect } from "next/navigation"

export async function getUser() {
  const supabase = createServerClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return null
  }

  // Get user profile from our custom users table
  const { data: profile } = await supabase.from("users").select("*").eq("id", user.id).single()

  return profile
}

export async function requireAuth() {
  const user = await getUser()

  if (!user) {
    redirect("/login")
  }

  return user
}

export async function requireRole(role: "veteran" | "employer" | "recruiter") {
  const user = await requireAuth()

  if (user.role !== role) {
    redirect("/login")
  }

  return user
}
