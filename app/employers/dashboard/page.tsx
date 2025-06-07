"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Users, Briefcase, Eye, MessageCircle, TrendingUp, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function EmployerDashboard() {
  const [activeJobs] = useState([
    {
      id: 1,
      title: "Senior Project Manager",
      location: "Bangalore, KA",
      posted: "5 days ago",
      applications: 23,
      views: 156,
      status: "Active",
    },
    {
      id: 2,
      title: "Operations Manager",
      location: "Mumbai, MH",
      posted: "2 weeks ago",
      applications: 41,
      views: 298,
      status: "Active",
    },
    {
      id: 3,
      title: "Cybersecurity Analyst",
      location: "Pune, MH",
      posted: "1 week ago",
      applications: 18,
      views: 134,
      status: "Active",
    },
  ])

  const [recentApplications] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Senior Project Manager",
      branch: "Indian Army",
      experience: "12 years",
      match: 95,
      appliedDate: "2 days ago",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Operations Manager",
      branch: "Indian Navy",
      experience: "8 years",
      match: 88,
      appliedDate: "3 days ago",
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Cybersecurity Analyst",
      branch: "Indian Air Force",
      experience: "6 years",
      match: 92,
      appliedDate: "1 day ago",
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/employers" className="text-2xl font-bold text-blue-900 mr-8">
                VetBridge
              </Link>
              <nav className="hidden md:flex md:space-x-8">
                <Link href="/employers/dashboard" className="text-blue-900 font-medium">
                  Dashboard
                </Link>
                <Link href="/employers/post-job" className="text-gray-500 hover:text-gray-700">
                  Post Jobs
                </Link>
                <Link href="/employers/search-veterans" className="text-gray-500 hover:text-gray-700">
                  Find Veterans
                </Link>
                <Link href="/employers/messages" className="text-gray-500 hover:text-gray-700">
                  Messages
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild>
                <Link href="/employers/post-job">
                  <Plus className="h-4 w-4 mr-2" />
                  Post New Job
                </Link>
              </Button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                TC
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, TechCorp!</h2>
          <p className="text-gray-600">Manage your veteran hiring pipeline and track your recruitment success.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold text-gray-900">82</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Profile Views</p>
                  <p className="text-2xl font-bold text-gray-900">588</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Hires This Month</p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Jobs */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Active Job Postings</CardTitle>
                  <Button size="sm" asChild>
                    <Link href="/employers/post-job">
                      <Plus className="h-4 w-4 mr-2" />
                      Post New Job
                    </Link>
                  </Button>
                </div>
                <CardDescription>Manage your current job openings and track performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeJobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{job.title}</h4>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.posted}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-600">
                            <Users className="h-4 w-4 inline mr-1" />
                            {job.applications} applications
                          </span>
                          <span className="text-sm text-gray-600">
                            <Eye className="h-4 w-4 inline mr-1" />
                            {job.views} views
                          </span>
                          <Badge variant="secondary">{job.status}</Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Applications
                        </Button>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Latest veteran applications to review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {application.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{application.name}</h4>
                        <p className="text-sm text-gray-600">{application.role}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {application.branch}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {application.match}% Match
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{application.appliedDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Applications
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/employers/search-veterans">
                    <Users className="h-4 w-4 mr-2" />
                    Search Veterans
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/employers/messages">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Messages
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/employers/analytics">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Hiring Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Hiring Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 text-sm">Veteran-Friendly Job Descriptions</h4>
                    <p className="text-xs text-blue-700 mt-1">
                      Use clear, civilian language and highlight transferable skills from military experience.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 text-sm">Interview Best Practices</h4>
                    <p className="text-xs text-green-700 mt-1">
                      Ask about specific achievements and leadership experiences during military service.
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
