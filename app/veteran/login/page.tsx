"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, ArrowLeft, Eye, EyeOff, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function VeteranLogin() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    serviceNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    rank: "",
    regiment: "",
    serviceYears: "",
    phone: "",
    agreeTerms: false,
  })

  const indianArmyRanks = [
    "Field Marshal",
    "General",
    "Lieutenant General",
    "Major General",
    "Brigadier",
    "Colonel",
    "Lieutenant Colonel",
    "Major",
    "Captain",
    "Lieutenant",
    "Second Lieutenant",
    "Subedar Major",
    "Subedar",
    "Naib Subedar",
    "Havildar",
    "Naik",
    "Lance Naik",
    "Sepoy",
  ]

  const indianArmyRegiments = [
    "Rajputana Rifles",
    "Punjab Regiment",
    "Rajput Regiment",
    "Jat Regiment",
    "Sikh Regiment",
    "Dogra Regiment",
    "Garhwal Rifles",
    "Kumaon Regiment",
    "Maratha Light Infantry",
    "Bihar Regiment",
    "Mahar Regiment",
    "Assam Regiment",
    "Corps of Engineers",
    "Corps of Signals",
    "Army Service Corps",
    "Army Medical Corps",
    "Army Ordnance Corps",
    "Armoured Corps",
    "Artillery",
    "Parachute Regiment",
    "Special Forces",
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.serviceNumber) {
      newErrors.serviceNumber = "Service number is required"
    } else if (!/^[A-Z]{2}\d{7}$/.test(formData.serviceNumber)) {
      newErrors.serviceNumber = "Invalid service number format (e.g., IC1234567)"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!isLogin) {
      if (!formData.firstName) newErrors.firstName = "First name is required"
      if (!formData.lastName) newErrors.lastName = "Last name is required"
      if (!formData.rank) newErrors.rank = "Rank is required"
      if (!formData.regiment) newErrors.regiment = "Regiment/Corps is required"
      if (!formData.serviceYears) newErrors.serviceYears = "Service years are required"
      if (!formData.phone) newErrors.phone = "Phone number is required"
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = "You must agree to the terms and conditions"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      router.push("/veteran/dashboard")
    }, 2000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">VetBridge</h1>
          <p className="text-gray-600">Veteran Portal</p>
        </div>

        <Card className="border-orange-200">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">{isLogin ? "Welcome Back, Soldier!" : "Join VetBridge"}</CardTitle>
            <CardDescription>
              {isLogin
                ? "Sign in to access your veteran dashboard"
                : "Create your account to start your career transition"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Number */}
              <div className="space-y-2">
                <Label htmlFor="serviceNumber">Service Number *</Label>
                <Input
                  id="serviceNumber"
                  placeholder="e.g., IC1234567"
                  value={formData.serviceNumber}
                  onChange={(e) => handleInputChange("serviceNumber", e.target.value.toUpperCase())}
                  className={errors.serviceNumber ? "border-red-500" : ""}
                />
                {errors.serviceNumber && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.serviceNumber}
                  </p>
                )}
              </div>

              {/* Registration Fields */}
              {!isLogin && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rank">Rank *</Label>
                    <Select value={formData.rank} onValueChange={(value) => handleInputChange("rank", value)}>
                      <SelectTrigger className={errors.rank ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your rank" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianArmyRanks.map((rank) => (
                          <SelectItem key={rank} value={rank}>
                            {rank}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.rank && <p className="text-sm text-red-500">{errors.rank}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regiment">Regiment/Corps *</Label>
                    <Select value={formData.regiment} onValueChange={(value) => handleInputChange("regiment", value)}>
                      <SelectTrigger className={errors.regiment ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your regiment/corps" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianArmyRegiments.map((regiment) => (
                          <SelectItem key={regiment} value={regiment}>
                            {regiment}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.regiment && <p className="text-sm text-red-500">{errors.regiment}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceYears">Years of Service *</Label>
                    <Input
                      id="serviceYears"
                      placeholder="e.g., 2000-2020"
                      value={formData.serviceYears}
                      onChange={(e) => handleInputChange("serviceYears", e.target.value)}
                      className={errors.serviceYears ? "border-red-500" : ""}
                    />
                    {errors.serviceYears && <p className="text-sm text-red-500">{errors.serviceYears}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                  </div>
                </>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={errors.password ? "border-red-500" : ""}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>

              {/* Confirm Password (Registration only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className={errors.confirmPassword ? "border-red-500" : ""}
                  />
                  {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                </div>
              )}

              {/* Terms and Conditions (Registration only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                    />
                    <Label htmlFor="agreeTerms" className="text-sm">
                      I agree to the{" "}
                      <Link href="/terms" className="text-orange-600 hover:underline">
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-orange-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  {errors.agreeTerms && <p className="text-sm text-red-500">{errors.agreeTerms}</p>}
                </div>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={loading}>
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {isLogin ? "Signing In..." : "Creating Account..."}
                  </div>
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Create Account"}
                    <CheckCircle className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>

              {/* Toggle Login/Register */}
              <div className="text-center">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setIsLogin(!isLogin)
                    setErrors({})
                  }}
                  className="text-orange-600 hover:text-orange-700"
                >
                  {isLogin ? "New to VetBridge? Create an account" : "Already have an account? Sign in"}
                </Button>
              </div>

              {/* Forgot Password (Login only) */}
              {isLogin && (
                <div className="text-center">
                  <Link href="/veteran/forgot-password" className="text-sm text-gray-600 hover:text-orange-600">
                    Forgot your password?
                  </Link>
                </div>
              )}
            </form>

            {/* Service Verification Notice */}
            <Alert className="mt-6 border-green-200 bg-green-50">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Your military service will be verified with official records for security and authenticity.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Support */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <Link href="/support" className="text-orange-600 hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
