"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function AutomaticQuotePage() {
  const [step, setStep] = useState(1)
  const [serviceType, setServiceType] = useState("")
  const [complexity, setComplexity] = useState([50])
  const [timeline, setTimeline] = useState([50])
  const [equipment, setEquipment] = useState("")
  const [estimatedPrice, setEstimatedPrice] = useState(0)

  const serviceTypes = [
    { value: "mobile-app", label: "Mobile App Development", basePrice: 5000 },
    { value: "web-app", label: "Web Application Development", basePrice: 4000 },
    { value: "desktop-app", label: "Desktop Application", basePrice: 3500 },
    { value: "online-fix", label: "Online Technical Fix", basePrice: 150 },
    { value: "on-site-fix", label: "On-Site Technical Support", basePrice: 300 },
    { value: "medical-equipment", label: "Medical Equipment Programming", basePrice: 2500 },
    { value: "industrial-equipment", label: "Industrial Equipment Programming", basePrice: 2000 },
    { value: "microelectronics", label: "Microelectronics Development", basePrice: 3000 },
    { value: "ai-integration", label: "AI Integration & Development", basePrice: 6000 },
    { value: "system-integration", label: "System Integration", basePrice: 4500 },
  ]

  const medicalEquipment = [
    "X-Ray Machine",
    "MRI Scanner",
    "CT Scanner",
    "Dialysis Machine",
    "Ultrasound System",
    "Radiology Workstation",
    "PACS System",
    "Patient Monitoring System",
    "Anesthesia Machine",
    "Ventilator",
    "Laboratory Analyzer",
    "Blood Gas Analyzer",
    "ECG Machine",
    "Defibrillator",
    "Infusion Pump",
    "Surgical Navigation System",
  ]

  const industrialEquipment = [
    "CNC Machine",
    "PLC System",
    "Industrial Robot",
    "3D Printer",
    "Laser Cutting Machine",
    "Projector System",
    "Digital Signage",
    "Access Control System",
    "HVAC Control System",
    "Building Management System",
    "Industrial Automation",
    "Assembly Line Control",
    "Quality Control System",
    "Warehouse Management System",
    "Conveyor System",
    "Packaging Machine",
  ]

  const calculatePrice = () => {
    const service = serviceTypes.find((s) => s.value === serviceType)
    if (!service) return 0

    const basePrice = service.basePrice
    const complexityMultiplier = 1 + (complexity[0] / 100)
    const timelineMultiplier = timeline[0] < 30 ? 1.5 : timeline[0] > 70 ? 0.8 : 1

    return Math.round(basePrice * complexityMultiplier * timelineMultiplier)
  }

  const handleCalculate = () => {
    const price = calculatePrice()
    setEstimatedPrice(price)
    setStep(3)
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
              <span>Service Type</span>
              <span>Details</span>
              <span>Quote</span>
            </div>
          </div>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Select Your Service</CardTitle>
                <CardDescription>Choose the type of service you need</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger id="service-type">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {(serviceType === "medical-equipment" || serviceType === "industrial-equipment") && (
                  <div className="space-y-2">
                    <Label htmlFor="equipment">Specific Equipment</Label>
                    <Select value={equipment} onValueChange={setEquipment}>
                      <SelectTrigger id="equipment">
                        <SelectValue placeholder="Select equipment type" />
                      </SelectTrigger>
                      <SelectContent>
                        {(serviceType === "medical-equipment" ? medicalEquipment : industrialEquipment).map(
                          (eq) => (
                            <SelectItem key={eq} value={eq}>
                              {eq}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <Button
                  className="w-full rounded-full"
                  size="lg"
                  onClick={() => setStep(2)}
                  disabled={!serviceType}
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
                <CardDescription>Help us understand your project requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <Label>Project Complexity</Label>
                  <div className="pt-2">
                    <Slider
                      value={complexity}
                      onValueChange={setComplexity}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Simple</span>
                    <span className="text-primary font-semibold">{complexity[0]}%</span>
                    <span>Complex</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Timeline Requirements</Label>
                  <div className="pt-2">
                    <Slider
                      value={timeline}
                      onValueChange={setTimeline}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Urgent (1-2 weeks)</span>
                    <span className="text-primary font-semibold">{timeline[0]}%</span>
                    <span>Flexible (3+ months)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us more about your project..."
                    rows={4}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="rounded-full">
                    Back
                  </Button>
                  <Button className="flex-1 rounded-full" size="lg" onClick={handleCalculate}>
                    Calculate Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Quote Result */}
          {step === 3 && (
            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Your Estimated Quote</CardTitle>
                <CardDescription>Based on your project requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center py-8">
                  <p className="text-6xl font-bold text-primary mb-2">
                    €{estimatedPrice.toLocaleString()}
                  </p>
                  <p className="text-muted-foreground">Estimated project cost</p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Quote Breakdown</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service Type:</span>
                      <span className="font-medium">
                        {serviceTypes.find((s) => s.value === serviceType)?.label}
                      </span>
                    </div>
                    {equipment && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Equipment:</span>
                        <span className="font-medium">{equipment}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Complexity Level:</span>
                      <span className="font-medium">{complexity[0]}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">
                        {timeline[0] < 30 ? "Urgent" : timeline[0] > 70 ? "Flexible" : "Standard"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                  <p>
                    This is an estimated quote. Final pricing may vary based on detailed requirements and project
                    scope. We'll discuss the exact pricing during our consultation call.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://calendly.com/redpredator8/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full rounded-full" size="lg">
                      Schedule Consultation Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="w-full rounded-full bg-transparent"
                    onClick={() => {
                      setStep(1)
                      setServiceType("")
                      setEquipment("")
                      setComplexity([50])
                      setTimeline([50])
                      setEstimatedPrice(0)
                    }}
                  >
                    Start New Quote
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
