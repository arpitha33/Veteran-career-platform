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
  Calendar,
  MessageCircle,
  Bookmark,
  User,
  Shield,
  Award,
  Video,
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
    match: 96,
    summary:
      "Decorated Infantry officer with extensive experience in strategic operations and team leadership. Led multiple battalions in challenging terrains. Expert in crisis management and operational planning.",
    saved: false,
    postings: ["Kashmir Valley", "Siachen Glacier", "Eastern Command"],
    specializations: ["Counter-insurgency", "High-altitude warfare", "Strategic planning"],
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
    match: 92,
    summary:
      "Signals officer with deep expertise in military communications and technology systems. Successfully managed large-scale communication networks across multiple commands.",
    saved: true,
    postings: ["Northern Command", "Western Command", "Army HQ Delhi"],
    specializations: ["Military communications", "Network security", "Technology integration"],
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
    match: 89,
    summary:
      "Engineer officer with extensive experience in infrastructure development and logistics management. Led major construction projects in challenging environments.",
    saved: false,
    postings: ["Ladakh", "Arunachal Pradesh", "Rajasthan"],
    specializations: ["Border infrastructure", "Logistics planning", "Construction management"],
  },
  {
    id: 4,
    name: "Captain Sunita Reddy (Retd.)",
    title: "Former Army Service Corps - Supply Chain Management",
    location: "Hyderabad, TS",
    regiment: "Army Service Corps",
    rank: "Captain",
    serviceYears: "2010-2022 (12 years)",
    experience: "12 years military + 2 years civilian",
    skills: ["Supply Chain", "Inventory Management", "Procurement", "Vendor Relations"],
    education: "OTA Chennai, Army Institute of Management, MBA Supply Chain",
    clearance: "Confidential",
    awards: ["Army Commendation Card", "Unit Citation"],
    availability: "Available in 15 days",
    match: 87,
    summary:
      "Army Service Corps officer with expertise in supply chain management and procurement. Managed complex logistics operations across multiple locations.",
    saved: false,
    postings: ["Central Command", "Southern Command", "Eastern Command"],
    specializations: ["Military logistics", "Procurement systems", "Inventory optimization"],
  },
]

export default function SearchVeteransPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedRegiment, setSelectedRegiment] = useState("")
  const [selectedRank, setSelectedRank] = useState("")
  const [availableOnly, setAvailableOnly] = useState(false)

  const filteredVeterans = veterans.filter((veteran) => {
    const matchesSearch =
      veteran.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veteran.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veteran.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      veteran.regiment.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = !selectedLocation || veteran.location.includes(selectedLocation)
    const matchesRegiment = !selectedRegiment || veteran.regiment === selectedRegiment
    const matchesRank = !selectedRank || veteran.rank === selectedRank
    const matchesAvailability = !availableOnly || veteran.availability.includes("Immediately")

    return matchesSearch && matchesLocation && matchesRegiment && matchesRank && matchesAvailability
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/employers/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                <h1 className="text-2xl font-bold text-green-800">Search Indian Army Veterans</h1>
              </div>
            </div>
            <div className="text-sm text-gray-600">{filteredVeterans.length} veterans found</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8 border-green-200">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by name, regiment, skills, or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-green-200 focus:border-green-400"
                  />
                </div>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="border-green-200">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Bangalore">Bangalore, KA</SelectItem>
                    <SelectItem value="Mumbai">Mumbai, MH</SelectItem>
                    <SelectItem value="Pune">Pune, MH</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad, TS</SelectItem>
                    <SelectItem value="Chennai">Chennai, TN</SelectItem>
                    <SelectItem value="Delhi">Delhi, DL</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedRegiment} onValueChange={setSelectedRegiment}>
                  <SelectTrigger className="border-green-200">
                    <SelectValue placeholder="Regiment/Corps" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regiments</SelectItem>
                    <SelectItem value="Rajputana Rifles">Rajputana Rifles</SelectItem>
                    <SelectItem value="Corps of Signals">Corps of Signals</SelectItem>
                    <SelectItem value="Corps of Engineers">Corps of Engineers</SelectItem>
                    <SelectItem value="Army Service Corps">Army Service Corps</SelectItem>
                    <SelectItem value="Armoured Corps">Armoured Corps</SelectItem>
                    <SelectItem value="Artillery">Artillery</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedRank} onValueChange={setSelectedRank}>
                  <SelectTrigger className="border-green-200">
                    <SelectValue placeholder="Rank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ranks</SelectItem>
                    <SelectItem value="Colonel">Colonel</SelectItem>
                    <SelectItem value="Lieutenant Colonel">Lieutenant Colonel</SelectItem>
                    <SelectItem value="Major">Major</SelectItem>
                    <SelectItem value="Captain">Captain</SelectItem>
                    <SelectItem value="Lieutenant">Lieutenant</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="border-green-200">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Experience</SelectItem>
                    <SelectItem value="10-15">10-15 years</SelectItem>
                    <SelectItem value="15-20">15-20 years</SelectItem>
                    <SelectItem value="20-25">20-25 years</SelectItem>
                    <SelectItem value="25+">25+ years</SelectItem>
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
            <Card key={veteran.id} className="hover:shadow-lg transition-shadow border-green-100">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-orange-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {veteran.name
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{veteran.name}</h3>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {veteran.match}% Match
                        </Badge>
                        <Badge variant="outline" className="border-orange-200 text-orange-700">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified Veteran
                        </Badge>
                      </div>
                      <h4 className="text-lg text-gray-700 mb-3">{veteran.title}</h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-green-600" />
                            {veteran.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Shield className="h-4 w-4 mr-2 text-green-600" />
                            {veteran.regiment}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <User className="h-4 w-4 mr-2 text-green-600" />
                            {veteran.rank}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2 text-green-600" />
                            Service: {veteran.serviceYears}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">Education: </span>
                            <span className="text-gray-600">{veteran.education}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">Clearance: </span>
                            <span className="text-gray-600">{veteran.clearance}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">Availability: </span>
                            <span className="text-gray-600">{veteran.availability}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">Key Postings: </span>
                            <div className="text-gray-600 text-xs">
                              {veteran.postings.map((posting, index) => (
                                <div key={index}>• {posting}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-1 text-orange-600" />
                          Awards & Honors
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
                            <Badge key={skill} variant="outline" className="text-xs border-green-200 text-green-700">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">Military Specializations</h5>
                        <div className="flex flex-wrap gap-2">
                          {veteran.specializations.map((spec) => (
                            <Badge key={spec} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 line-clamp-2">{veteran.summary}</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-6">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                      <Video className="h-4 w-4 mr-2" />
                      Video Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-2" />
                      {veteran.saved ? "Saved" : "Save"}
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
          <Card className="border-green-200">
            <CardContent className="p-12 text-center">
              <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No veterans found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {filteredVeterans.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Load More Veterans
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
