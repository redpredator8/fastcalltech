"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { PhoneOff, MailX, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function UnsubscribePage() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Successfully Unsubscribed</h2>
            <p className="text-muted-foreground">
              We've processed your request. You will no longer receive calls or emails from Fast Call Tech.
            </p>
          </div>
          <Link href="/">
            <Button className="w-full rounded-full">Return to Homepage</Button>
          </Link>
        </Card>
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
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex gap-4 mb-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                <PhoneOff className="h-6 w-6 text-red-500" />
              </div>
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                <MailX className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Too Many Calls or Emails?
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We understand. Enter your contact information below and we'll immediately stop all communication from
              Fast Call Tech.
            </p>
          </div>

          <Card className="p-8 md:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-lg"
                  required
                />
                <p className="text-sm text-muted-foreground">The email address you want to unsubscribe</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 rounded-lg"
                  required
                />
                <p className="text-sm text-muted-foreground">The phone number you want to unsubscribe</p>
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full h-12 rounded-full text-base">
                  Unsubscribe from All Communications
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-border space-y-3">
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you confirm that you want to opt-out of all marketing communications from
                Fast Call Tech.
              </p>
              <p className="text-xs text-muted-foreground text-center">
                This includes promotional calls, emails, and newsletters. You may still receive transactional or
                service-related messages if you have an active project with us.
              </p>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Changed your mind?{" "}
              <Link href="/" className="text-primary hover:underline font-medium">
                Return to homepage
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
