"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FreelancerSection() {
  const { t } = useLanguage()
  const benefits = [
    t("freelancer.b1"),
    t("freelancer.b2"),
    t("freelancer.b3"),
    t("freelancer.b4"),
    t("freelancer.b5"),
    t("freelancer.b6"),
  ]

  return (
    <section id="freelancers" className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(40,80,220,0.1),transparent_55%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 shadow-xl mt-8">
                <img
                  src="/diverse-team-of-freelance-developers-and-engineers.jpg"
                  alt={t("freelancer.img1Alt")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 shadow-xl mb-8">
                <img
                  src="/professional-tech-engineer-working-on-electronics-.jpg"
                  alt={t("freelancer.img2Alt")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">{t("freelancer.label")}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              {t("freelancer.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("freelancer.subtitle")}
            </p>

            <ul className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a href="/join-provider">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12"
                >
                  {t("freelancer.joinProvider")}
                </Button>
              </a>
              <a href="/join-freelancer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary bg-transparent rounded-full px-8 h-12"
                >
                  {t("freelancer.joinFreelancer")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
