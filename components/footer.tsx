"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="py-16 border-t-4 border-primary bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <span className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground text-xs font-bold">FC</span>
              <span className="font-extrabold tracking-tight">Fast Call Tech</span>
            </Link>
            <p className="text-muted-foreground mt-4 leading-relaxed">{t("footer.tagline")}</p>
            <p className="text-sm text-muted-foreground mt-3">fastcalltech LLC · fastcalltech.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.services")}</h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.mobile")}</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.web")}</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.desktop")}</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.microelectronics")}</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.support")}</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.onsite")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.company")}</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.about")}</Link></li>
              <li><Link href="#freelancers" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.freelancers")}</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.privacy")}</Link></li>
              <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.terms")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li><Link href="/automatic-quote" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("hero.automaticQuote")}</Link></li>
              <li><Link href="/unsubscribe" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.unsubscribe")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 fastcalltech LLC. {t("footer.rights")}</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.privacy")}</Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.terms")}</Link>
            <Link href="/unsubscribe" className="text-sm text-muted-foreground hover:text-destructive transition-colors">{t("footer.unsubscribe")}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
