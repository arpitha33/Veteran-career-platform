"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"

export default function PostJobPage() {
  const [requiredSkills, setRequiredSkills] = useState(["Leadership", "Project Management"])
  const [preferredSkills, setPreferredSkills] = useState(["Team Building"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = (skillType: "required" | "preferred") => {
    if (newSkill.trim()) {
      if (skillType === "required") {
        setRequiredSkills([...requiredSkills, newSkill.trim()])
      } else {
        setPreferredSkills([...preferredSkills, newSkill.trim()])
      }
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string, skillType: "required" | "preferred") => {
    if (skillType === "required") {
      setRequiredSkills(requiredSkills.filter((skill) => skill !== skillToRemove))
    } else {
      setPreferredSkills(preferredSkills.filter((skill) => skill !== skillToRemove))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/employers/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-blue-900">Post New Job</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Create Job Posting</CardTitle>
            <CardDescription>
              Create a compelling job posting to attract qualified veterans to your organization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input id="jobTitle" placeholder="e.g., Senior Project Manager" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" placeholder="e.g., Engineering, Operations" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobType">Job Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workMode">Work Mode *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select work mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bangalore">Bangalore, Karnataka</SelectItem>
                      <SelectItem value="mumbai">Mumbai, Maharashtra</SelectItem>
                      <SelectItem value="pune">Pune, Maharashtra</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad, Telangana</SelectItem>
                      <SelectItem value="chennai">Chennai, Tamil Nadu</SelectItem>
                      <SelectItem value="delhi">Delhi, Delhi</SelectItem>
                      <SelectItem value="gurgaon">Gurgaon, Haryana</SelectItem>
                      <SelectItem value="noida">Noida, Uttar Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salaryRange">Salary Range (₹ per annum)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select salary range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-5">₹3,00,000 - ₹5,00,000</SelectItem>
                      <SelectItem value="5-8">₹5,00,000 - ₹8,00,000</SelectItem>
                      <SelectItem value="8-12">₹8,00,000 - ₹12,00,000</SelectItem>
                      <SelectItem value="12-18">₹12,00,000 - ₹18,00,000</SelectItem>
                      <SelectItem value="18-25">₹18,00,000 - ₹25,00,000</SelectItem>
                      <SelectItem value="25+">₹25,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Job Description</h3>

              <div className="space-y-2">
                <Label htmlFor="jobSummary">Job Summary *</Label>
                <Textarea
                  id="jobSummary"
                  placeholder="Provide a brief overview of the role and its key objectives..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="responsibilities">Key Responsibilities *</Label>
                <Textarea
                  id="responsibilities"
                  placeholder="List the main responsibilities and duties for this role..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="qualifications">Required Qualifications *</Label>
                <Textarea
                  id="qualifications"
                  placeholder="List the minimum education, experience, and certification requirements..."
                  className="min-h-[100px]"
                />
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Skills & Requirements</h3>

              <div className="space-y-4">
                <div>
                  <Label>Required Skills</Label>
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {requiredSkills.map((skill) => (
                      <Badge key={skill} variant="default" className="px-3 py-1">
                        {skill}
                        <button
                          onClick={() => removeSkill(skill, "required")}
                          className="ml-2 text-white hover:text-gray-200"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add required skill..."
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addSkill("required")}
                    />
                    <Button onClick={() => addSkill("required")} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Preferred Skills</Label>
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {preferredSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                        <button
                          onClick={() => removeSkill(skill, "preferred")}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add preferred skill..."
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addSkill("preferred")}
                    />
                    <Button onClick={() => addSkill("preferred")} size="sm" variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Military Preferences */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Military Background Preferences</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label>Preferred Military Branches</Label>
                  <div className="space-y-2">
                    {["Indian Army", "Indian Navy", "Indian Air Force", "Coast Guard", "Paramilitary Forces"].map(
                      (branch) => (
                        <div key={branch} className="flex items-center space-x-2">
                          <Checkbox id={branch.toLowerCase().replace(/\s+/g, "-")} />
                          <Label htmlFor={branch.toLowerCase().replace(/\s+/g, "-")}>{branch}</Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Security Clearance</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select clearance requirement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Not Required</SelectItem>
                      <SelectItem value="confidential">Confidential</SelectItem>
                      <SelectItem value="secret">Secret</SelectItem>
                      <SelectItem value="top-secret">Top Secret</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="militaryExperience">Relevant Military Experience</Label>
                <Textarea
                  id="militaryExperience"
                  placeholder="Describe what type of military experience would be valuable for this role..."
                  className="min-h-[80px]"
                />
              </div>
            </div>

            {/* Benefits & Perks */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Benefits & Perks</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {["Health Insurance", "Life Insurance", "Provident Fund", "Gratuity", "Performance Bonus"].map(
                    (benefit) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <Checkbox id={benefit.toLowerCase().replace(/\s+/g, "-")} />
                        <Label htmlFor={benefit.toLowerCase().replace(/\s+/g, "-")}>{benefit}</Label>
                      </div>
                    ),
                  )}
                </div>
                <div className="space-y-2">
                  {[
                    "Flexible Working Hours",
                    "Work from Home",
                    "Professional Development",
                    "Paid Time Off",
                    "Employee Stock Options",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2">
                      <Checkbox id={benefit.toLowerCase().replace(/\s+/g, "-")} />
                      <Label htmlFor={benefit.toLowerCase().replace(/\s+/g, "-")}>{benefit}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalBenefits">Additional Benefits</Label>
                <Textarea
                  id="additionalBenefits"
                  placeholder="List any other benefits, perks, or unique offerings..."
                  className="min-h-[80px]"
                />
              </div>
            </div>

            {/* Application Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Application Settings</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="applicationDeadline">Application Deadline</Label>
                  <Input id="applicationDeadline" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Expected Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="veteran-friendly" defaultChecked />
                  <Label htmlFor="veteran-friendly">Mark as Veteran-Friendly Position</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="urgent-hiring" />
                  <Label htmlFor="urgent-hiring">Urgent Hiring</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remote-interview" defaultChecked />
                  <Label htmlFor="remote-interview">Remote Interview Available</Label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline">Save as Draft</Button>
              <div className="flex space-x-4">
                <Button variant="outline">Preview</Button>
                <Button>Post Job</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
