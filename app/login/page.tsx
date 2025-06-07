"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Shield, Building, UserCheck, ArrowRight, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState("veteran")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-800">
                VetBridge India
              </Link>
              <div className="ml-3 flex items-center">
                <Shield className="h-5 w-5 text-orange-600 mr-1" />
                <span className="text-sm text-gray-600 font-medium">Connecting Indian Army Veterans</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/register" className="text-green-600 hover:text-green-700 font-medium">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Role Selection & Info */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to VetBridge</h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose your role to access the platform designed for Indian Army veterans and their career success.
              </p>
            </div>

            {/* Role Selection Cards */}
            <div className="space-y-4">
              <Card
                className={`cursor-pointer transition-all border-2 ${
                  selectedRole === "veteran" ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-green-300"
                }`}
                onClick={() => setSelectedRole("veteran")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Indian Army Veteran</h3>
                      <p className="text-sm text-gray-600">
                        Access job opportunities, mentorship, and career resources
                      </p>
                    </div>
                    {selectedRole === "veteran" && <Badge className="bg-green-600">Selected</Badge>}
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer transition-all border-2 ${
                  selectedRole === "employer"
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200 hover:border-orange-300"
                }`}
                onClick={() => setSelectedRole("employer")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Employer / Company</h3>
                      <p className="text-sm text-gray-600">Post jobs and hire exceptional Indian Army veterans</p>
                    </div>
                    {selectedRole === "employer" && <Badge className="bg-orange-600">Selected</Badge>}
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer transition-all border-2 ${
                  selectedRole === "recruiter" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => setSelectedRole("recruiter")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <UserCheck className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Recruiter / Talent Partner</h3>
                      <p className="text-sm text-gray-600">Source and place veterans with partner companies</p>
                    </div>
                    {selectedRole === "recruiter" && <Badge className="bg-blue-600">Selected</Badge>}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Role Benefits */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">
                {selectedRole === "veteran" && "Veteran Benefits"}
                {selectedRole === "employer" && "Employer Benefits"}
                {selectedRole === "recruiter" && "Recruiter Benefits"}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {selectedRole === "veteran" && (
                  <>
                    <li>• Access to 1000+ veteran-friendly job opportunities</li>
                    <li>• Connect with experienced military mentors</li>
                    <li>• Free career transition resources and training</li>
                    <li>• Skill assessment and career matching</li>
                  </>
                )}
                {selectedRole === "employer" && (
                  <>
                    <li>• Access to 25,000+ verified Indian Army veterans</li>
                    <li>• Advanced filtering by regiment, rank, and skills</li>
                    <li>• Direct communication and interview tools</li>
                    <li>• Dedicated account management support</li>
                  </>
                )}
                {selectedRole === "recruiter" && (
                  <>
                    <li>• Commission-based placement opportunities</li>
                    <li>• Access to exclusive veteran talent pool</li>
                    <li>• Advanced sourcing and matching tools</li>
                    <li>• Partnership with 800+ hiring companies</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="max-w-md mx-auto w-full">
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {selectedRole === "veteran" && <Shield className="h-8 w-8 text-white" />}
                  {selectedRole === "employer" && <Building className="h-8 w-8 text-white" />}
                  {selectedRole === "recruiter" && <UserCheck className="h-8 w-8 text-white" />}
                </div>
                <CardTitle className="text-2xl">
                  {selectedRole === "veteran" && "Veteran Login"}
                  {selectedRole === "employer" && "Employer Login"}
                  {selectedRole === "recruiter" && "Recruiter Login"}
                </CardTitle>
                <CardDescription>
                  {selectedRole === "veteran" && "Access your veteran career dashboard"}
                  {selectedRole === "employer" && "Manage your hiring and recruitment"}
                  {selectedRole === "recruiter" && "Access your talent sourcing platform"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={
                      selectedRole === "veteran"
                        ? "veteran@email.com"
                        : selectedRole === "employer"
                          ? "hr@company.com"
                          : "recruiter@agency.com"
                    }
                    className="border-gray-300 focus:border-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="border-gray-300 focus:border-green-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  className={`w-full ${
                    selectedRole === "veteran"
                      ? "bg-green-600 hover:bg-green-700"
                      : selectedRole === "employer"
                        ? "bg-orange-600 hover:bg-orange-700"
                        : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  asChild
                >
                  <Link
                    href={
                      selectedRole === "veteran"
                        ? "/veteran/dashboard"
                        : selectedRole === "employer"
                          ? "/employer/dashboard"
                          : "/recruiter/dashboard"
                    }
                  >
                    Sign In
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>

                <div className="text-center">
                  <span className="text-sm text-gray-600">Don't have an account? </span>
                  <Link
                    href={`/register?role=${selectedRole}`}
                    className={`text-sm font-medium ${
                      selectedRole === "veteran"
                        ? "text-green-600 hover:text-green-700"
                        : selectedRole === "employer"
                          ? "text-orange-600 hover:text-orange-700"
                          : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    Create Account
                  </Link>
                </div>

                {/* Role-specific additional info */}
                {selectedRole === "recruiter" && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 mb-2">New to Recruiting Veterans?</h5>
                    <p className="text-sm text-blue-700 mb-3">
                      Join our partner program and earn commissions by placing Indian Army veterans.
                    </p>
                    <Link
                      href="/recruiters/partner-program"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn about our Partner Program →
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
