import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | MicroCrop",
  description:
    "Understand the terms and conditions governing your use of MicroCrop's climate risk protection services.",
};

const sections = [
  {
    heading: "1. About MicroCrop",
    paragraphs: [
      "MicroCrop is a technology platform that provides climate risk protection tools for farmers using weather and satellite data.",
      "We are not a licensed insurance company. Our service helps users access automated protection plans that offer climate-based financial relief when adverse weather conditions affect crops.",
      "MicroCrop operates as a technology intermediary, connecting users with blockchain-backed payout mechanisms and decentralized data sources.",
    ],
  },
  {
    heading: "2. Eligibility",
    paragraphs: [
      "To use MicroCrop, you must meet the following criteria:",
    ],
    items: [
      "You must be at least 18 years old.",
      "You must have a valid mobile number or digital wallet to receive payouts.",
      "You must agree to provide accurate and truthful information about your farm and activities.",
      "If you use MicroCrop on behalf of an organization or farmer group, you confirm that you have authority to do so.",
    ],
  },
  {
    heading: "3. Your Account",
    paragraphs: [
      "You are responsible for maintaining the confidentiality of your account credentials and any activity that occurs under your account.",
      "Please notify us immediately at support@microcrop.africa if you suspect unauthorized use.",
    ],
  },
  {
    heading: "4. How the Service Works",
    items: [
      "Users subscribe to a climate protection plan through USSD, app, or web.",
      "Payouts are automatically triggered when verified weather or satellite data indicates a qualifying event (e.g., drought, flooding, or crop loss).",
      "All transactions are logged securely and transparently using blockchain technology.",
      "Payouts are sent directly to the registered user’s wallet or mobile money account.",
      "The amount of support and timing of disbursement depend on the plan type and data triggers.",
    ],
  },
  {
    heading: "5. Fees and Payments",
    paragraphs: [
      "Users may be required to pay a small participation fee or plan contribution to activate coverage.",
      "All payments are final once confirmed. Refunds may be issued only in cases of verified technical error.",
      "We use third-party payment processors for transactions (e.g., Swypt or mobile money). MicroCrop does not store or process card details directly.",
    ],
  },
  {
    heading: "6. Use of Data and Technology",
    paragraphs: [
      "MicroCrop leverages trusted data sources such as WeatherXM (for on-ground weather data) and Spexi (for satellite verification).",
      "We may store certain operational records on blockchain networks to ensure transparency and auditability.",
      "By using MicroCrop, you consent to data collection and usage as described in our Privacy Policy.",
    ],
  },
  {
    heading: "7. Disclaimer of Liability",
    paragraphs: [
      "MicroCrop provides its Services \"as is\" and \"as available\" without warranties of any kind.",
      "We make every effort to ensure accuracy of data and reliability of payouts, but we do not guarantee continuous or error-free service, immediate payout under all conditions, or complete accuracy of third-party weather or satellite data.",
      "MicroCrop is not an insurance company, and participation in our platform does not constitute a traditional insurance contract.",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, MicroCrop and its partners shall not be liable for any indirect, incidental, or consequential losses.",
      "We are not liable for errors in external data sources or delays in payout triggers.",
      "We are not liable for loss of income, crops, or opportunity resulting from use or non-use of the Services.",
    ],
  },
  {
    heading: "9. Intellectual Property",
    paragraphs: [
      "All content, branding, and technology used in the Services are the property of MicroCrop or its partners.",
      "You may not copy, modify, or distribute any part of the Services without written permission.",
    ],
  },
  {
    heading: "10. Termination",
    paragraphs: [
      "We reserve the right to suspend or terminate your account if you violate these Terms or misuse the platform.",
    ],
  },
  {
    heading: "11. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. Updated versions will be posted on our website and effective immediately upon posting.",
    ],
  },
  {
    heading: "12. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the Republic of Kenya, except where otherwise required by law.",
      "For international users, additional local compliance may apply.",
    ],
  },
  {
    heading: "13. Contact Us",
    paragraphs: [
      "If you have any questions or feedback about these Terms, please reach out to:",
      "Email: support@microcrop.app",
      "Website: www.microcrop.app",
      "Nairobi, Kenya",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-slate-900 to-emerald-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-12 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/5 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-20 sm:px-10 lg:px-12">
        <header className="space-y-6 text-center sm:text-left">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
          >
            ← Back to home
          </Link>
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
              Terms of Service
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              MicroCrop Terms & Conditions
            </h1>
            <p className="text-lg text-emerald-100/80">
              Welcome to MicroCrop. These Terms of Service explain how our climate protection platform works and what it means to participate.
            </p>
            <p className="text-sm text-white/60">Last updated: October 21, 2025</p>
          </div>
        </header>

        <div className="space-y-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
          <section className="space-y-5">
            <p className="text-base leading-relaxed text-white/80">
              These Terms of Service (“Terms”) govern your use of our website, mobile app, USSD platform, and all related services
              (collectively, the “Services”). Please read these Terms carefully. By using MicroCrop, you agree to be bound by them.
            </p>
            <p className="text-base leading-relaxed text-white/80">
              If you do not agree, please do not use our Services.
            </p>
          </section>

          {sections.map((section) => (
            <section key={section.heading} className="space-y-5">
              <h2 className="text-2xl font-bold text-emerald-200 sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-white/80">
                  {paragraph}
                </p>
              ))}

              {section.items && (
                <ul className="space-y-2 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-base text-white/80">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-300" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <footer className="space-y-3 text-center text-sm text-white/60">
          <p>
            Questions? Email us at{" "}
            <a
              className="font-medium text-emerald-300 transition hover:text-emerald-200"
              href="mailto:support@microcrop.africa"
            >
              support@microcrop.app
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}
