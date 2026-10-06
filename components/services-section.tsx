"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Monitor, Cpu, Zap, Wrench, PhoneCall, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const URGENT_PHONE = "+34 621 063 477"

export function ServicesSection() {
  const { t } = useLanguage()
  
  const services = [
    {
      icon: Smartphone,
      title: t("services.mobile"),
      description: t("services.mobileDesc"),
    },
    {
      icon: Globe,
      title: t("services.web"),
      description: t("services.webDesc"),
    },
    {
      icon: Monitor,
      title: t("services.desktop"),
      description: t("services.desktopDesc"),
    },
    {
      icon: Cpu,
      title: t("services.micro"),
      description: t("services.microDesc"),
    },
    {
      icon: Zap,
      title: t("services.electrical"),
      description: t("services.electricalDesc"),
    },
    {
      icon: Wrench,
      title: t("services.support"),
      description: t("services.supportDesc"),
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">{t("services.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 group backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <a
                  href="/automatic-quote"
                  className="mt-6 text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                >
                  {t("services.requestQuote")}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-primary text-primary-foreground border-0 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12 items-start md:items-center justify-between">
            <div className="max-w-3xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                <MapPin className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold tracking-wider uppercase opacity-90">
                {t("services.onsiteBadge")}
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                {t("services.onsite")}
              </h3>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                {t("services.onsiteDesc")}
              </p>
            </div>
            <a href={`tel:${URGENT_PHONE}`} className="shrink-0">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 rounded-md h-14 px-8 w-full md:w-auto"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                {t("services.onsiteCta")}
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  )
}
