"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Briefcase, TrendingUp, ArrowRight, Star, CheckCircle, Award } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VetBridge</h1>
                <p className="text-xs text-gray-600">Connecting Heroes to Opportunities</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">
              VetBridge
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            India's premier platform connecting military veterans with meaningful career opportunities. Honoring your
            service, empowering your future.
          </p>
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50,000+</div>
              <div className="text-sm text-gray-600">Veterans Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2,500+</div>
              <div className="text-sm text-gray-600">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Role Selection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Choose Your Path</h2>
          <p className="text-center text-gray-600 mb-12">
            Select your role to access tailored features and opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Veteran Card */}
            <Card
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                selectedRole === "veteran"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 hover:border-orange-300"
              }`}
              onClick={() => setSelectedRole("veteran")}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Veterans</CardTitle>
                <CardDescription className="text-gray-600">
                  Transition from military service to civilian careers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personalized job matching
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Skill translation tools
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mentor connections
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Career transition support
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    asChild
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={selectedRole !== "veteran"}
                  >
                    <Link href="/login">
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-gray-500">Join 50,000+ veterans who found their next career</p>
                </div>
              </CardContent>
            </Card>

            {/* Employer Card */}
            <Card
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                selectedRole === "employer" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
              }`}
              onClick={() => setSelectedRole("employer")}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Employers</CardTitle>
                <CardDescription className="text-gray-600">
                  Hire exceptional talent with proven leadership skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Access to verified veterans
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced filtering tools
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dedicated account management
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Hiring analytics & insights
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={selectedRole !== "employer"}
                  >
                    <Link href="/login">
                      Start Hiring
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-gray-500">Trusted by 2,500+ companies across India</p>
                </div>
              </CardContent>
            </Card>

            {/* Recruiter Card */}
            <Card
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                selectedRole === "recruiter" ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-green-300"
              }`}
              onClick={() => setSelectedRole("recruiter")}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Recruiters</CardTitle>
                <CardDescription className="text-gray-600">
                  Build your business by connecting veterans with opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Commission-based earnings
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Exclusive veteran database
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Client relationship tools
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance tracking
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={selectedRole !== "recruiter"}
                  >
                    <Link href="/login">
                      Join Network
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-gray-500">Earn ₹50,000 - ₹2,00,000 per placement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Colonel Arjun Singh</h4>
                    <p className="text-sm text-gray-600">Indian Army → TCS</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "VetBridge helped me transition from 25 years of military service to a leadership role at TCS. The
                  platform understood my skills and matched me perfectly."
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">Strategic Operations Manager</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mahindra Group</h4>
                    <p className="text-sm text-gray-600">Fortune 500 Company</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "We've hired 200+ veterans through VetBridge. Their discipline, leadership, and problem-solving skills
                  are exactly what we need for our operations."
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">HR Director</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Priya Recruitment</h4>
                    <p className="text-sm text-gray-600">Partner Recruiter</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "As a recruiter on VetBridge, I've earned ₹15 lakhs in commissions this year. The platform makes it
                  easy to match veterans with the right opportunities."
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">Senior Recruiter</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partner Companies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Trusted by Leading Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">TCS</div>
              <div className="text-xs text-gray-500">Technology</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">Mahindra</div>
              <div className="text-xs text-gray-500">Automotive</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800">Infosys</div>
              <div className="text-xs text-gray-500">IT Services</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Wipro</div>
              <div className="text-xs text-gray-500">Technology</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">HAL</div>
              <div className="text-xs text-gray-500">Aerospace</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Reliance</div>
              <div className="text-xs text-gray-500">Conglomerate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-green-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Bridge Your Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of veterans who have successfully transitioned to meaningful careers
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/login">Start as Veteran</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Link href="/login">Hire Veterans</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">VetBridge</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting military veterans with meaningful career opportunities across India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Veterans</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/login" className="hover:text-white">
                    Find Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white">
                    Find Mentors
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/employer/post-job" className="hover:text-white">
                    Post Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/employer/search" className="hover:text-white">
                    Search Veterans
                  </Link>
                </li>
                <li>
                  <Link href="/employer/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/employer/case-studies" className="hover:text-white">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 VetBridge. All rights reserved. | Proudly serving Indian Armed Forces veterans 🇮🇳</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
