import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | MicroCrop",
  description:
    "Learn how MicroCrop collects, uses, and protects your personal information across our web, mobile, and USSD services.",
};

const sections = [
  {
    heading: "1. Introduction",
    paragraphs: [
      "MicroCrop (“we,” “our,” “us”) is committed to protecting your privacy and ensuring that your personal data is handled safely and responsibly. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our services — including our website, mobile app, and USSD platform (together, the “Services”).",
      "By using MicroCrop, you agree to the practices described in this Policy.",
    ],
  },
  {
    heading: "2. Information We Collect",
    paragraphs: [
      "We collect the following types of information:",
    ],
    lists: [
      {
        title: "a. Personal Information",
        items: [
          "Name",
          "Phone number",
          "County or region",
          "Farm details (e.g., location, acreage, crop type)",
          "Payment and transaction details (for plan purchases and payouts)",
        ],
      },
      {
        title: "b. Non-Personal Information",
        items: [
          "Device information (e.g., phone model, network provider)",
          "Weather and satellite data linked to your farm’s location",
          "Usage data (how you interact with our USSD or app)",
        ],
      },
    ],
  },
  {
    heading: "3. How We Use Your Information",
    paragraphs: [
      "We use collected information to:",
    ],
    items: [
      "Register and manage your MicroCrop account",
      "Process coverage purchases and payouts",
      "Monitor climate and weather data relevant to your farm",
      "Improve our services and develop new features",
      "Communicate important updates or alerts",
      "Comply with regulatory and reporting requirements",
      "We do not sell your personal information to any third party.",
    ],
  },
  {
    heading: "4. Data Sharing and Disclosure",
    paragraphs: [
      "We may share your information only when necessary:",
    ],
    items: [
      "With technical partners (e.g., WeatherXM, Spexi, Swypt) to process weather data, satellite imagery, or transactions",
      "With regulatory authorities (when required by law)",
      "With service providers who help operate our systems under strict confidentiality agreements",
    ],
  },
  {
    heading: "5. Data Security",
    paragraphs: [
      "We use encryption, secure storage, and limited access controls to protect your data. While we take all reasonable steps to safeguard information, no digital system is completely secure. Users are encouraged to protect their login credentials.",
    ],
  },
  {
    heading: "6. Data Retention",
    paragraphs: [
      "We retain user data only for as long as necessary to fulfill the purposes outlined in this Policy or as required by law.",
    ],
  },
  {
    heading: "7. Your Rights",
    paragraphs: [
      "Depending on your jurisdiction, you may have the right to:",
    ],
    items: [
      "Access, correct, or delete your personal data",
      "Withdraw consent for data processing",
      "Request information about how your data is used",
    ],
    paragraphsAfterList: [
      "To exercise your rights, contact us at privacy@microcrop.africa.",
    ],
  },
  {
    heading: "8. Use of Blockchain Technology",
    paragraphs: [
      "Certain transactions and records may be stored on decentralized networks for transparency and auditability. While this enhances trust, some blockchain data may not be alterable or erasable due to its immutable nature. We minimize exposure of personal data in such records.",
    ],
  },
  {
    heading: "9. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically. Updated versions will be posted on our website with the new effective date.",
    ],
  },
  {
    heading: "10. Contact Us",
    paragraphs: [
      "For any questions, concerns, or requests related to your data, please contact:",
      "MicroCrop",
      "Email: support@microcrop.app",
      "Website: www.microcrop.app",
      "Nairobi, Kenya",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-slate-900 to-emerald-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/5 blur-3xl" />
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
              Privacy Policy
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              How MicroCrop Protects Your Data
            </h1>
            <p className="text-lg text-emerald-100/80">
              Transparency matters. Learn what we collect, why we collect it, and the safeguards in place across our web,
              mobile, and USSD experiences.
            </p>
          </div>
        </header>

        <div className="space-y-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
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

              {section.lists?.map((list) => (
                <div key={list.title} className="space-y-3">
                  <h3 className="text-lg font-semibold text-emerald-200/90">{list.title}</h3>
                  <ul className="space-y-2 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
                    {list.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base text-white/80">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-300" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

              {section.paragraphsAfterList?.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-white/80">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <footer className="space-y-3 text-center text-sm text-white/60">
          <p>Last updated: October 21, 2025</p>
          <p>
            Questions? Email us at {" "}
            <a
              className="font-medium text-emerald-300 transition hover:text-emerald-200"
              href="mailto:privacy@microcrop.africa"
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
