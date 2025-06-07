import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, Video, FileText, Calendar, ExternalLink, Download, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
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
              <h1 className="text-2xl font-bold text-blue-900">Career Resources</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="guides" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="guides">Career Guides</TabsTrigger>
            <TabsTrigger value="courses">Online Courses</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <Badge variant="secondary">Essential</Badge>
                  </div>
                  <CardTitle>Military to Civilian Resume Guide</CardTitle>
                  <CardDescription>
                    Complete guide to translating military experience into civilian resume language
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      15 min read
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      2.3k views
                    </span>
                  </div>
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <Badge variant="outline">Popular</Badge>
                  </div>
                  <CardTitle>Interview Preparation for Veterans</CardTitle>
                  <CardDescription>
                    Master civilian interviews with strategies tailored for military backgrounds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      20 min read
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      1.8k views
                    </span>
                  </div>
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                    <Badge variant="secondary">New</Badge>
                  </div>
                  <CardTitle>Networking for Introverted Veterans</CardTitle>
                  <CardDescription>
                    Build professional networks without the pressure of traditional networking events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      12 min read
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      956 views
                    </span>
                  </div>
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-orange-600" />
                  </div>
                  <CardTitle>Salary Negotiation Strategies</CardTitle>
                  <CardDescription>Learn how to research, prepare for, and conduct salary negotiations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      18 min read
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      1.2k views
                    </span>
                  </div>
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Understanding Corporate Culture</CardTitle>
                  <CardDescription>
                    Navigate the unwritten rules and expectations of civilian workplaces
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      25 min read
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      1.5k views
                    </span>
                  </div>
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                  </div>
                  <CardTitle>LinkedIn Optimization for Veterans</CardTitle>
                  <CardDescription>
                    Create a compelling LinkedIn profile that attracts recruiters and opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      10 min read
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      2.1k views
                    </span>
                  </div>
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Video className="h-5 w-5 text-blue-600" />
                    <Badge variant="secondary">Free</Badge>
                  </div>
                  <CardTitle>Project Management Fundamentals</CardTitle>
                  <CardDescription>Learn the basics of project management with real-world examples</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration: 4 hours</span>
                      <span className="text-gray-600">12 modules</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Beginner</Badge>
                      <Badge variant="outline">Certificate</Badge>
                    </div>
                    <Button className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      Start Course
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Video className="h-5 w-5 text-green-600" />
                    <Badge variant="secondary">Premium</Badge>
                  </div>
                  <CardTitle>Leadership in Civilian Organizations</CardTitle>
                  <CardDescription>Adapt your military leadership skills to corporate environments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration: 6 hours</span>
                      <span className="text-gray-600">18 modules</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Intermediate</Badge>
                      <Badge variant="outline">Certificate</Badge>
                    </div>
                    <Button className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      Start Course
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Video className="h-5 w-5 text-purple-600" />
                    <Badge variant="secondary">Free</Badge>
                  </div>
                  <CardTitle>Data Analysis with Excel</CardTitle>
                  <CardDescription>Master Excel for data analysis and reporting in business contexts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration: 8 hours</span>
                      <span className="text-gray-600">24 modules</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Beginner</Badge>
                      <Badge variant="outline">Hands-on</Badge>
                    </div>
                    <Button className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      Start Course
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Video className="h-5 w-5 text-orange-600" />
                    <Badge variant="secondary">Premium</Badge>
                  </div>
                  <CardTitle>Digital Marketing Essentials</CardTitle>
                  <CardDescription>Learn digital marketing strategies and tools for career transition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration: 10 hours</span>
                      <span className="text-gray-600">30 modules</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Intermediate</Badge>
                      <Badge variant="outline">Project-based</Badge>
                    </div>
                    <Button className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      Start Course
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <Badge variant="secondary">Popular</Badge>
                  </div>
                  <CardTitle>Military-to-Civilian Resume Template</CardTitle>
                  <CardDescription>Professional resume template designed specifically for veterans</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">Microsoft Word & PDF formats included</div>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Template
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle>Cover Letter Templates</CardTitle>
                  <CardDescription>Multiple cover letter templates for different industries and roles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">5 different templates included</div>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Templates
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle>Interview Preparation Worksheet</CardTitle>
                  <CardDescription>Structured worksheet to prepare for common interview questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">Fillable PDF format</div>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Worksheet
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                  <CardTitle>Networking Contact Tracker</CardTitle>
                  <CardDescription>Spreadsheet template to track your professional networking efforts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">Excel format with formulas</div>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Tracker
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Salary Negotiation Script</CardTitle>
                  <CardDescription>Template scripts for salary negotiation conversations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">Multiple scenarios covered</div>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Scripts
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="h-5 w-5 text-teal-600" />
                  </div>
                  <CardTitle>90-Day Transition Plan</CardTitle>
                  <CardDescription>Comprehensive planning template for your career transition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">Week-by-week action plan</div>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <Badge variant="secondary">This Week</Badge>
                  </div>
                  <CardTitle>Virtual Career Fair - Technology Companies</CardTitle>
                  <CardDescription>Connect with tech companies actively hiring veterans</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Date & Time</h4>
                      <p className="text-sm text-gray-600">December 15, 2024</p>
                      <p className="text-sm text-gray-600">2:00 PM IST</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Format</h4>
                      <p className="text-sm text-gray-600">Virtual Event</p>
                      <p className="text-sm text-gray-600">Live chat with recruiters</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Companies</h4>
                      <p className="text-sm text-gray-600">Infosys, TCS, Wipro</p>
                      <p className="text-sm text-gray-600">+ 15 more companies</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Register for Event
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <Badge variant="outline">Next Week</Badge>
                  </div>
                  <CardTitle>Resume Workshop - Translating Military Experience</CardTitle>
                  <CardDescription>
                    Interactive workshop on converting military roles to civilian language
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Date & Time</h4>
                      <p className="text-sm text-gray-600">December 18, 2024</p>
                      <p className="text-sm text-gray-600">6:00 PM IST</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Format</h4>
                      <p className="text-sm text-gray-600">Interactive Workshop</p>
                      <p className="text-sm text-gray-600">Small group sessions</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Instructor</h4>
                      <p className="text-sm text-gray-600">Priya Sharma</p>
                      <p className="text-sm text-gray-600">Former Indian Navy Officer</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Register for Workshop
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <Badge variant="outline">Monthly</Badge>
                  </div>
                  <CardTitle>Veteran Networking Meetup</CardTitle>
                  <CardDescription>Monthly in-person networking event for veterans in transition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Date & Time</h4>
                      <p className="text-sm text-gray-600">First Thursday</p>
                      <p className="text-sm text-gray-600">6:30 PM - 8:30 PM</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                      <p className="text-sm text-gray-600">Various Cities</p>
                      <p className="text-sm text-gray-600">Check local chapters</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Format</h4>
                      <p className="text-sm text-gray-600">Casual networking</p>
                      <p className="text-sm text-gray-600">Guest speakers</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Find Local Chapter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tools">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Military Skills Translator</CardTitle>
                  <CardDescription>Convert military job titles and skills into civilian equivalents</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Use Translator Tool
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Salary Research Tool</CardTitle>
                  <CardDescription>Research salary ranges for your target roles and locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Research Salaries
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interview Practice Simulator</CardTitle>
                  <CardDescription>Practice common interview questions with AI-powered feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Start Practice
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Company Culture Analyzer</CardTitle>
                  <CardDescription>Research company culture and values before applying</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Analyze Companies
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
