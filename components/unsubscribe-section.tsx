"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { PhoneOff, MailX, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function UnsubscribeSection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
      setPhone("")
    }, 5000)
  }

  return (
    <section className="py-16 md:py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <Card className="p-8 text-center space-y-4 bg-green-500/5 border-green-500/20">
              <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("unsubscribe.received")}</h3>
              <p className="text-muted-foreground">
                {t("unsubscribe.success")}
              </p>
            </Card>
          ) : (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex gap-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                    <PhoneOff className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                    <MailX className="h-5 w-5 text-red-500" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("unsubscribe.title")}</h2>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  {t("unsubscribe.subtitle")}
                </p>
              </div>

              <Card className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder={t("unsubscribe.emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 rounded-lg"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder={t("unsubscribe.phonePlaceholder")}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-12 rounded-lg"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full h-12">
                    {t("unsubscribe.button")}
                  </Button>
                </form>
              </Card>

              <p className="text-xs text-muted-foreground text-center">
                {t("unsubscribe.disclaimer")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
