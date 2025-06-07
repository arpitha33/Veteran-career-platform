"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  DollarSign,
  UserCheck,
  Search,
  MessageCircle,
  Calendar,
  Award,
  Target,
  Building,
} from "lucide-react"
import Link from "next/link"

export default function RecruiterDashboard() {
  const [activeClients] = useState([
    {
      id: 1,
      company: "Infosys Limited",
      openPositions: 5,
      placementsMade: 12,
      avgCommission: "₹85,000",
      status: "Active",
      priority: "High",
    },
    {
      id: 2,
      company: "Mahindra Group",
      openPositions: 3,
      placementsMade: 8,
      avgCommission: "₹75,000",
      status: "Active",
      priority: "Medium",
    },
    {
      id: 3,
      company: "TCS",
      openPositions: 7,
      placementsMade: 15,
      avgCommission: "₹90,000",
      status: "Active",
      priority: "High",
    },
  ])

  const [recentPlacements] = useState([
    {
      id: 1,
      veteranName: "Colonel Rajesh Kumar",
      company: "Infosys Limited",
      position: "Strategic Operations Manager",
      commission: "₹1,25,000",
      placedDate: "2 days ago",
      status: "Completed",
    },
    {
      id: 2,
      veteranName: "Major Priya Sharma",
      company: "TCS",
      position: "Project Manager",
      commission: "₹95,000",
      placedDate: "1 week ago",
      status: "Completed",
    },
    {
      id: 3,
      veteranName: "Captain Amit Singh",
      company: "Mahindra Group",
      position: "Operations Specialist",
      commission: "₹80,000",
      placedDate: "2 weeks ago",
      status: "Pending Payment",
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-800 mr-8">
                VetBridge Recruiter
              </Link>
              <nav className="hidden md:flex md:space-x-8">
                <Link href="/recruiters/dashboard" className="text-blue-800 font-medium">
                  Dashboard
                </Link>
                <Link href="/recruiters/search-veterans" className="text-gray-500 hover:text-gray-700">
                  Find Veterans
                </Link>
                <Link href="/recruiters/clients" className="text-gray-500 hover:text-gray-700">
                  My Clients
                </Link>
                <Link href="/recruiters/placements" className="text-gray-500 hover:text-gray-700">
                  Placements
                </Link>
                <Link href="/recruiters/earnings" className="text-gray-500 hover:text-gray-700">
                  Earnings
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/recruiters/search-veterans">
                  <Search className="h-4 w-4 mr-2" />
                  Find Veterans
                </Link>
              </Button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                RC
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Recruiter!</h2>
          <p className="text-gray-600">Manage your veteran placements and grow your recruitment business.</p>
        </div>

        {/* Performance Alert */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Monthly Performance</h3>
                <p className="text-blue-700 mb-3">
                  You're 80% towards your monthly placement goal. 2 more placements to reach target!
                </p>
                <Progress value={80} className="w-64" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">8/10</div>
                <div className="text-sm text-blue-700">Placements This Month</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <UserCheck className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Placements</p>
                  <p className="text-2xl font-bold text-gray-900">47</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900">₹42.5L</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Clients</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900">89%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Clients */}
          <div className="lg:col-span-2">
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Active Client Companies</CardTitle>
                  <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Building className="h-4 w-4 mr-2" />
                    View All Clients
                  </Button>
                </div>
                <CardDescription>Companies actively hiring through your recruitment services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeClients.map((client) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{client.company}</h4>
                          <Badge
                            variant={client.priority === "High" ? "default" : "secondary"}
                            className={client.priority === "High" ? "bg-red-600" : ""}
                          >
                            {client.priority} Priority
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Open Positions:</span> {client.openPositions}
                          </div>
                          <div>
                            <span className="font-medium">Placements Made:</span> {client.placementsMade}
                          </div>
                          <div>
                            <span className="font-medium">Avg Commission:</span> {client.avgCommission}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          View Jobs
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
            {/* Recent Placements */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-green-600" />
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
                          variant={placement.status === "Completed" ? "default" : "secondary"}
                          className={placement.status === "Completed" ? "bg-green-600" : "bg-orange-500"}
                        >
                          {placement.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{placement.position}</p>
                      <p className="text-xs text-gray-600 mb-2">{placement.company}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">{placement.commission}</span>
                        <span className="text-xs text-gray-500">{placement.placedDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50">
                  View All Placements
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/recruiters/search-veterans">
                    <Search className="h-4 w-4 mr-2" />
                    Search Veterans
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/recruiters/submit-candidate">
                    <UserCheck className="h-4 w-4 mr-2" />
                    Submit Candidate
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/recruiters/schedule-interview">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Interview
                  </Link>
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
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">This Month</span>
                    <span className="font-medium">₹8.5L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Last Month</span>
                    <span className="font-medium">₹12.2L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Pending Payments</span>
                    <span className="font-medium text-orange-600">₹2.8L</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-900">Total Lifetime</span>
                      <span className="font-bold text-green-600">₹42.5L</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50">
                  View Detailed Report
                </Button>
              </CardContent>
            </Card>

            {/* Performance Tips */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-orange-600" />
                  Performance Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h4 className="font-medium text-orange-900 text-sm">Focus on High-Value Roles</h4>
                    <p className="text-xs text-orange-700 mt-1">
                      Senior leadership positions offer 40% higher commissions.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 text-sm">Build Client Relationships</h4>
                    <p className="text-xs text-blue-700 mt-1">Regular check-ins increase repeat business by 60%.</p>
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
