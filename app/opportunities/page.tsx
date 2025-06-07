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
  Clock,
  DollarSign,
  Building,
  Bookmark,
  ExternalLink,
  Star,
  Users,
  TrendingUp,
  Award,
  Shield,
} from "lucide-react"
import Link from "next/link"

const jobOpportunities = [
  {
    id: 1,
    title: "Strategic Operations Manager",
    company: "Tata Consultancy Services (TCS)",
    location: "Mumbai, Maharashtra",
    salary: "₹25-35 LPA",
    type: "Full-time",
    experience: "15-20 years",
    match: 97,
    posted: "2 days ago",
    description:
      "Lead strategic operations initiatives across multiple business units. Drive operational excellence and process optimization. Manage cross-functional teams and stakeholder relationships.",
    requirements: [
      "15+ years of leadership experience",
      "Strategic planning and execution",
      "Team management (50+ people)",
      "Process optimization expertise",
      "Strong communication skills",
    ],
    benefits: [
      "Health insurance for family",
      "Performance-based bonuses",
      "Stock options",
      "Flexible working hours",
      "Professional development budget",
    ],
    veteranFriendly: true,
    saved: false,
    companyRating: 4.3,
    employeeCount: "500,000+",
    industry: "Information Technology",
  },
  {
    id: 2,
    title: "Project Manager - Defence Systems",
    company: "Mahindra Defence Systems",
    location: "Bangalore, Karnataka",
    salary: "₹22-30 LPA",
    type: "Full-time",
    experience: "12-18 years",
    match: 94,
    posted: "5 days ago",
    description:
      "Manage complex defence projects from conception to delivery. Coordinate with government agencies and ensure compliance with defence standards. Lead technical teams and manage project timelines.",
    requirements: [
      "Defence/military background preferred",
      "Project management certification (PMP)",
      "Experience with government contracts",
      "Technical project leadership",
      "Security clearance eligible",
    ],
    benefits: [
      "Comprehensive health coverage",
      "Retirement benefits",
      "Performance incentives",
      "Training and certification support",
      "Work-life balance initiatives",
    ],
    veteranFriendly: true,
    saved: true,
    companyRating: 4.1,
    employeeCount: "10,000+",
    industry: "Defence & Aerospace",
  },
  {
    id: 3,
    title: "Security Head - Corporate",
    company: "Reliance Industries",
    location: "Navi Mumbai, Maharashtra",
    salary: "₹28-40 LPA",
    type: "Full-time",
    experience: "18-25 years",
    match: 91,
    posted: "1 week ago",
    description:
      "Oversee corporate security operations across multiple facilities. Develop security protocols and emergency response procedures. Manage security teams and coordinate with law enforcement.",
    requirements: [
      "Military/police background essential",
      "Security management experience",
      "Crisis management expertise",
      "Team leadership skills",
      "Knowledge of security technologies",
    ],
    benefits: [
      "Executive health package",
      "Company car and driver",
      "Housing allowance",
      "Annual performance bonus",
      "Leadership development programs",
    ],
    veteranFriendly: true,
    saved: false,
    companyRating: 4.2,
    employeeCount: "100,000+",
    industry: "Oil & Gas",
  },
  {
    id: 4,
    title: "Operations Manager - Manufacturing",
    company: "Bajaj Auto Limited",
    location: "Pune, Maharashtra",
    salary: "₹20-28 LPA",
    type: "Full-time",
    experience: "10-15 years",
    match: 88,
    posted: "3 days ago",
    description:
      "Drive operational excellence in manufacturing processes. Implement lean manufacturing principles and ensure quality standards. Lead production teams and optimize resource utilization.",
    requirements: [
      "Manufacturing operations experience",
      "Lean Six Sigma certification",
      "Team management skills",
      "Quality management systems",
      "Process improvement expertise",
    ],
    benefits: [
      "Medical insurance",
      "Provident fund",
      "Performance bonuses",
      "Skill development programs",
      "Employee stock purchase plan",
    ],
    veteranFriendly: true,
    saved: false,
    companyRating: 4.0,
    employeeCount: "25,000+",
    industry: "Automotive",
  },
  {
    id: 5,
    title: "Training & Development Head",
    company: "Infosys Limited",
    location: "Hyderabad, Telangana",
    salary: "₹24-32 LPA",
    type: "Full-time",
    experience: "12-18 years",
    match: 85,
    posted: "1 week ago",
    description:
      "Design and implement comprehensive training programs for employees. Develop leadership development initiatives and manage training budgets. Create learning pathways for career progression.",
    requirements: [
      "Training and development experience",
      "Leadership development expertise",
      "Curriculum design skills",
      "Budget management",
      "Strong presentation skills",
    ],
    benefits: [
      "Health and wellness programs",
      "Education assistance",
      "Flexible work arrangements",
      "Career advancement opportunities",
      "Global exposure programs",
    ],
    veteranFriendly: true,
    saved: false,
    companyRating: 4.4,
    employeeCount: "300,000+",
    industry: "Information Technology",
  },
]

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedSalary, setSelectedSalary] = useState("")
  const [veteranFriendlyOnly, setVeteranFriendlyOnly] = useState(false)
  const [savedJobs, setSavedJobs] = useState<number[]>([2])

  const filteredJobs = jobOpportunities.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = !selectedLocation || job.location.includes(selectedLocation)
    const matchesType = !selectedType || job.type === selectedType
    const matchesSalary = !selectedSalary || job.salary.includes(selectedSalary)
    const matchesVeteranFriendly = !veteranFriendlyOnly || job.veteranFriendly

    return matchesSearch && matchesLocation && matchesType && matchesSalary && matchesVeteranFriendly
  })

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/veteran/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">Job Opportunities</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">{filteredJobs.length} opportunities found</div>
              <Badge className="bg-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                {filteredJobs.filter((job) => job.match >= 90).length} high matches
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8 border-orange-200">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search jobs, companies, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-orange-200 focus:border-orange-400"
                  />
                </div>
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="border-orange-200">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Mumbai">Mumbai, MH</SelectItem>
                    <SelectItem value="Bangalore">Bangalore, KA</SelectItem>
                    <SelectItem value="Pune">Pune, MH</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad, TS</SelectItem>
                    <SelectItem value="Chennai">Chennai, TN</SelectItem>
                    <SelectItem value="Delhi">Delhi, DL</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="border-orange-200">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSalary} onValueChange={setSelectedSalary}>
                  <SelectTrigger className="border-orange-200">
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
                  <SelectTrigger className="border-orange-200">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Experience</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10-15">10-15 years</SelectItem>
                    <SelectItem value="15-20">15-20 years</SelectItem>
                    <SelectItem value="20+">20+ years</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="veteran-friendly"
                    checked={veteranFriendlyOnly}
                    onCheckedChange={setVeteranFriendlyOnly}
                  />
                  <label htmlFor="veteran-friendly" className="text-sm font-medium">
                    Veteran-Friendly Only
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {job.match}% Match
                      </Badge>
                      {job.veteranFriendly && (
                        <Badge variant="outline" className="border-orange-200 text-orange-700">
                          <Shield className="h-3 w-3 mr-1" />
                          Veteran-Friendly
                        </Badge>
                      )}
                      <Badge variant="outline">{job.type}</Badge>
                    </div>

                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="font-medium text-gray-900">{job.company}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{job.companyRating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.employeeCount}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {job.industry}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-6 text-gray-600 mb-4">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.posted}
                      </span>
                      <span className="text-sm">Experience: {job.experience}</span>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Key Requirements</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                          {job.requirements.length > 3 && (
                            <li className="text-orange-600 text-xs">+{job.requirements.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {benefit}
                            </li>
                          ))}
                          {job.benefits.length > 3 && (
                            <li className="text-orange-600 text-xs">+{job.benefits.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Why Veterans Love This</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-start">
                            <Award className="h-3 w-3 mr-2 text-orange-600 mt-1" />
                            Leadership opportunities
                          </li>
                          <li className="flex items-start">
                            <Shield className="h-3 w-3 mr-2 text-green-600 mt-1" />
                            Values-driven culture
                          </li>
                          <li className="flex items-start">
                            <TrendingUp className="h-3 w-3 mr-2 text-blue-600 mt-1" />
                            Career growth path
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-6">
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => toggleSaveJob(job.id)}
                      className={savedJobs.includes(job.id) ? "border-orange-600 text-orange-600" : ""}
                    >
                      <Bookmark className={`h-4 w-4 mr-2 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                      {savedJobs.includes(job.id) ? "Saved" : "Save"}
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm">
                      Company Info
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <Card className="border-orange-200">
            <CardContent className="p-12 text-center">
              <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No opportunities found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {filteredJobs.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              Load More Opportunities
            </Button>
          </div>
        )}

        {/* Job Search Tips */}
        <Card className="mt-8 border-green-200 bg-gradient-to-br from-green-50 to-orange-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Search Tips for Veterans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Highlight Military Skills</h4>
                <p className="text-sm text-gray-600">
                  Translate your military experience into civilian terms that employers understand.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Network Actively</h4>
                <p className="text-sm text-gray-600">
                  Connect with other veterans and professionals in your target industry.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Focus on Growth</h4>
                <p className="text-sm text-gray-600">
                  Look for companies that value continuous learning and career development.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
