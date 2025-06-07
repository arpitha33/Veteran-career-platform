"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowLeft,
  Search,
  Filter,
  MapPin,
  MessageCircle,
  UserPlus,
  User,
  Shield,
  Award,
  DollarSign,
  Building,
} from "lucide-react"
import Link from "next/link"

const veterans = [
  {
    id: 1,
    name: "Colonel Rajesh Kumar (Retd.)",
    title: "Former Infantry Officer - Strategic Operations",
    location: "Bangalore, KA",
    regiment: "Rajputana Rifles",
    rank: "Colonel",
    serviceYears: "1995-2020 (25 years)",
    experience: "25 years military + 3 years civilian",
    skills: ["Strategic Planning", "Team Leadership", "Operations Management", "Crisis Management"],
    education: "NDA Khadakwasla, Staff College Wellington, MBA Operations",
    clearance: "Secret",
    awards: ["Vishisht Seva Medal", "Sena Medal", "Mention in Dispatches"],
    availability: "Immediately Available",
    expectedSalary: "₹25-35 LPA",
    placementValue: "₹1.5-2.0L",
    match: 96,
    summary: "Decorated Infantry officer with extensive experience in strategic operations and team leadership.",
    saved: false,
    postings: ["Kashmir Valley", "Siachen Glacier", "Eastern Command"],
    specializations: ["Counter-insurgency", "High-altitude warfare", "Strategic planning"],
    recruiterNotes: "Excellent leadership background, suitable for senior management roles",
  },
  {
    id: 2,
    name: "Lt. Colonel Priya Sharma (Retd.)",
    title: "Former Signals Officer - Technology & Communications",
    location: "Mumbai, MH",
    regiment: "Corps of Signals",
    rank: "Lieutenant Colonel",
    serviceYears: "2000-2022 (22 years)",
    experience: "22 years military + 2 years civilian",
    skills: ["Technology Management", "Communications", "Project Management", "Team Building"],
    education: "IMA Dehradun, MCTE Mhow, M.Tech Electronics",
    clearance: "Top Secret",
    awards: ["Vishisht Seva Medal", "Army Commendation Card"],
    availability: "Available in 30 days",
    expectedSalary: "₹20-28 LPA",
    placementValue: "₹1.2-1.6L",
    match: 92,
    summary: "Signals officer with deep expertise in military communications and technology systems.",
    saved: true,
    postings: ["Northern Command", "Western Command", "Army HQ Delhi"],
    specializations: ["Military communications", "Network security", "Technology integration"],
    recruiterNotes: "Strong tech background, perfect for IT leadership roles",
  },
  {
    id: 3,
    name: "Major Amit Singh (Retd.)",
    title: "Former Engineer Officer - Infrastructure & Logistics",
    location: "Pune, MH",
    regiment: "Corps of Engineers",
    rank: "Major",
    serviceYears: "2005-2023 (18 years)",
    experience: "18 years military + 1 year civilian",
    skills: ["Infrastructure Development", "Logistics Management", "Project Execution", "Quality Control"],
    education: "IMA Dehradun, MCEME Pune, B.Tech Civil Engineering",
    clearance: "Secret",
    awards: ["Sena Medal", "GOC-in-C Commendation"],
    availability: "Immediately Available",
    expectedSalary: "₹18-25 LPA",
    placementValue: "₹1.0-1.4L",
    match: 89,
    summary: "Engineer officer with extensive experience in infrastructure development and logistics management.",
    saved: false,
    postings: ["Ladakh", "Arunachal Pradesh", "Rajasthan"],
    specializations: ["Border infrastructure", "Logistics planning", "Construction management"],
    recruiterNotes: "Great for operations and project management roles",
  },
]

export default function RecruiterSearchVeteransPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedRegiment, setSelectedRegiment] = useState("")
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("")
  const [availableOnly, setAvailableOnly] = useState(false)

  const filteredVeterans = veterans.filter((veteran) => {
    const matchesSearch =
      veteran.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veteran.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veteran.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      veteran.regiment.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = !selectedLocation || veteran.location.includes(selectedLocation)
    const matchesRegiment = !selectedRegiment || veteran.regiment === selectedRegiment
    const matchesSalary = !selectedSalaryRange || veteran.expectedSalary.includes(selectedSalaryRange.split("-")[0])
    const matchesAvailability = !availableOnly || veteran.availability.includes("Immediately")

    return matchesSearch && matchesLocation && matchesRegiment && matchesSalary && matchesAvailability
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/recruiters/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <h1 className="text-2xl font-bold text-blue-800">Source Indian Army Veterans</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">{filteredVeterans.length} veterans found</div>
              <Badge className="bg-green-600">
                Potential Earnings: ₹{(filteredVeterans.length * 1.2).toFixed(1)}L+
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8 border-blue-200">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by name, regiment, skills, or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-blue-200 focus:border-blue-400"
                  />
                </div>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Bangalore">Bangalore, KA</SelectItem>
                    <SelectItem value="Mumbai">Mumbai, MH</SelectItem>
                    <SelectItem value="Pune">Pune, MH</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad, TS</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedRegiment} onValueChange={setSelectedRegiment}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="Regiment/Corps" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regiments</SelectItem>
                    <SelectItem value="Rajputana Rifles">Rajputana Rifles</SelectItem>
                    <SelectItem value="Corps of Signals">Corps of Signals</SelectItem>
                    <SelectItem value="Corps of Engineers">Corps of Engineers</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSalaryRange} onValueChange={setSelectedSalaryRange}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="Salary Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ranges</SelectItem>
                    <SelectItem value="15-20">₹15-20 LPA</SelectItem>
                    <SelectItem value="20-25">₹20-25 LPA</SelectItem>
                    <SelectItem value="25-30">₹25-30 LPA</SelectItem>
                    <SelectItem value="30+">₹30+ LPA</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="Commission Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Commissions</SelectItem>
                    <SelectItem value="1-1.5">₹1-1.5L</SelectItem>
                    <SelectItem value="1.5-2">₹1.5-2L</SelectItem>
                    <SelectItem value="2+">₹2L+</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center space-x-2">
                  <Checkbox id="available-now" checked={availableOnly} onCheckedChange={setAvailableOnly} />
                  <label htmlFor="available-now" className="text-sm font-medium">
                    Available Now
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Veteran Profiles */}
        <div className="space-y-6">
          {filteredVeterans.map((veteran) => (
            <Card key={veteran.id} className="hover:shadow-lg transition-shadow border-blue-100">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {veteran.name
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{veteran.name}</h3>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {veteran.match}% Match
                        </Badge>
                        <Badge variant="outline" className="border-green-200 text-green-700">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                      <h4 className="text-lg text-gray-700 mb-3">{veteran.title}</h4>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                            {veteran.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Shield className="h-4 w-4 mr-2 text-blue-600" />
                            {veteran.regiment}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <User className="h-4 w-4 mr-2 text-blue-600" />
                            {veteran.rank}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">Expected Salary: </span>
                            <span className="text-gray-600">{veteran.expectedSalary}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">Availability: </span>
                            <span className="text-gray-600">{veteran.availability}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">Clearance: </span>
                            <span className="text-gray-600">{veteran.clearance}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">Service: </span>
                            <span className="text-gray-600">{veteran.serviceYears}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">Key Postings: </span>
                            <div className="text-gray-600 text-xs">
                              {veteran.postings.slice(0, 2).map((posting, index) => (
                                <div key={index}>• {posting}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                            <span className="font-medium text-green-600">Commission: {veteran.placementValue}</span>
                          </div>
                          <div className="text-xs text-gray-500">Based on expected salary range</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-1 text-orange-600" />
                          Military Awards
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {veteran.awards.map((award) => (
                            <Badge key={award} variant="outline" className="text-xs border-orange-200 text-orange-700">
                              {award}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">Core Competencies</h5>
                        <div className="flex flex-wrap gap-2">
                          {veteran.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs border-blue-200 text-blue-700">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">Recruiter Notes</h5>
                        <p className="text-sm text-gray-600 italic">{veteran.recruiterNotes}</p>
                      </div>

                      <p className="text-sm text-gray-700 line-clamp-2">{veteran.summary}</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-6">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add to Pipeline
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                      <Building className="h-4 w-4 mr-2" />
                      Match to Client
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Full Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVeterans.length === 0 && (
          <Card className="border-blue-200">
            <CardContent className="p-12 text-center">
              <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No veterans found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {filteredVeterans.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Load More Veterans
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
