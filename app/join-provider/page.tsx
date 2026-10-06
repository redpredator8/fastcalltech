"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, ArrowRight, Building2 } from "lucide-react"

export default function JoinProviderPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "Colombia",
    "United Kingdom",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Poland",
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Israel",
    "Other",
  ]

  const languages = [
    "English",
    "Spanish",
    "Portuguese",
    "French",
    "German",
    "Italian",
    "Arabic",
    "Hebrew",
    "Polish",
    "Dutch",
    "Other",
  ]

  const services = [
    "Mobile App Development",
    "Web Development",
    "Desktop Applications",
    "AI/ML Development",
    "Medical Equipment Programming",
    "Industrial Equipment Programming",
    "Microelectronics",
    "Electrical Systems",
    "Technical Support",
    "System Integration",
  ]

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-2xl mx-4 border-border">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl">Application Submitted!</CardTitle>
            <CardDescription className="text-base">
              Thank you for your interest in partnering with Fast Call Tech
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <p className="text-muted-foreground leading-relaxed">
              We've received your application and our team will review it carefully. We'll reach out to you within
              2-3 business days to discuss potential collaboration opportunities.
            </p>
            <div className="bg-secondary/50 rounded-lg p-6 space-y-2">
              <h4 className="font-semibold">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✓ Our team reviews your company profile</li>
                <li>✓ We assess potential project matches</li>
                <li>✓ We schedule a video call to discuss partnership terms</li>
                <li>✓ If aligned, we start collaborating on projects</li>
              </ul>
            </div>
            <a href="/">
              <Button className="rounded-full" size="lg">
                Return to Home
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-foreground">
            <span className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground text-xs font-bold">FC</span>
            <span className="font-extrabold tracking-tight">Fast Call Tech</span>
          </a>
          <a href="/">
            <Button variant="ghost" size="sm">
              Back to Home
            </Button>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Join as a Service Provider</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Partner with Fast Call Tech and access a global network of clients seeking technical solutions. We handle
              client acquisition, you deliver excellence.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-24 md:w-32 h-1 mx-2 ${step > s ? "bg-primary" : "bg-secondary"}`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Company Info</span>
              <span>Team Details</span>
              <span>Services</span>
            </div>
          </div>

          {/* Step 1: Company Information */}
          {step === 1 && (
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Company Information</CardTitle>
                <CardDescription>Tell us about your company</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name *</Label>
                  <Input id="company-name" placeholder="Tech Solutions Inc." required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Contact Person *</Label>
                    <Input id="contact-name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Input id="position" placeholder="CEO / Technical Director" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="contact@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+1 234 567 8900" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Company Website</Label>
                  <Input id="website" type="url" placeholder="https://yourcompany.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select required>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country.toLowerCase()}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="New York" required />
                </div>

                <Button className="w-full rounded-full" size="lg" onClick={() => setStep(2)}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Team Details */}
          {step === 2 && (
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Team Details</CardTitle>
                <CardDescription>Information about your team and capabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="team-size">Number of Employees *</Label>
                  <Select required>
                    <SelectTrigger id="team-size">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 employees</SelectItem>
                      <SelectItem value="6-10">6-10 employees</SelectItem>
                      <SelectItem value="11-20">11-20 employees</SelectItem>
                      <SelectItem value="21-50">21-50 employees</SelectItem>
                      <SelectItem value="51-100">51-100 employees</SelectItem>
                      <SelectItem value="100+">100+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="available-staff">Available Staff for Projects *</Label>
                  <Input
                    id="available-staff"
                    type="number"
                    placeholder="How many team members can work on our projects?"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label>Languages Spoken by Team *</Label>
                  <p className="text-sm text-muted-foreground">Select all that apply</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {languages.map((lang) => (
                      <div key={lang} className="flex items-center space-x-2">
                        <Checkbox id={`lang-${lang}`} />
                        <label
                          htmlFor={`lang-${lang}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {lang}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Primary Timezone *</Label>
                  <Select required>
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">EST (Eastern Time)</SelectItem>
                      <SelectItem value="cst">CST (Central Time)</SelectItem>
                      <SelectItem value="pst">PST (Pacific Time)</SelectItem>
                      <SelectItem value="gmt">GMT (London)</SelectItem>
                      <SelectItem value="cet">CET (Central Europe)</SelectItem>
                      <SelectItem value="gst">GST (Gulf Time)</SelectItem>
                      <SelectItem value="ist">IST (India)</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years in Business *</Label>
                  <Input id="experience" type="number" placeholder="How many years?" required />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="rounded-full">
                    Back
                  </Button>
                  <Button className="flex-1 rounded-full" size="lg" onClick={() => setStep(3)}>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Services & Submit */}
          {step === 3 && (
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Services & Expertise</CardTitle>
                <CardDescription>What services can your company provide?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Services You Can Provide *</Label>
                  <p className="text-sm text-muted-foreground">Select all that apply</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox id={`service-${service}`} />
                        <label
                          htmlFor={`service-${service}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialization">Area of Specialization</Label>
                  <Textarea
                    id="specialization"
                    placeholder="Describe your company's primary expertise and what makes you stand out..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previous-work">Previous Work & Portfolio</Label>
                  <Textarea
                    id="previous-work"
                    placeholder="Tell us about notable projects you've completed. Include links if available..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="capacity">Monthly Project Capacity *</Label>
                  <Select required>
                    <SelectTrigger id="capacity">
                      <SelectValue placeholder="How many projects can you handle per month?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 projects</SelectItem>
                      <SelectItem value="3-5">3-5 projects</SelectItem>
                      <SelectItem value="6-10">6-10 projects</SelectItem>
                      <SelectItem value="10+">10+ projects</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hourly-rate">Average Hourly Rate (EUR) *</Label>
                  <Input id="hourly-rate" type="number" placeholder="50" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additional-info">Additional Information</Label>
                  <Textarea
                    id="additional-info"
                    placeholder="Anything else you'd like us to know about your company..."
                    rows={3}
                  />
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to Fast Call Tech's{" "}
                      <a href="/terms-of-service" className="text-primary hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                      . I understand that all projects are subject to NDA agreements and that Fast Call Tech will handle
                      client relationships while we focus on service delivery.
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="rounded-full">
                    Back
                  </Button>
                  <Button className="flex-1 rounded-full" size="lg" onClick={handleSubmit}>
                    Submit Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
