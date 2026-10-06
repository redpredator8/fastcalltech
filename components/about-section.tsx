"use client"

import { Globe, Heart, Cpu, Building2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()
  
  const regions = [
    { name: t("about.region.northAmerica"), flag: "🇺🇸" },
    { name: t("about.region.southAmerica"), flag: "🇧🇷" },
    { name: t("about.region.europe"), flag: "🇪🇺" },
    { name: t("about.region.middleEast"), flag: "🇦🇪" },
  ]

  const specialties = [
    {
      icon: Cpu,
      title: t("about.specialty.tech"),
      description: t("about.specialty.techDesc"),
    },
    {
      icon: Heart,
      title: t("about.specialty.medical"),
      description: t("about.specialty.medicalDesc"),
    },
    {
      icon: Globe,
      title: t("about.specialty.web"),
      description: t("about.specialty.webDesc"),
    },
    {
      icon: Building2,
      title: t("about.specialty.ai"),
      description: t("about.specialty.aiDesc"),
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(40,80,220,0.08),transparent_55%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">{t("about.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("about.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Regions */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {regions.map((region, index) => (
            <div key={index} className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-full">
              <span className="text-xl">{region.flag}</span>
              <span className="text-foreground font-medium">{region.name}</span>
            </div>
          ))}
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="p-6 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <specialty.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{specialty.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
