"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

const assessmentQuestions = [
  {
    id: 1,
    category: "Leadership",
    question: "How would you rate your experience in leading teams of 10+ people?",
    options: [
      { value: "expert", label: "Expert - Led multiple large teams successfully", points: 5 },
      { value: "advanced", label: "Advanced - Led teams with good results", points: 4 },
      { value: "intermediate", label: "Intermediate - Some team leadership experience", points: 3 },
      { value: "basic", label: "Basic - Limited leadership experience", points: 2 },
      { value: "none", label: "No experience", points: 1 },
    ],
  },
  {
    id: 2,
    category: "Project Management",
    question: "How comfortable are you with managing complex projects with multiple stakeholders?",
    options: [
      { value: "expert", label: "Expert - Managed large, complex projects", points: 5 },
      { value: "advanced", label: "Advanced - Managed several successful projects", points: 4 },
      { value: "intermediate", label: "Intermediate - Some project management experience", points: 3 },
      { value: "basic", label: "Basic - Assisted with project management", points: 2 },
      { value: "none", label: "No experience", points: 1 },
    ],
  },
  {
    id: 3,
    category: "Communication",
    question: "How would you rate your ability to communicate complex information to diverse audiences?",
    options: [
      { value: "expert", label: "Expert - Regularly brief senior leadership", points: 5 },
      { value: "advanced", label: "Advanced - Comfortable with all audiences", points: 4 },
      { value: "intermediate", label: "Intermediate - Good communication skills", points: 3 },
      { value: "basic", label: "Basic - Can communicate effectively", points: 2 },
      { value: "none", label: "Prefer not to present", points: 1 },
    ],
  },
  {
    id: 4,
    category: "Problem Solving",
    question: "How do you approach solving complex, multi-faceted problems?",
    options: [
      { value: "expert", label: "Expert - Systematic approach with proven results", points: 5 },
      { value: "advanced", label: "Advanced - Strong analytical problem-solving", points: 4 },
      { value: "intermediate", label: "Intermediate - Can solve most problems", points: 3 },
      { value: "basic", label: "Basic - Need guidance for complex issues", points: 2 },
      { value: "none", label: "Prefer structured problems", points: 1 },
    ],
  },
  {
    id: 5,
    category: "Technology",
    question: "What is your comfort level with learning and using new technology?",
    options: [
      { value: "expert", label: "Expert - Quick to adopt and master new tech", points: 5 },
      { value: "advanced", label: "Advanced - Comfortable with most technology", points: 4 },
      { value: "intermediate", label: "Intermediate - Can learn with some effort", points: 3 },
      { value: "basic", label: "Basic - Prefer familiar technology", points: 2 },
      { value: "none", label: "Struggle with new technology", points: 1 },
    ],
  },
]

export default function SkillAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const nextQuestion = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const calculateResults = () => {
    const categoryScores: Record<string, { total: number; count: number }> = {}

    assessmentQuestions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.value === answer)
        if (option) {
          if (!categoryScores[question.category]) {
            categoryScores[question.category] = { total: 0, count: 0 }
          }
          categoryScores[question.category].total += option.points
          categoryScores[question.category].count += 1
        }
      }
    })

    return Object.entries(categoryScores).map(([category, scores]) => ({
      category,
      score: Math.round((scores.total / (scores.count * 5)) * 100),
      level:
        scores.total / scores.count >= 4
          ? "Expert"
          : scores.total / scores.count >= 3
            ? "Advanced"
            : scores.total / scores.count >= 2
              ? "Intermediate"
              : "Basic",
    }))
  }

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100

  if (showResults) {
    const results = calculateResults()

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Button variant="ghost" size="sm" asChild className="mr-4">
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Dashboard
                  </Link>
                </Button>
                <h1 className="text-2xl font-bold text-blue-900">Skill Assessment Results</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
              <CardDescription>
                Here's your skill profile based on your military experience and self-assessment
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {results.map((result) => (
              <Card key={result.category}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{result.category}</CardTitle>
                    <Badge
                      variant={
                        result.level === "Expert"
                          ? "default"
                          : result.level === "Advanced"
                            ? "secondary"
                            : result.level === "Intermediate"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {result.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span className="font-medium">{result.score}%</span>
                    </div>
                    <Progress value={result.score} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Recommended Career Paths
              </CardTitle>
              <CardDescription>
                Based on your skill profile, here are some career paths that align well with your strengths
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Project Manager</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Your leadership and project management skills make you an excellent candidate for PM roles.
                  </p>
                  <Badge variant="secondary">95% Match</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Operations Manager</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Strong problem-solving and leadership skills align well with operations management.
                  </p>
                  <Badge variant="secondary">88% Match</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Team Lead</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Your communication and leadership experience make you ideal for team leadership roles.
                  </p>
                  <Badge variant="secondary">92% Match</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Skill Development Recommendations
              </CardTitle>
              <CardDescription>Areas where additional training could enhance your marketability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Technology Skills</h4>
                    <p className="text-sm text-gray-600">
                      Consider taking courses in project management software (Jira, Asana) or data analysis tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Industry Certifications</h4>
                    <p className="text-sm text-gray-600">
                      PMP certification would significantly boost your project management credentials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Business Acumen</h4>
                    <p className="text-sm text-gray-600">
                      Understanding of business metrics and financial analysis would be valuable.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-4 mt-8">
            <Button asChild>
              <Link href="/opportunities">View Matching Jobs</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/profile">Update Profile</Link>
            </Button>
            <Button variant="outline">Retake Assessment</Button>
          </div>
        </main>
      </div>
    )
  }

  const question = assessmentQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-blue-900">Skill Assessment</h1>
            </div>
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {assessmentQuestions.length}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Assessment Progress</h2>
              <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Question */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="outline">{question.category}</Badge>
            </div>
            <CardTitle className="text-xl">{question.question}</CardTitle>
            <CardDescription>Select the option that best describes your experience level</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={answers[question.id] || ""} onValueChange={(value) => handleAnswer(question.id, value)}>
              {question.options.map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="font-medium text-gray-900 mb-1">{option.label}</div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button onClick={nextQuestion} disabled={!answers[question.id]}>
                {currentQuestion === assessmentQuestions.length - 1 ? "Complete Assessment" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Info */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-3">About This Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">What We Measure</h4>
                <ul className="space-y-1">
                  <li>• Leadership and team management</li>
                  <li>• Project management capabilities</li>
                  <li>• Communication skills</li>
                  <li>• Problem-solving abilities</li>
                  <li>• Technology adaptability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">How We Use Results</h4>
                <ul className="space-y-1">
                  <li>• Match you with relevant job opportunities</li>
                  <li>• Recommend skill development areas</li>
                  <li>• Connect you with appropriate mentors</li>
                  <li>• Suggest relevant training programs</li>
                  <li>• Optimize your profile for employers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
