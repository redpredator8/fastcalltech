import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
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

        <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the services provided by Fast Call Tech ("Company," "we," "us," or "our"), you agree to be
              bound by these Terms of Service. If you do not agree to these terms, you may not access or use our
              services. These terms apply to all clients, freelancers, contractors, and visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fast Call Tech provides technology services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Software development (Android, iOS, React, Web, Windows, Mac applications)</li>
              <li>Microelectronics design, programming, and integration</li>
              <li>Electrical systems and repairs</li>
              <li>Medical system integrations (dialysis machines, X-ray, radiology, AI integrations)</li>
              <li>Enterprise software and management applications</li>
              <li>AI solutions and integrations</li>
            </ul>
          </section>

          <section className="bg-card/50 border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Confidentiality and Non-Disclosure Agreement (NDA)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">
                This section constitutes a binding Non-Disclosure Agreement between all parties.
              </strong>
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              3.1 Definition of Confidential Information
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              "Confidential Information" includes, but is not limited to: proprietary software code, algorithms,
              technical specifications, business strategies, client lists, project details, trade secrets, financial
              information, medical device specifications, patient data workflows, and any other information disclosed by
              either party that is designated as confidential or should reasonably be understood to be confidential.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.2 Obligations</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>All parties agree to hold Confidential Information in strict confidence.</li>
              <li>Confidential Information shall not be disclosed to any third party without prior written consent.</li>
              <li>Information shall only be used for the purpose of fulfilling contracted services.</li>
              <li>
                All employees, freelancers, and subcontractors with access to Confidential Information are bound by
                equivalent confidentiality obligations.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.3 Duration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Confidentiality obligations shall remain in effect for a period of five (5) years from the date of
              disclosure, or indefinitely for trade secrets and proprietary source code.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.4 Exceptions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Confidentiality obligations do not apply to information that: (a) is or becomes publicly available through
              no fault of the receiving party; (b) was already known to the receiving party; (c) is independently
              developed without use of Confidential Information; or (d) is required to be disclosed by law.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.5 Return of Materials</h3>
            <p className="text-muted-foreground leading-relaxed">
              Upon termination of services or upon request, all Confidential Information and copies thereof shall be
              returned or destroyed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Freelancer Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Freelancers and contractors working with Fast Call Tech agree to the following:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong className="text-foreground">NDA Compliance:</strong> All freelancers must sign and adhere to our
                Non-Disclosure Agreement before accessing any project information.
              </li>
              <li>
                <strong className="text-foreground">Work Product:</strong> All work product created during engagement
                belongs to Fast Call Tech or its clients as specified in individual project agreements.
              </li>
              <li>
                <strong className="text-foreground">Quality Standards:</strong> Freelancers must maintain professional
                standards and deliver work according to agreed specifications.
              </li>
              <li>
                <strong className="text-foreground">Communication:</strong> Timely communication and progress updates
                are required.
              </li>
              <li>
                <strong className="text-foreground">Non-Compete:</strong> Freelancers agree not to directly solicit
                Fast Call Tech clients for a period of 12 months after project completion.
              </li>
              <li>
                <strong className="text-foreground">Data Security:</strong> Freelancers must implement appropriate
                security measures to protect client data and source code.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Unless otherwise agreed in writing, all intellectual property rights in deliverables created by Fast Call Tech or
              its freelancers shall transfer to the client upon full payment. Fast Call Tech retains the right to use general
              knowledge, skills, and experience gained during projects. Pre-existing intellectual property remains the
              property of its original owner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Medical and Healthcare Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              For projects involving medical systems, devices, or healthcare data, Fast Call Tech and all parties involved
              agree to comply with applicable healthcare regulations including HIPAA (US), GDPR (EU), and other relevant
              standards. Additional security measures and compliance requirements may apply to such projects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Fast Call Tech shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from or related to the use of our services. Our total liability
              shall not exceed the fees paid for the specific services giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws. For international
              clients, the governing law and dispute resolution mechanism shall be specified in individual service
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fast Call Tech reserves the right to modify these Terms at any time. Changes will be effective upon posting to
              our website. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding these Terms of Service, please contact:
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
