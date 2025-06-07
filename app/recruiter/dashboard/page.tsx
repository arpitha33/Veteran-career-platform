"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  DollarSign,
  TrendingUp,
  Target,
  Search,
  MessageCircle,
  Calendar,
  Award,
  Building,
  UserCheck,
  Phone,
  ChevronRight,
  Bell,
  Settings,
  LogOut,
  Plus,
  Filter,
} from "lucide-react"
import Link from "next/link"

export default function RecruiterDashboard() {
  const [monthlyTarget] = useState({ target: 10, achieved: 8, percentage: 80 })

  const [activeClients] = useState([
    {
      id: 1,
      company: "Tata Consultancy Services",
      contactPerson: "Rajesh Gupta",
      openPositions: 5,
      placementsMade: 12,
      avgCommission: "₹1,25,000",
      status: "Active",
      priority: "High",
      lastContact: "2 days ago",
      nextFollowUp: "Dec 16, 2024",
    },
    {
      id: 2,
      company: "Mahindra Defence Systems",
      contactPerson: "Priya Mehta",
      openPositions: 3,
      placementsMade: 8,
      avgCommission: "₹95,000",
      status: "Active",
      priority: "Medium",
      lastContact: "1 week ago",
      nextFollowUp: "Dec 18, 2024",
    },
    {
      id: 3,
      company: "Infosys Limited",
      contactPerson: "Amit Sharma",
      openPositions: 7,
      placementsMade: 15,
      avgCommission: "₹1,10,000",
      status: "Active",
      priority: "High",
      lastContact: "3 days ago",
      nextFollowUp: "Dec 20, 2024",
    },
  ])

  const [recentPlacements] = useState([
    {
      id: 1,
      veteranName: "Colonel Rajesh Kumar (Retd.)",
      company: "TCS",
      position: "Strategic Operations Manager",
      commission: "₹1,45,000",
      placedDate: "Dec 10, 2024",
      status: "Completed",
      paymentStatus: "Paid",
    },
    {
      id: 2,
      veteranName: "Major Priya Sharma (Retd.)",
      company: "Mahindra Defence",
      position: "Project Manager",
      commission: "₹98,000",
      placedDate: "Dec 5, 2024",
      status: "Completed",
      paymentStatus: "Pending",
    },
    {
      id: 3,
      veteranName: "Lt. Colonel Amit Singh (Retd.)",
      company: "Infosys",
      position: "Team Lead - Operations",
      commission: "₹87,000",
      placedDate: "Nov 28, 2024",
      status: "Onboarding",
      paymentStatus: "Processing",
    },
  ])

  const [candidatePipeline] = useState([
    {
      id: 1,
      name: "Brigadier Suresh Nair (Retd.)",
      regiment: "Artillery",
      experience: "28 years",
      targetRole: "Senior Manager",
      expectedSalary: "₹35-45 LPA",
      status: "Interview Scheduled",
      client: "TCS",
      nextAction: "Interview on Dec 16",
    },
    {
      id: 2,
      name: "Colonel Anita Verma (Retd.)",
      regiment: "Corps of Engineers",
      experience: "24 years",
      targetRole: "Project Director",
      expectedSalary: "₹40-50 LPA",
      status: "Client Review",
      client: "Mahindra Defence",
      nextAction: "Awaiting feedback",
    },
    {
      id: 3,
      name: "Major Vikram Singh (Retd.)",
      regiment: "Armoured Corps",
      experience: "20 years",
      targetRole: "Operations Manager",
      expectedSalary: "₹25-35 LPA",
      status: "Profile Submitted",
      client: "Infosys",
      nextAction: "Follow up on Dec 17",
    },
  ])

  const [earningsData] = useState({
    thisMonth: 285000,
    lastMonth: 420000,
    totalLifetime: 2850000,
    pendingPayments: 183000,
    averagePerPlacement: 115000,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3 mr-8">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">VetBridge Recruiter</h1>
              </div>
              <nav className="hidden md:flex md:space-x-8">
                <Link
                  href="/recruiter/dashboard"
                  className="text-green-600 font-medium border-b-2 border-green-600 pb-4"
                >
                  Dashboard
                </Link>
                <Link href="/recruiters/search-veterans" className="text-gray-500 hover:text-gray-700 pb-4">
                  Candidates
                </Link>
                <Link href="/recruiter/dashboard" className="text-gray-500 hover:text-gray-700 pb-4">
                  Clients
                </Link>
                <Link href="/recruiter/dashboard" className="text-gray-500 hover:text-gray-700 pb-4">
                  Placements
                </Link>
                <Link href="/recruiter/dashboard" className="text-gray-500 hover:text-gray-700 pb-4">
                  Earnings
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  7
                </span>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/recruiters/search-veterans">
                  <Search className="h-4 w-4 mr-2" />
                  Find Veterans
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  RC
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Recruiter Connect</p>
                  <p className="text-xs text-gray-500">Premium Partner</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/recruiter/dashboard">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Recruiter!</h2>
          <p className="text-gray-600">Track your placements, manage clients, and grow your recruitment business.</p>
        </div>

        {/* Monthly Target Progress */}
        <Card className="mb-8 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-1">Monthly Target Progress</h3>
                  <p className="text-green-700 mb-2">
                    {monthlyTarget.achieved} of {monthlyTarget.target} placements completed
                  </p>
                  <Progress value={monthlyTarget.percentage} className="w-64 h-3" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-900">{monthlyTarget.percentage}%</div>
                <div className="text-sm text-green-700">Target Achievement</div>
                <Badge className="mt-2 bg-green-600">{monthlyTarget.target - monthlyTarget.achieved} more to go!</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Placements</p>
                  <p className="text-3xl font-bold text-gray-900">47</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8 this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month Earnings</p>
                  <p className="text-3xl font-bold text-gray-900">₹{(earningsData.thisMonth / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <DollarSign className="h-3 w-3 mr-1" />₹{earningsData.averagePerPlacement.toLocaleString()} avg
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Clients</p>
                  <p className="text-3xl font-bold text-gray-900">{activeClients.length}</p>
                  <p className="text-xs text-purple-600 flex items-center mt-1">
                    <Building className="h-3 w-3 mr-1" />
                    All premium accounts
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-3xl font-bold text-gray-900">89%</p>
                  <p className="text-xs text-orange-600 flex items-center mt-1">
                    <Award className="h-3 w-3 mr-1" />
                    Industry leading
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Clients */}
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Building className="h-5 w-5 mr-2 text-blue-600" />
                      Active Client Companies
                    </CardTitle>
                    <CardDescription>Companies actively hiring through your services</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/recruiter/clients">
                        View All
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeClients.map((client) => (
                    <div key={client.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900 text-lg">{client.company}</h4>
                            <Badge
                              variant={client.priority === "High" ? "default" : "secondary"}
                              className={client.priority === "High" ? "bg-red-600" : ""}
                            >
                              {client.priority} Priority
                            </Badge>
                            <Badge variant="outline">{client.status}</Badge>
                          </div>
                          <p className="text-gray-600 mb-2">Contact: {client.contactPerson}</p>
                          <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                            <div>
                              <span className="text-gray-500">Open Positions:</span>
                              <span className="font-medium ml-1">{client.openPositions}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Placements Made:</span>
                              <span className="font-medium ml-1">{client.placementsMade}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Avg Commission:</span>
                              <span className="font-medium ml-1 text-green-600">{client.avgCommission}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Last contact: {client.lastContact}</span>
                            <span>Next follow-up: {client.nextFollowUp}</span>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                          <Button variant="outline" size="sm">
                            View Jobs
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Candidate Pipeline */}
            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-green-600" />
                      Candidate Pipeline
                    </CardTitle>
                    <CardDescription>Veterans in your recruitment pipeline</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/recruiter/candidates">
                      View All
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {candidatePipeline.map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {candidate.name
                              .split(" ")
                              .slice(0, 2)
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-gray-900">{candidate.name}</h4>
                              <Badge
                                variant={
                                  candidate.status === "Interview Scheduled"
                                    ? "default"
                                    : candidate.status === "Client Review"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {candidate.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                              <div>
                                <span className="text-gray-500">Regiment:</span>
                                <span className="font-medium ml-1">{candidate.regiment}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Experience:</span>
                                <span className="font-medium ml-1">{candidate.experience}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Target Role:</span>
                                <span className="font-medium ml-1">{candidate.targetRole}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Expected Salary:</span>
                                <span className="font-medium ml-1 text-green-600">{candidate.expectedSalary}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-blue-600">Client: {candidate.client}</span>
                              <span className="text-xs text-gray-500">{candidate.nextAction}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Update Status
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4 mr-2" />
                            Call
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
            {/* Recent Placements */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-purple-600" />
                  Recent Placements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPlacements.map((placement) => (
                    <div key={placement.id} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{placement.veteranName}</h4>
                        <Badge
                          variant={
                            placement.status === "Completed"
                              ? "default"
                              : placement.status === "Onboarding"
                                ? "secondary"
                                : "outline"
                          }
                          className={placement.status === "Completed" ? "bg-green-600" : ""}
                        >
                          {placement.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{placement.position}</p>
                      <p className="text-xs text-gray-600 mb-2">{placement.company}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">{placement.commission}</span>
                        <Badge
                          variant={
                            placement.paymentStatus === "Paid"
                              ? "default"
                              : placement.paymentStatus === "Pending"
                                ? "secondary"
                                : "outline"
                          }
                          className={`text-xs ${placement.paymentStatus === "Paid" ? "bg-green-600" : ""}`}
                        >
                          {placement.paymentStatus}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{placement.placedDate}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Placements
                </Button>
              </CardContent>
            </Card>

            {/* Earnings Summary */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                  Earnings Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">This Month</span>
                    <span className="font-medium">₹{earningsData.thisMonth.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Last Month</span>
                    <span className="font-medium">₹{earningsData.lastMonth.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Pending Payments</span>
                    <span className="font-medium text-orange-600">
                      ₹{earningsData.pendingPayments.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-900">Total Lifetime</span>
                      <span className="font-bold text-green-600">₹{earningsData.totalLifetime.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Detailed Report
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
                  <Link href="/recruiters/search-veterans">
                    <Search className="h-4 w-4 mr-2" />
                    Search Veterans
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/recruiter/dashboard">
                    <UserCheck className="h-4 w-4 mr-2" />
                    Submit Candidate
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/recruiter/dashboard">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Interview
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/recruiter/dashboard">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Client
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Performance Tips */}
            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-lg">Performance Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border">
                    <h4 className="font-medium text-indigo-900 text-sm mb-1">Focus on Quality</h4>
                    <p className="text-xs text-indigo-700">
                      High-quality placements lead to better client relationships and repeat business.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border">
                    <h4 className="font-medium text-green-900 text-sm mb-1">Regular Follow-ups</h4>
                    <p className="text-xs text-green-700">
                      Stay in touch with clients and candidates to build strong professional relationships.
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
