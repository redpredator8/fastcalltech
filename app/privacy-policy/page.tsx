import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fast Call Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website or engage our
              services. We operate globally across North America, South America, Europe, and the Middle East, and we
              comply with applicable data protection laws in all jurisdictions where we operate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong className="text-foreground">Personal Information:</strong> Name, email address, phone number,
                company name, and job title when you contact us or request our services.
              </li>
              <li>
                <strong className="text-foreground">Technical Information:</strong> IP address, browser type, device
                information, and usage data collected through cookies and similar technologies.
              </li>
              <li>
                <strong className="text-foreground">Project Information:</strong> Technical specifications,
                requirements, and other data necessary to deliver our software development, microelectronics, and
                integration services.
              </li>
              <li>
                <strong className="text-foreground">Medical System Data:</strong> For clients in the healthcare sector,
                we may process data related to medical device integrations (dialysis machines, X-ray equipment,
                radiology systems). This data is handled with the highest security standards and in compliance with
                HIPAA, GDPR, and other applicable healthcare regulations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>To provide and maintain our services</li>
              <li>To communicate with you regarding projects, updates, and support</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We may share your information with:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong className="text-foreground">Freelancers and Contractors:</strong> Our global network of vetted
                freelancers who are bound by strict confidentiality agreements (NDAs) and data protection requirements.
              </li>
              <li>
                <strong className="text-foreground">Service Providers:</strong> Third-party vendors who assist in our
                operations (hosting, analytics, communication tools).
              </li>
              <li>
                <strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our
                rights.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We never sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your data, including encryption, secure
              servers, access controls, and regular security audits. All freelancers in our network are required to
              adhere to our security protocols and sign comprehensive Non-Disclosure Agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              As a global company with operations in North America, South America, Europe, and the Middle East, your
              data may be transferred and processed in different jurisdictions. We ensure appropriate safeguards are in
              place for all international transfers in compliance with GDPR and other applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <p className="text-foreground mt-4">
              fastcalltech LLC · fastcalltech.com
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
