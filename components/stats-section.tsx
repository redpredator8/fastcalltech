"use client"

import { useLanguage } from "@/lib/language-context"

export function StatsSection() {
  const { t } = useLanguage()
  
  const stats = [
    { value: "500+", label: t("stats.projects"), sublabel: t("stats.projectsSub") },
    { value: "98%", label: t("stats.satisfaction"), sublabel: t("stats.satisfactionSub") },
    { value: "150+", label: t("stats.network"), sublabel: t("stats.networkSub") },
    { value: "20+", label: t("stats.countries"), sublabel: t("stats.countriesSub") },
  ]

  return (
    <section className="py-20 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-foreground mt-2 font-medium">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
