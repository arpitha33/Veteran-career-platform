"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MessageCircle, Video, Calendar, Phone, Mail, Shield, Award, MapPin } from "lucide-react"
import Link from "next/link"

export default function ConnectVeteranPage() {
  const [selectedVeteran] = useState({
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
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    summary:
      "Decorated Infantry officer with extensive experience in strategic operations and team leadership. Led multiple battalions in challenging terrains. Expert in crisis management and operational planning.",
    postings: ["Kashmir Valley", "Siachen Glacier", "Eastern Command"],
    specializations: ["Counter-insurgency", "High-altitude warfare", "Strategic planning"],
  })

  const [messageType, setMessageType] = useState("initial")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/employers/search-veterans">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Search
                </Link>
              </Button>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                <h1 className="text-2xl font-bold text-green-800">Connect with Veteran</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Veteran Profile Summary */}
          <div className="lg:col-span-1">
            <Card className="border-green-200 sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {selectedVeteran.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{selectedVeteran.name}</h3>
                  <p className="text-gray-600 mb-2">{selectedVeteran.title}</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {selectedVeteran.match}% Match
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    {selectedVeteran.regiment}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    {selectedVeteran.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-green-600" />
                    {selectedVeteran.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-green-600" />
                    {selectedVeteran.phone}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-1 text-orange-600" />
                    Military Awards
                  </h4>
                  <div className="space-y-1">
                    {selectedVeteran.awards.map((award) => (
                      <div key={award} className="text-xs text-gray-600">
                        • {award}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Core Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedVeteran.skills.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-green-200 text-green-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    View Full Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connection Options */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="message" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="message">Message</TabsTrigger>
                <TabsTrigger value="video">Video Call</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="phone">Phone Call</TabsTrigger>
              </TabsList>

              <TabsContent value="message">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                      Send Message
                    </CardTitle>
                    <CardDescription>Send a direct message to connect with this veteran</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="messageType">Message Type</Label>
                      <Select value={messageType} onValueChange={setMessageType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="initial">Initial Interest</SelectItem>
                          <SelectItem value="interview">Interview Request</SelectItem>
                          <SelectItem value="job-offer">Job Opportunity</SelectItem>
                          <SelectItem value="information">Request Information</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Enter message subject"
                        defaultValue={
                          messageType === "initial"
                            ? "Interest in Your Profile - Strategic Operations Role"
                            : messageType === "interview"
                              ? "Interview Invitation - Leadership Position"
                              : messageType === "job-offer"
                                ? "Exciting Career Opportunity at Our Company"
                                : "Request for Additional Information"
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Write your message..."
                        className="min-h-[200px]"
                        defaultValue={
                          messageType === "initial"
                            ? `Dear Colonel Kumar,

I hope this message finds you well. I came across your profile on VetBridge and was impressed by your extensive military experience and leadership background.

We are currently looking for a Strategic Operations Manager at our company, and your experience with the Rajputana Rifles, particularly your expertise in strategic planning and crisis management, aligns perfectly with our requirements.

Your military awards and 25 years of distinguished service demonstrate the kind of leadership and dedication we value in our organization.

Would you be interested in discussing this opportunity further? I would be happy to schedule a call at your convenience.

Best regards,
[Your Name]
[Company Name]`
                            : messageType === "interview"
                              ? `Dear Colonel Kumar,

Thank you for your interest in our Strategic Operations Manager position. After reviewing your impressive military background and experience, we would like to invite you for an interview.

Your leadership experience with the Rajputana Rifles and expertise in strategic operations make you an ideal candidate for this role.

Please let me know your availability for the coming week, and we can schedule either a video call or in-person meeting at our Bangalore office.

Looking forward to hearing from you.

Best regards,
[Your Name]
[Company Name]`
                              : "Please customize your message here..."
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Your Company</Label>
                      <Input id="company" placeholder="Company Name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Position/Role</Label>
                      <Input id="position" placeholder="Position you're hiring for" />
                    </div>

                    <div className="flex space-x-4">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        Save Draft
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="video">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Video className="h-5 w-5 mr-2 text-green-600" />
                      Schedule Video Call
                    </CardTitle>
                    <CardDescription>Schedule a video interview with this veteran</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="14:00">02:00 PM</SelectItem>
                            <SelectItem value="15:00">03:00 PM</SelectItem>
                            <SelectItem value="16:00">04:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Meeting Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="90">1.5 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="agenda">Meeting Agenda</Label>
                      <Textarea
                        id="agenda"
                        placeholder="Outline the topics you'd like to discuss..."
                        className="min-h-[120px]"
                        defaultValue={`Meeting Agenda:

1. Introduction and company overview
2. Discussion of your military experience and achievements
3. Role requirements and responsibilities
4. Career transition support and opportunities
5. Compensation and benefits discussion
6. Next steps in the hiring process

Please feel free to add any topics you'd like to discuss.`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interviewers">Interviewers</Label>
                      <Input id="interviewers" placeholder="Names and titles of interview panel" />
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Video className="h-4 w-4 mr-2" />
                      Send Video Call Invitation
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-green-600" />
                      Schedule Meeting
                    </CardTitle>
                    <CardDescription>Schedule an in-person or phone meeting with this veteran</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="meetingType">Meeting Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select meeting type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in-person">In-Person Meeting</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="coffee">Informal Coffee Meeting</SelectItem>
                          <SelectItem value="office-visit">Office Visit & Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="meetingDate">Preferred Date</Label>
                        <Input id="meetingDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="meetingTime">Preferred Time</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="14:00">02:00 PM</SelectItem>
                            <SelectItem value="15:00">03:00 PM</SelectItem>
                            <SelectItem value="16:00">04:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Meeting Location</Label>
                      <Input id="location" placeholder="Office address or meeting venue" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="purpose">Meeting Purpose</Label>
                      <Textarea
                        id="purpose"
                        placeholder="Describe the purpose and agenda for this meeting..."
                        className="min-h-[100px]"
                        defaultValue="Initial discussion about career opportunities and cultural fit assessment."
                      />
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Send Meeting Request
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="phone">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-green-600" />
                      Request Phone Call
                    </CardTitle>
                    <CardDescription>Schedule a phone conversation with this veteran</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="callDate">Preferred Date</Label>
                        <Input id="callDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="callTime">Preferred Time</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="14:00">02:00 PM</SelectItem>
                            <SelectItem value="15:00">03:00 PM</SelectItem>
                            <SelectItem value="16:00">04:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="callDuration">Call Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="callPurpose">Call Purpose</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="screening">Initial Screening</SelectItem>
                          <SelectItem value="interview">Phone Interview</SelectItem>
                          <SelectItem value="discussion">Career Discussion</SelectItem>
                          <SelectItem value="followup">Follow-up Call</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="callNotes">Additional Notes</Label>
                      <Textarea
                        id="callNotes"
                        placeholder="Any specific topics or questions you'd like to discuss..."
                        className="min-h-[100px]"
                        defaultValue="Looking forward to discussing your military experience and how it aligns with our current opportunities."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactNumber">Your Contact Number</Label>
                      <Input id="contactNumber" placeholder="+91 XXXXX XXXXX" />
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Request Phone Call
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
