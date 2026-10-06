"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Bell, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const CALENDLY_LINK = "https://calendly.com/redpredator8/30min"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const handleDashboardSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setShowNotification(true)
      setEmail("")
      setTimeout(() => setShowNotification(false), 3000)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <span className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground text-xs font-bold">FC</span>
          <span className="font-extrabold tracking-tight">Fast Call Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.services")}
          </Link>
          <Link href="#freelancers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.freelancers")}
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="/unsubscribe" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.unsubscribe")}
          </Link>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.contact")}
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <form onSubmit={handleDashboardSignup} className="flex items-center gap-2 relative">
            <Input
              type="email"
              placeholder={t("header.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-9 w-56 rounded-full bg-secondary/50 border-border/50 text-sm"
              required
            />
            <Button type="submit" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4">
              <Bell className="h-4 w-4 mr-1" />
              {t("header.notifyMe")}
            </Button>
            {showNotification && (
              <div className="absolute top-full mt-2 right-0 bg-green-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                {t("header.notifySuccess")}
              </div>
            )}
          </form>
          <Button
            onClick={toggleLanguage}
            size="sm"
            variant="outline"
            className="rounded-full px-3 h-9 bg-transparent border-border/50"
          >
            <Globe className="h-4 w-4 mr-1" />
            {language === "en" ? "ES" : "EN"}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={t("header.toggleMenu")}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="#services" className="text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              {t("nav.services")}
            </Link>
            <Link href="#freelancers" className="text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              {t("nav.freelancers")}
            </Link>
            <Link href="#about" className="text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              {t("nav.about")}
            </Link>
            <Link href="/unsubscribe" className="text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              {t("nav.unsubscribe")}
            </Link>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </a>
            <div className="pt-4 border-t border-border space-y-3">
              <Button
                onClick={toggleLanguage}
                size="sm"
                variant="outline"
                className="w-full rounded-full bg-transparent border-border/50"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === "en" ? "Español" : "English"}
              </Button>
              <form onSubmit={handleDashboardSignup} className="space-y-2">
                <Input
                  type="email"
                  placeholder={t("header.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full bg-secondary/50 border-border/50"
                  required
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground rounded-full">
                  <Bell className="h-4 w-4 mr-2" />
                  {t("header.notifyMeDashboard")}
                </Button>
              </form>
              {showNotification && (
                <div className="bg-green-600 text-white text-sm px-3 py-2 rounded-lg text-center">
                  {t("header.notifySuccess")}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
