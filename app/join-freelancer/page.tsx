"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, FileText, CheckCircle2, ArrowRight } from "lucide-react"

const CALENDLY_LINK = "https://calendly.com/redpredator8/30min"

export default function JoinFreelancerPage() {
  const [formStep, setFormStep] = useState<"choice" | "form" | "success">("choice")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    expertise: "",
    experience: "",
    hourlyRate: "",
    availability: "",
    portfolio: "",
    bio: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep("success")
  }

  if (formStep === "success") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Application Submitted!</h2>
            <p className="text-muted-foreground">
              Thank you for your interest in joining Fast Call Tech's freelancer network. We'll review your application and
              get back to you within 2-3 business days.
            </p>
          </div>
          <div className="space-y-3">
            <Link href="/">
              <Button className="w-full rounded-full">Return to Homepage</Button>
            </Link>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full rounded-full bg-transparent">
                Or Book a Call Now
              </Button>
            </a>
          </div>
        </Card>
      </div>
    )
  }

  if (formStep === "choice") {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <span className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground text-xs font-bold">FC</span>
              <span className="font-extrabold tracking-tight">Fast Call Tech</span>
            </Link>
          </div>
        </header>

        {/* Choice Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Join as a Freelancer</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose how you'd like to connect with us. Fill out the form or book a call directly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Fill Form Option */}
              <Card className="p-8 hover:border-primary/50 transition-colors cursor-pointer group" onClick={() => setFormStep("form")}>
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">Fill Application Form</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Submit your information and portfolio. We'll review your profile and reach out within 2-3 business days.
                    </p>
                  </div>
                  <Button className="w-full rounded-full group-hover:bg-primary/90" onClick={() => setFormStep("form")}>
                    Continue to Form
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>

              {/* Book Call Option */}
              <Card className="p-8 hover:border-primary/50 transition-colors group">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">Book a Call</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Schedule a 30-minute call with our team. Discuss your skills, experience, and how we can work together.
                    </p>
                  </div>
                  <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full rounded-full bg-transparent group-hover:bg-secondary">
                      Schedule Call Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <span className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground text-xs font-bold">FC</span>
            <span className="font-extrabold tracking-tight">Fast Call Tech</span>
          </Link>
          <Button variant="ghost" onClick={() => setFormStep("choice")} className="text-sm">
            Back to Options
          </Button>
        </div>
      </header>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Freelancer Application</h1>
            <p className="text-lg text-muted-foreground">
              Tell us about yourself and your expertise. We're excited to have you join our network!
            </p>
          </div>

          <Card className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 234 567 8900"
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select onValueChange={(value) => handleSelectChange("country", value)} required>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="mexico">Mexico</SelectItem>
                        <SelectItem value="brazil">Brazil</SelectItem>
                        <SelectItem value="argentina">Argentina</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="spain">Spain</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="uae">United Arab Emirates</SelectItem>
                        <SelectItem value="saudi">Saudi Arabia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                  Professional Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="expertise">Primary Expertise *</Label>
                  <Select onValueChange={(value) => handleSelectChange("expertise", value)} required>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select your expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mobile">Mobile Development (iOS/Android)</SelectItem>
                      <SelectItem value="web">Web Development (React/Next.js)</SelectItem>
                      <SelectItem value="backend">Backend Development</SelectItem>
                      <SelectItem value="fullstack">Full Stack Development</SelectItem>
                      <SelectItem value="desktop">Desktop Applications</SelectItem>
                      <SelectItem value="microelectronics">Microelectronics Engineering</SelectItem>
                      <SelectItem value="medical">Medical Systems Integration</SelectItem>
                      <SelectItem value="ai">AI/Machine Learning</SelectItem>
                      <SelectItem value="embedded">Embedded Systems</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select onValueChange={(value) => handleSelectChange("experience", value)} required>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Hourly Rate (EUR) *</Label>
                    <Input
                      id="hourlyRate"
                      name="hourlyRate"
                      type="number"
                      value={formData.hourlyRate}
                      onChange={handleInputChange}
                      placeholder="50"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability *</Label>
                  <Select onValueChange={(value) => handleSelectChange("availability", value)} required>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time (40+ hrs/week)</SelectItem>
                      <SelectItem value="part-time">Part-time (20-40 hrs/week)</SelectItem>
                      <SelectItem value="project">Project-based</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://yourportfolio.com"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Tell us about yourself *</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Share your experience, skills, and what makes you a great fit for Fast Call Tech..."
                    required
                    className="rounded-lg min-h-32"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" size="lg" className="flex-1 rounded-full h-12">
                  Submit Application
                </Button>
                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button type="button" variant="outline" size="lg" className="w-full rounded-full h-12 bg-transparent">
                    Or Book a Call
                  </Button>
                </a>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
