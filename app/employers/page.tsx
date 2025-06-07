import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Users, Target, CheckCircle, Star, Shield, Award, Zap } from "lucide-react"
import Link from "next/link"

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-gradient-from-green-50 to-orange-50">
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
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <Link href="/employers" className="text-green-800 font-medium">
                  For Employers
                </Link>
                <Link href="/employers/dashboard" className="text-gray-500 hover:text-gray-700">
                  Dashboard
                </Link>
                <Link href="/employers/post-job" className="text-gray-500 hover:text-gray-700">
                  Post Jobs
                </Link>
                <Link href="/employers/search-veterans" className="text-gray-500 hover:text-gray-700">
                  Find Veterans
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild className="border-green-600 text-green-600 hover:bg-green-50">
                <Link href="/employers/login">Login</Link>
              </Button>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/employers/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 via-green-700 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-orange-300 mr-3" />
                <span className="text-orange-200 font-semibold">Indian Army Veterans</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hire Exceptional Indian Army Veterans for Your Team
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Connect with skilled Indian Army veterans who bring unmatched leadership, discipline, and proven
                experience from defending our nation to driving your organization's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                  <Link href="/employers/register">Start Hiring Veterans</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800"
                >
                  <Link href="/employers/search-veterans">Browse Veteran Profiles</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">25,000+</div>
                  <div className="text-green-100">Indian Army Veterans</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">800+</div>
                  <div className="text-green-100">Partner Companies</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">97%</div>
                  <div className="text-green-100">Retention Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">21 Days</div>
                  <div className="text-green-100">Avg. Time to Hire</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Indian Army Veterans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Hire Indian Army Veterans?</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Indian Army veterans bring unique skills forged in service to the nation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Battle-Tested Leadership</h3>
                <p className="text-gray-600">
                  Proven leaders who have commanded troops in challenging environments and high-pressure situations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Mission-Critical Focus</h3>
                <p className="text-gray-600">
                  Trained to achieve objectives with precision, discipline, and unwavering commitment to excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Rapid Adaptability</h3>
                <p className="text-gray-600">
                  Quick to learn new technologies and adapt to changing business environments with military precision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Integrity & Honor</h3>
                <p className="text-gray-600">
                  Strong ethical foundation, punctuality, and unwavering commitment to organizational values.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories from Indian Companies</h2>
            <p className="text-xl text-gray-600">See how leading Indian companies benefit from hiring Army veterans</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    TCS
                  </div>
                  <div>
                    <h3 className="font-semibold">Tata Consultancy Services</h3>
                    <p className="text-sm text-gray-600">IT Services & Consulting</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Hiring Indian Army veterans through VetBridge has been transformational. Their leadership skills and
                  operational discipline have elevated our project delivery capabilities by 40%."
                </p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">- Rajesh Gopinathan, HR Director</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    M&M
                  </div>
                  <div>
                    <h3 className="font-semibold">Mahindra Group</h3>
                    <p className="text-sm text-gray-600">Automotive & Aerospace</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Army veterans bring unmatched operational excellence to our manufacturing processes. Their ability to
                  handle complex logistics has improved our efficiency by 35%."
                </p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">- Anish Shah, Operations Head</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    HAL
                  </div>
                  <div>
                    <h3 className="font-semibold">Hindustan Aeronautics</h3>
                    <p className="text-sm text-gray-600">Aerospace & Defence</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The strategic thinking and security expertise of ex-Army personnel has strengthened our defence
                  projects significantly. Their understanding of military requirements is invaluable."
                </p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">- R. Madhavan, CMD</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Veteran Connection Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect with Veterans Seamlessly</h2>
            <p className="text-xl text-gray-600">Advanced tools to find, evaluate, and hire the right veterans</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Smart Veteran Matching</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered matching based on military experience, skills, and your specific requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regiment and unit-based filtering</li>
                  <li>• Rank and experience matching</li>
                  <li>• Skill compatibility scoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Verified Military Records</h3>
                <p className="text-gray-600 mb-4">
                  All veteran profiles are verified with authentic military service records and achievements.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Service record verification</li>
                  <li>• Awards and commendations</li>
                  <li>• Security clearance status</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Direct Communication</h3>
                <p className="text-gray-600 mb-4">
                  Connect directly with veterans through our secure messaging and video interview platform.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Secure messaging system</li>
                  <li>• Video interview scheduling</li>
                  <li>• Application tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How VetBridge Works for Employers</h2>
            <p className="text-xl text-gray-600">Simple steps to find and hire exceptional Indian Army veterans</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Create Company Profile</h3>
              <p className="text-gray-600">Set up your company profile and specify your veteran hiring needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Search & Filter Veterans</h3>
              <p className="text-gray-600">Use advanced filters to find veterans by regiment, rank, and skills</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Connect & Interview</h3>
              <p className="text-gray-600">Message veterans directly and schedule interviews through our platform</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Hire & Onboard</h3>
              <p className="text-gray-600">
                Complete hiring with our support and veteran-specific onboarding resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your veteran hiring needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-3xl font-bold text-green-600">₹18,000</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Post up to 5 jobs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Access to veteran database
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Basic military filters
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-green-500 border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-3xl font-bold text-green-600">₹42,000</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Unlimited job postings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Advanced military filters
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Video interview platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Dedicated account manager
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-green-600">Custom</div>
                <CardDescription>pricing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Everything in Professional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    White-label solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    24/7 phone support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Veteran onboarding training
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-orange-200 mr-3" />
            <h2 className="text-3xl font-bold">Ready to Hire Indian Army Veterans?</h2>
          </div>
          <p className="text-xl mb-8 text-green-100">
            Join 800+ companies that have successfully hired Indian Army veterans through VetBridge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/employers/register">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
