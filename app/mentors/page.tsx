"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Star, MessageCircle, Calendar, Users, Building, MapPin } from "lucide-react"
import Link from "next/link"

const mentors = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Senior Project Manager",
    company: "Infosys",
    location: "Bangalore, KA",
    militaryBranch: "Indian Navy",
    militaryRole: "Operations Officer",
    yearsOut: 5,
    industry: "Technology",
    specialties: ["Project Management", "Leadership Transition", "Tech Industry"],
    rating: 4.9,
    reviews: 47,
    sessions: 156,
    bio: "Former Navy Operations Officer with 8 years of military service. Successfully transitioned to tech industry and now leads major projects at Microsoft. Passionate about helping veterans navigate corporate culture.",
    availability: "Available",
    hourlyRate: "₹2,500/hour",
    image: "SM",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "VP of Operations",
    company: "TCS",
    location: "Mumbai, MH",
    militaryBranch: "Indian Army",
    militaryRole: "Logistics Officer",
    yearsOut: 7,
    industry: "E-commerce",
    specialties: ["Operations Management", "Supply Chain", "Executive Leadership"],
    rating: 4.8,
    reviews: 32,
    sessions: 89,
    bio: "Army veteran with extensive logistics and operations experience. Climbed from entry-level to VP at Amazon. Specializes in helping veterans leverage military logistics experience in civilian roles.",
    availability: "Limited",
    hourlyRate: "₹3,500/hour",
    image: "MR",
  },
  {
    id: 3,
    name: "Jennifer Chen",
    title: "Cybersecurity Director",
    company: "HAL (Hindustan Aeronautics)",
    location: "Pune, MH",
    militaryBranch: "Indian Air Force",
    militaryRole: "Cyber Operations",
    yearsOut: 4,
    industry: "Defense",
    specialties: ["Cybersecurity", "Security Clearance Jobs", "Technical Leadership"],
    rating: 4.9,
    reviews: 28,
    sessions: 67,
    bio: "Air Force cyber operations specialist turned cybersecurity executive. Maintains TS/SCI clearance and helps veterans transition into high-security tech roles. Expert in translating military cyber skills.",
    availability: "Available",
    hourlyRate: "₹3,000/hour",
    image: "JC",
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Regional Sales Manager",
    company: "Wipro",
    location: "Chennai, TN",
    militaryBranch: "Indian Army",
    militaryRole: "Infantry Officer",
    yearsOut: 6,
    industry: "Software",
    specialties: ["Sales Leadership", "Career Pivoting", "Remote Work"],
    rating: 4.7,
    reviews: 41,
    sessions: 123,
    bio: "Former Marine Infantry Officer who successfully pivoted to sales leadership. Understands the challenges of transitioning from combat roles to corporate environments. Specializes in building confidence and communication skills.",
    availability: "Available",
    hourlyRate: "₹2,200/hour",
    image: "DT",
  },
]

export default function MentorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [selectedBranch, setSelectedBranch] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("")

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesIndustry = !selectedIndustry || mentor.industry === selectedIndustry
    const matchesBranch = !selectedBranch || mentor.militaryBranch === selectedBranch
    const matchesSpecialty = !selectedSpecialty || mentor.specialties.includes(selectedSpecialty)

    return matchesSearch && matchesIndustry && matchesBranch && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-blue-900">Find a Mentor</h1>
            </div>
            <div className="text-sm text-gray-600">{filteredMentors.length} mentors available</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search mentors by name, company, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                    <SelectItem value="Defense">Defense</SelectItem>
                    <SelectItem value="Software">Software</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger>
                    <SelectValue placeholder="Military Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Branches</SelectItem>
                    <SelectItem value="Army">Army</SelectItem>
                    <SelectItem value="Navy">Navy</SelectItem>
                    <SelectItem value="Air Force">Air Force</SelectItem>
                    <SelectItem value="Marines">Marines</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    <SelectItem value="Project Management">Project Management</SelectItem>
                    <SelectItem value="Leadership Transition">Leadership Transition</SelectItem>
                    <SelectItem value="Operations Management">Operations Management</SelectItem>
                    <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="Sales Leadership">Sales Leadership</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="limited">Limited</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mentor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    {mentor.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                        <p className="text-gray-600">{mentor.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Building className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{mentor.company}</span>
                        </div>
                      </div>
                      <Badge variant={mentor.availability === "Available" ? "default" : "secondary"}>
                        {mentor.availability}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{mentor.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {mentor.sessions} sessions
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{mentor.location}</span>
                        <span>•</span>
                        <span>{mentor.militaryBranch} Veteran</span>
                        <span>•</span>
                        <span>{mentor.yearsOut} years out</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Former {mentor.militaryRole}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {mentor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">{mentor.bio}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{mentor.hourlyRate}</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                        <Button size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Session
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No mentors found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
              <Button variant="outline">Clear All Filters</Button>
            </CardContent>
          </Card>
        )}

        {/* How It Works */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>How Mentorship Works</CardTitle>
            <CardDescription>
              Connect with experienced veterans who've successfully transitioned to civilian careers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Find Your Mentor</h4>
                <p className="text-sm text-gray-600">
                  Browse mentors by industry, military background, and expertise areas
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Schedule Sessions</h4>
                <p className="text-sm text-gray-600">
                  Book one-on-one sessions for career guidance, interview prep, or industry insights
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Grow Your Network</h4>
                <p className="text-sm text-gray-600">
                  Build lasting professional relationships and expand your civilian network
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
