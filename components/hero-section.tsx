"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const CALENDLY_LINK = "https://calendly.com/redpredator8/30min"
const URGENT_PHONE = "+34 621 063 477"

export function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary">fastcalltech.com</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight text-balance">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a href="/automatic-quote">
                <Button size="lg" className="rounded-md px-6 h-12 w-full sm:w-auto">
                  {t("hero.automaticQuote")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-md px-6 h-12 w-full sm:w-auto">
                  {t("hero.requestQuote")}
                </Button>
              </a>
              <a href="/join-provider">
                <Button size="lg" variant="outline" className="rounded-md px-6 h-12 w-full sm:w-auto">
                  {t("hero.joinProvider")}
                </Button>
              </a>
              <a href="/join-freelancer">
                <Button size="lg" variant="outline" className="rounded-md px-6 h-12 w-full sm:w-auto">
                  {t("hero.joinFreelancer")}
                </Button>
              </a>
            </div>
            <a href={`tel:${URGENT_PHONE}`} className="inline-flex">
              <Button size="lg" className="bg-destructive text-white hover:bg-destructive/90 rounded-md px-6 h-12">
                <PhoneCall className="mr-2 h-5 w-5" />
                {t("hero.urgentFix")}
              </Button>
            </a>
          </div>
          <div className="relative">
            <div className="aspect-[5/4] overflow-hidden border-4 border-primary">
              <img
                src="/futuristic-dark-tech-workspace-with-holographic-di.jpg"
                alt="Fast Call Tech workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 bg-primary text-primary-foreground px-4 py-3">
              <p className="text-xs uppercase tracking-wider opacity-80">{t("hero.trustedBy")}</p>
              <p className="text-2xl font-bold">{t("hero.clients")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
