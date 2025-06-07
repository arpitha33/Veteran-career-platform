"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Building,
  Users,
  Briefcase,
  TrendingUp,
  Plus,
  Search,
  MessageCircle,
  Calendar,
  Eye,
  Star,
  MapPin,
  Clock,
  Award,
  Filter,
  Download,
  Settings,
  Bell,
  LogOut,
  ChevronRight,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function EmployerDashboard() {
  const [activeJobs] = useState([
    {
      id: 1,
      title: "Strategic Operations Manager",
      department: "Operations",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      salary: "₹25-35 LPA",
      posted: "3 days ago",
      applications: 47,
      views: 234,
      status: "Active",
      priority: "High",
      deadline: "Dec 30, 2024",
    },
    {
      id: 2,
      title: "Project Manager - Defence",
      department: "Defence Systems",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      salary: "₹22-30 LPA",
      posted: "1 week ago",
      applications: 32,
      views: 189,
      status: "Active",
      priority: "Medium",
      deadline: "Jan 15, 2025",
    },
    {
      id: 3,
      title: "Security Head",
      department: "Security",
      location: "Pune, Maharashtra",
      type: "Full-time",
      salary: "₹28-40 LPA",
      posted: "2 weeks ago",
      applications: 28,
      views: 156,
      status: "Active",
      priority: "High",
      deadline: "Jan 10, 2025",
    },
  ])

  const [recentApplications] = useState([
    {
      id: 1,
      candidateName: "Colonel Rajesh Kumar (Retd.)",
      position: "Strategic Operations Manager",
      regiment: "Rajputana Rifles",
      experience: "25 years",
      match: 97,
      appliedDate: "2 hours ago",
      status: "New",
      location: "Mumbai, MH",
      expectedSalary: "₹30-35 LPA",
    },
    {
      id: 2,
      candidateName: "Major Priya Sharma (Retd.)",
      position: "Project Manager - Defence",
      regiment: "Corps of Signals",
      experience: "18 years",
      match: 94,
      appliedDate: "1 day ago",
      status: "Reviewed",
      location: "Bangalore, KA",
      expectedSalary: "₹25-30 LPA",
    },
    {
      id: 3,
      candidateName: "Lt. Colonel Amit Singh (Retd.)",
      position: "Security Head",
      regiment: "Corps of Engineers",
      experience: "22 years",
      match: 91,
      appliedDate: "2 days ago",
      status: "Shortlisted",
      location: "Pune, MH",
      expectedSalary: "₹32-38 LPA",
    },
  ])

  const [upcomingInterviews] = useState([
    {
      id: 1,
      candidateName: "Brigadier Suresh Nair (Retd.)",
      position: "Strategic Operations Manager",
      date: "Dec 15, 2024",
      time: "2:00 PM",
      type: "Video Call",
      interviewer: "Rajesh Gupta, VP Operations",
    },
    {
      id: 2,
      candidateName: "Colonel Anita Verma (Retd.)",
      position: "Project Manager - Defence",
      date: "Dec 16, 2024",
      time: "10:30 AM",
      type: "In-person",
      interviewer: "Priya Mehta, Director",
    },
  ])

  const [companyMetrics] = useState({
    totalApplications: 127,
    activeJobs: 3,
    hiredThisMonth: 8,
    averageTimeToHire: 21,
    candidateQuality: 4.6,
    responseRate: 89,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3 mr-8">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">VetBridge</h1>
              </div>
              <nav className="hidden md:flex md:space-x-8">
                <Link href="/employer/dashboard" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-4">
                  Dashboard
                </Link>
                <Link href="/employers/post-job" className="text-gray-500 hover:text-gray-700 pb-4">
                  Jobs
                </Link>
                <Link href="/employers/search-veterans" className="text-gray-500 hover:text-gray-700 pb-4">
                  Candidates
                </Link>
                <Link href="/employers/dashboard" className="text-gray-500 hover:text-gray-700 pb-4">
                  Analytics
                </Link>
                <Link href="/employers/connect" className="text-gray-500 hover:text-gray-700 pb-4">
                  Messages
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  5
                </span>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/employers/post-job">
                  <Plus className="h-4 w-4 mr-2" />
                  Post Job
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  TC
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">TechCorp India</p>
                  <p className="text-xs text-gray-500">Premium Account</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/employers/dashboard">
                  <Settings className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">
                  <LogOut className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, TechCorp India!</h2>
          <p className="text-gray-600">Manage your veteran hiring pipeline and track recruitment success.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-3xl font-bold text-gray-900">{companyMetrics.totalApplications}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +23 this week
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                  <p className="text-3xl font-bold text-gray-900">{companyMetrics.activeJobs}</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <Briefcase className="h-3 w-3 mr-1" />
                    All performing well
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Hired This Month</p>
                  <p className="text-3xl font-bold text-gray-900">{companyMetrics.hiredThisMonth}</p>
                  <p className="text-xs text-purple-600 flex items-center mt-1">
                    <Award className="h-3 w-3 mr-1" />
                    Above target
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Time to Hire</p>
                  <p className="text-3xl font-bold text-gray-900">{companyMetrics.averageTimeToHire}</p>
                  <p className="text-xs text-orange-600 flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    days
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Jobs */}
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                      Active Job Postings
                    </CardTitle>
                    <CardDescription>Manage your current openings and track performance</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/employer/post-job">
                        <Plus className="h-4 w-4 mr-2" />
                        Post Job
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeJobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900 text-lg">{job.title}</h4>
                            <Badge
                              variant={job.priority === "High" ? "default" : "secondary"}
                              className={job.priority === "High" ? "bg-red-600" : ""}
                            >
                              {job.priority} Priority
                            </Badge>
                            <Badge variant="outline">{job.status}</Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{job.department}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Posted {job.posted}
                            </span>
                            <span className="text-green-600 font-medium">{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-6 text-sm">
                            <span className="flex items-center text-blue-600">
                              <Users className="h-4 w-4 mr-1" />
                              {job.applications} applications
                            </span>
                            <span className="flex items-center text-purple-600">
                              <Eye className="h-4 w-4 mr-1" />
                              {job.views} views
                            </span>
                            <span className="text-gray-500">Deadline: {job.deadline}</span>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            View Applications
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit Job
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-green-600" />
                      Recent Applications
                    </CardTitle>
                    <CardDescription>Latest veteran applications to review</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/employer/candidates">
                      View All
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {application.candidateName
                              .split(" ")
                              .slice(0, 2)
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-gray-900">{application.candidateName}</h4>
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                {application.match}% Match
                              </Badge>
                              <Badge
                                variant={
                                  application.status === "New"
                                    ? "default"
                                    : application.status === "Shortlisted"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {application.status}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-2">Applied for: {application.position}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                              <span>{application.regiment}</span>
                              <span>{application.experience} experience</span>
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {application.location}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-green-600 font-medium">
                                Expected: {application.expectedSalary}
                              </span>
                              <span className="text-xs text-gray-500">Applied {application.appliedDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            View Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Interviews */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                  Upcoming Interviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingInterviews.map((interview) => (
                    <div key={interview.id} className="p-3 border rounded-lg">
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{interview.candidateName}</h4>
                      <p className="text-sm text-gray-600 mb-2">{interview.position}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>{interview.date}</span>
                        <span>{interview.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {interview.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{interview.interviewer}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Interview
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/employers/post-job">
                    <Plus className="h-4 w-4 mr-2" />
                    Post New Job
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/employers/search-veterans">
                    <Search className="h-4 w-4 mr-2" />
                    Search Veterans
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/employer/dashboard">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/employer/dashboard">
                    <Download className="h-4 w-4 mr-2" />
                    Download Reports
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-indigo-600" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Candidate Quality</span>
                      <span className="font-medium">{companyMetrics.candidateQuality}/5.0</span>
                    </div>
                    <div className="flex items-center">
                      <Progress value={(companyMetrics.candidateQuality / 5) * 100} className="flex-1 mr-2" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(companyMetrics.candidateQuality)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Response Rate</span>
                      <span className="font-medium">{companyMetrics.responseRate}%</span>
                    </div>
                    <Progress value={companyMetrics.responseRate} className="h-2" />
                  </div>
                  <div className="text-center pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      View Detailed Analytics
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hiring Tips */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-lg">Veteran Hiring Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border">
                    <h4 className="font-medium text-green-900 text-sm mb-1">Military Skills Translation</h4>
                    <p className="text-xs text-green-700">
                      Look beyond job titles - veterans bring leadership, discipline, and problem-solving skills.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border">
                    <h4 className="font-medium text-blue-900 text-sm mb-1">Interview Best Practices</h4>
                    <p className="text-xs text-blue-700">
                      Ask about specific achievements and how they handled challenging situations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
