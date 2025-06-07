"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Briefcase,
  BookOpen,
  TrendingUp,
  Star,
  MapPin,
  Clock,
  Users,
  Award,
  Target,
  MessageCircle,
  Calendar,
  Bell,
  Settings,
  LogOut,
  Search,
  Filter,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function VeteranDashboard() {
  const [notifications] = useState([
    { id: 1, type: "job", message: "New job match: Strategic Operations Manager at TCS", time: "2 hours ago" },
    { id: 2, type: "mentor", message: "Brigadier Priya Sharma accepted your connection request", time: "1 day ago" },
    { id: 3, type: "interview", message: "Interview scheduled with Mahindra Defence for tomorrow", time: "2 days ago" },
  ])

  const [jobMatches] = useState([
    {
      id: 1,
      title: "Strategic Operations Manager",
      company: "Tata Consultancy Services (TCS)",
      location: "Mumbai, Maharashtra",
      salary: "₹25-35 LPA",
      match: 97,
      posted: "2 days ago",
      type: "Full-time",
      skills: ["Strategic Planning", "Team Leadership", "Operations Management"],
    },
    {
      id: 2,
      title: "Project Manager - Defence",
      company: "Mahindra Defence Systems",
      location: "Bangalore, Karnataka",
      salary: "₹22-30 LPA",
      match: 94,
      posted: "5 days ago",
      type: "Full-time",
      skills: ["Project Management", "Defence Systems", "Leadership"],
    },
    {
      id: 3,
      title: "Security Head",
      company: "Reliance Industries",
      location: "Navi Mumbai, Maharashtra",
      salary: "₹28-40 LPA",
      match: 91,
      posted: "1 week ago",
      type: "Full-time",
      skills: ["Security Management", "Risk Assessment", "Team Leadership"],
    },
  ])

  const [upcomingEvents] = useState([
    {
      id: 1,
      title: "Virtual Career Fair",
      description: "Indian IT & Defence Companies",
      date: "December 15, 2024",
      time: "2:00 PM",
      companies: ["TCS", "Infosys", "HAL", "Mahindra"],
    },
    {
      id: 2,
      title: "Resume Workshop",
      description: "Military Experience Translation",
      date: "December 18, 2024",
      time: "6:00 PM",
      companies: [],
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Corporate Interview Skills",
      date: "December 20, 2024",
      time: "4:00 PM",
      companies: [],
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3 mr-8">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">VetBridge</h1>
              </div>
              <nav className="hidden md:flex md:space-x-8">
                <Link
                  href="/veteran/dashboard"
                  className="text-orange-600 font-medium border-b-2 border-orange-600 pb-4"
                >
                  Dashboard
                </Link>
                <Link href="/profile" className="text-gray-500 hover:text-gray-700 pb-4">
                  Profile
                </Link>
                <Link href="/opportunities" className="text-gray-500 hover:text-gray-700 pb-4">
                  Jobs
                </Link>
                <Link href="/mentors" className="text-gray-500 hover:text-gray-700 pb-4">
                  Mentors
                </Link>
                <Link href="/resources" className="text-gray-500 hover:text-gray-700 pb-4">
                  Resources
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/profile">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  COL
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Colonel Rajesh Kumar</p>
                  <p className="text-xs text-gray-500">Rajputana Rifles (Retd.)</p>
                </div>
              </div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Colonel Kumar!</h2>
          <p className="text-gray-600">Ready to take the next step in your career journey? Let's make it happen.</p>
        </div>

        {/* Profile Completion Alert */}
        <Card className="mb-8 border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-1">Complete Your Profile</h3>
                  <p className="text-orange-700 mb-2">
                    Your profile is 75% complete. Add more details for better job matches.
                  </p>
                  <Progress value={75} className="w-64 h-2" />
                </div>
              </div>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/veteran/profile">
                  Complete Now
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Job Matches</p>
                  <p className="text-3xl font-bold text-gray-900">47</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12 this week
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Applications</p>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1" />3 pending
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Profile Views</p>
                  <p className="text-3xl font-bold text-gray-900">234</p>
                  <p className="text-xs text-purple-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +45 this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Mentor Connections</p>
                  <p className="text-3xl font-bold text-gray-900">5</p>
                  <p className="text-xs text-orange-600 flex items-center mt-1">
                    <Award className="h-3 w-3 mr-1" />
                    Active mentors
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Matches */}
          <div className="lg:col-span-2">
            <Card className="border-orange-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-orange-600" />
                      Recommended Jobs
                    </CardTitle>
                    <CardDescription>Based on your military experience and career preferences</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/veteran/jobs">
                        View All
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobMatches.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900 text-lg">{job.title}</h4>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {job.match}% Match
                            </Badge>
                            <Badge variant="outline">{job.type}</Badge>
                          </div>
                          <p className="text-gray-600 font-medium mb-2">{job.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.posted}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-lg font-semibold text-green-600">{job.salary}</p>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                            Apply Now
                          </Button>
                          <Button variant="outline" size="sm">
                            Save Job
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link href="/opportunities">
                      <Search className="h-4 w-4 mr-2" />
                      Explore All Jobs
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-blue-600" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-3 border rounded-lg hover:bg-gray-50">
                      <p className="text-sm text-gray-900 mb-1">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Featured Mentor */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-green-600" />
                  Featured Mentor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    BG
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Brigadier Priya Sharma (Retd.)</h4>
                    <p className="text-sm text-gray-600">Former Signals Officer</p>
                    <p className="text-sm text-gray-600">Senior PM, Infosys</p>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">(4.9)</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Technology transition specialist</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Session
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  <Link href="/skill-assessment">
                    <Target className="h-4 w-4 mr-2" />
                    Take Skill Assessment
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/profile">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Build Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/resources">
                    <Users className="h-4 w-4 mr-2" />
                    Interview Prep
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/opportunities">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Salary Insights
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-3 border rounded-lg">
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{event.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                      </div>
                      {event.companies.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {event.companies.map((company) => (
                            <Badge key={company} variant="outline" className="text-xs">
                              {company}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Military Pride Section */}
            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-green-50">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Honoring Your Service</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Your dedication to the nation continues as you embark on a new mission in the civilian world. We're
                  here to support your transition every step of the way.
                </p>
                <div className="text-xs text-gray-500 flex items-center justify-center">
                  🇮🇳 Jai Hind! Serving the Nation, Building the Future
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8 border-gray-200">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates on VetBridge</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Applied to Strategic Operations Manager at TCS</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Applied
                </Badge>
              </div>

              <div className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Connected with Brigadier Priya Sharma</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  Connected
                </Badge>
              </div>

              <div className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Completed skill assessment</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
                <Badge variant="outline" className="text-purple-600 border-purple-600">
                  Completed
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
