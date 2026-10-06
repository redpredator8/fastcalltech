"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.services": "Services",
    "nav.freelancers": "For Freelancers",
    "nav.about": "About",
    "nav.unsubscribe": "Unsubscribe",
    "nav.contact": "Contact",
    "header.emailPlaceholder": "Email for dashboard access",
    "header.notifyMe": "Notify Me",
    "header.notifySuccess": "You'll be notified when dashboard launches!",
    "header.notifyMeDashboard": "Notify Me for Dashboard",
    "header.toggleMenu": "Toggle menu",

    // Hero
    "hero.title": "Fix your business",
    "hero.subtitle": "Websites, apps, hardware, and urgent tech help. Tell us what is broken. We fix it.",
    "hero.automaticQuote": "Get a quote",
    "hero.requestQuote": "Book a call",
    "hero.joinProvider": "Join as Provider",
    "hero.joinFreelancer": "Join as Freelancer",
    "hero.urgentFix": "Urgent fix — call now",
    "hero.trustedBy": "Trusted by",
    "hero.clients": "200+ clients",
    "hero.projectsLabel": "Projects",

    // Stats
    "stats.projects": "Projects done",
    "stats.projectsSub": "4 continents",
    "stats.satisfaction": "Happy clients",
    "stats.satisfactionSub": "Verified reviews",
    "stats.network": "People in the network",
    "stats.networkSub": "Worldwide",
    "stats.countries": "Countries",
    "stats.countriesSub": "Americas, Europe, Middle East",

    // About
    "about.label": "About us",
    "about.title": "We help businesses get unstuck",
    "about.subtitle": "We fix software, websites, machines, and medical systems. Simple help. Clear prices. Real results.",
    "about.region.northAmerica": "North America",
    "about.region.southAmerica": "South America",
    "about.region.europe": "Europe",
    "about.region.middleEast": "Middle East",
    "about.specialty.tech": "Tech & hardware",
    "about.specialty.techDesc": "Software, IoT, and electronics that need to work.",
    "about.specialty.medical": "Medical systems",
    "about.specialty.medicalDesc": "X-ray, MRI, dialysis, and other medical tech.",
    "about.specialty.web": "Web, mobile & desktop",
    "about.specialty.webDesc": "Sites, apps, and tools your team can actually use.",
    "about.specialty.ai": "AI for business",
    "about.specialty.aiDesc": "Add AI where it saves time, not where it adds noise.",
    "about.worldwide": "Our freelancers and partners come from across the world, bringing diverse expertise to every project.",

    // Services
    "services.label": "Services",
    "services.title": "What we fix",
    "services.subtitle": "Pick the problem. Get a quote. We do the work.",
    "services.mobile": "Mobile apps",
    "services.mobileDesc": "iOS and Android apps that do the job.",
    "services.web": "Websites & web apps",
    "services.webDesc": "Sites and tools that load fast and stay up.",
    "services.desktop": "Desktop apps",
    "services.desktopDesc": "Windows and Mac software for daily work.",
    "services.micro": "Electronics",
    "services.microDesc": "Circuits, embedded systems, and IoT.",
    "services.electrical": "Electrical & hardware",
    "services.electricalDesc": "Repairs, installs, and system fixes.",
    "services.support": "Tech support",
    "services.supportDesc": "When something breaks, we get it running again.",
    "services.requestQuote": "Get a quote",
    "services.onsiteBadge": "In person",
    "services.onsite": "Same-day on-site repair",
    "services.onsiteDesc": "We come to you. Immediate dispatch for urgent in-person fixes at offices, shops, and facilities.",
    "services.onsiteCta": "Call for immediate dispatch",

    // Freelancer
    "freelancer.label": "Work with us",
    "freelancer.title": "Need work? Join the network",
    "freelancer.subtitle": "Clear jobs. Fair pay. Remote or on-site.",
    "freelancer.benefit1": "Competitive Rates",
    "freelancer.benefit1Desc": "Industry-leading compensation for your expertise",
    "freelancer.benefit2": "Global Projects",
    "freelancer.benefit2Desc": "Work with clients from North America, Europe, Middle East, and beyond",
    "freelancer.benefit3": "Flexible Work",
    "freelancer.benefit3Desc": "Choose projects that match your skills and schedule",
    "freelancer.joinProvider": "Join as Provider",
    "freelancer.joinFreelancer": "Join as Freelancer",
    "freelancer.b1": "Clients in the US, Europe, and the Middle East",
    "freelancer.b2": "A worldwide network of engineers",
    "freelancer.b3": "Fair pay, on time",
    "freelancer.b4": "Remote or on-site",
    "freelancer.b5": "Real jobs: software, medical systems, AI",
    "freelancer.b6": "Clear work. No fluff.",
    "freelancer.img1Alt": "Developers collaborating on a project",
    "freelancer.img2Alt": "Engineer repairing electronics on site",

    // Unsubscribe
    "unsubscribe.title": "Too Many Calls or Emails?",
    "unsubscribe.subtitle": "We understand. Unsubscribe from our communications anytime.",
    "unsubscribe.emailPlaceholder": "Enter your email address",
    "unsubscribe.phonePlaceholder": "Enter your phone number (optional)",
    "unsubscribe.button": "Unsubscribe",
    "unsubscribe.success": "You've been unsubscribed successfully. We're sorry to see you go.",
    "unsubscribe.received": "Unsubscribe request received",
    "unsubscribe.disclaimer": "By submitting this form, you opt out of all marketing communications from Fast Call Tech.",

    // Footer
    "footer.services": "Services",
    "footer.mobile": "Mobile Apps",
    "footer.web": "Web Development",
    "footer.desktop": "Desktop Apps",
    "footer.microelectronics": "Microelectronics",
    "footer.support": "Technical Support",
    "footer.onsite": "On-site repair",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.freelancers": "For Freelancers",
    "footer.contact": "Contact",
    "footer.tagline": "We fix tech problems for businesses.",
    "footer.rights": "All Rights Reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.unsubscribe": "Unsubscribe",
  },
  es: {
    // Header
    "nav.services": "Servicios",
    "nav.freelancers": "Para Freelancers",
    "nav.about": "Acerca de",
    "nav.unsubscribe": "Darse de Baja",
    "nav.contact": "Contacto",
    "header.emailPlaceholder": "Email para acceso al panel",
    "header.notifyMe": "Notificarme",
    "header.notifySuccess": "¡Te notificaremos cuando se lance el panel!",
    "header.notifyMeDashboard": "Notificarme del Panel",
    "header.toggleMenu": "Abrir menú",

    // Hero
    "hero.title": "Arregla tu negocio",
    "hero.subtitle": "Webs, apps, hardware y ayuda técnica urgente. Dinos qué falla. Lo arreglamos.",
    "hero.automaticQuote": "Pedir presupuesto",
    "hero.requestQuote": "Reservar llamada",
    "hero.joinProvider": "Unirse como Proveedor",
    "hero.joinFreelancer": "Unirse como Freelancer",
    "hero.urgentFix": "Arreglo urgente — llama ahora",
    "hero.trustedBy": "Confían en nosotros",
    "hero.clients": "200+ clientes",
    "hero.projectsLabel": "Proyectos",

    // Stats
    "stats.projects": "Proyectos hechos",
    "stats.projectsSub": "4 continentes",
    "stats.satisfaction": "Clientes contentos",
    "stats.satisfactionSub": "Reseñas verificadas",
    "stats.network": "Personas en la red",
    "stats.networkSub": "En todo el mundo",
    "stats.countries": "Países",
    "stats.countriesSub": "Américas, Europa, Oriente Medio",

    // About
    "about.label": "Sobre nosotros",
    "about.title": "Ayudamos a negocios atascados",
    "about.subtitle": "Arreglamos software, webs, máquinas y sistemas médicos. Ayuda clara. Precios claros. Resultados reales.",
    "about.region.northAmerica": "América del Norte",
    "about.region.southAmerica": "América del Sur",
    "about.region.europe": "Europa",
    "about.region.middleEast": "Medio Oriente",
    "about.specialty.tech": "Tecnología y hardware",
    "about.specialty.techDesc": "Software, IoT y electrónica que tiene que funcionar.",
    "about.specialty.medical": "Sistemas médicos",
    "about.specialty.medicalDesc": "Rayos X, MRI, diálisis y más equipo médico.",
    "about.specialty.web": "Web, móvil y escritorio",
    "about.specialty.webDesc": "Sitios, apps y herramientas que el equipo puede usar.",
    "about.specialty.ai": "IA para negocios",
    "about.specialty.aiDesc": "IA donde ahorra tiempo, no donde añade ruido.",
    "about.worldwide": "Nuestros freelancers y socios provienen de todo el mundo, aportando experiencia diversa a cada proyecto.",

    // Services
    "services.label": "Servicios",
    "services.title": "Qué arreglamos",
    "services.subtitle": "Elige el problema. Pide presupuesto. Nosotros lo hacemos.",
    "services.mobile": "Apps móviles",
    "services.mobileDesc": "Apps iOS y Android que hacen el trabajo.",
    "services.web": "Webs y apps web",
    "services.webDesc": "Sitios y herramientas que cargan rápido y no se caen.",
    "services.desktop": "Apps de escritorio",
    "services.desktopDesc": "Software Windows y Mac para el día a día.",
    "services.micro": "Electrónica",
    "services.microDesc": "Circuitos, sistemas embebidos e IoT.",
    "services.electrical": "Eléctrico y hardware",
    "services.electricalDesc": "Reparaciones, instalaciones y arreglos de sistemas.",
    "services.support": "Soporte técnico",
    "services.supportDesc": "Si se rompe, lo dejamos funcionando.",
    "services.requestQuote": "Pedir presupuesto",
    "services.onsiteBadge": "En persona",
    "services.onsite": "Arreglo inmediato en persona",
    "services.onsiteDesc": "Vamos a tu local. Desplazamiento inmediato para fallos urgentes en oficinas, tiendas e instalaciones.",
    "services.onsiteCta": "Llama para desplazamiento inmediato",

    // Freelancer
    "freelancer.label": "Trabaja con nosotros",
    "freelancer.title": "¿Buscas trabajo? Únete a la red",
    "freelancer.subtitle": "Trabajos claros. Pago justo. Remoto o presencial.",
    "freelancer.benefit1": "Tarifas Competitivas",
    "freelancer.benefit1Desc": "Compensación líder en la industria por tu experiencia",
    "freelancer.benefit2": "Proyectos Globales",
    "freelancer.benefit2Desc": "Trabaja con clientes de América del Norte, Europa, Medio Oriente y más",
    "freelancer.benefit3": "Trabajo Flexible",
    "freelancer.benefit3Desc": "Elige proyectos que coincidan con tus habilidades y horario",
    "freelancer.joinProvider": "Unirse como Proveedor",
    "freelancer.joinFreelancer": "Unirse como Freelancer",
    "freelancer.b1": "Clientes en EEUU, Europa y Oriente Medio",
    "freelancer.b2": "Una red mundial de ingenieros",
    "freelancer.b3": "Pago justo y a tiempo",
    "freelancer.b4": "Remoto o presencial",
    "freelancer.b5": "Trabajo real: software, sistemas médicos, IA",
    "freelancer.b6": "Trabajo claro. Sin relleno.",
    "freelancer.img1Alt": "Desarrolladores colaborando en un proyecto",
    "freelancer.img2Alt": "Ingeniero reparando electrónica en persona",

    // Unsubscribe
    "unsubscribe.title": "¿Demasiadas Llamadas o Emails?",
    "unsubscribe.subtitle": "Lo entendemos. Cancele la suscripción a nuestras comunicaciones en cualquier momento.",
    "unsubscribe.emailPlaceholder": "Ingrese su dirección de email",
    "unsubscribe.phonePlaceholder": "Ingrese su número de teléfono (opcional)",
    "unsubscribe.button": "Darse de Baja",
    "unsubscribe.success": "Se ha dado de baja exitosamente. Lamentamos verlo partir.",
    "unsubscribe.received": "Solicitud de baja recibida",
    "unsubscribe.disclaimer": "Al enviar este formulario, te das de baja de todas las comunicaciones de marketing de Fast Call Tech.",

    // Footer
    "footer.services": "Servicios",
    "footer.mobile": "Aplicaciones Móviles",
    "footer.web": "Desarrollo Web",
    "footer.desktop": "Apps de escritorio",
    "footer.microelectronics": "Microelectrónica",
    "footer.support": "Soporte Técnico",
    "footer.onsite": "Arreglo en persona",
    "footer.company": "Empresa",
    "footer.about": "Acerca de",
    "footer.freelancers": "Para Freelancers",
    "footer.contact": "Contacto",
    "footer.tagline": "Arreglamos problemas técnicos para negocios.",
    "footer.rights": "Todos los Derechos Reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.unsubscribe": "Darse de Baja",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
