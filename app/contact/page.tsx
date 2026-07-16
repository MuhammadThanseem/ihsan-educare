import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { contactEmail, contactPersons, orgLine, orgTagline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — IHSAN EDUCARE",
  description:
    "Get in touch with IHSAN EDUCARE — Career, Exams, Admissions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <Image
              src="/Logo.png"
              alt="IHSAN EDUCARE logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover shadow-md ring-4 ring-white"
            />
            <h1 className="mt-6 font-display text-4xl font-semibold text-brand-950">
              Let&apos;s talk
            </h1>
            <p className="mt-3 max-w-sm text-brand-900/60">{orgLine}</p>
            <p className="mt-4 font-display text-xl text-gold-600">
              &ldquo;{orgTagline}&rdquo;
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-brand-900/8 bg-white p-6 shadow-sm">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 text-sm font-medium text-brand-900/80 transition-colors hover:text-gold-600"
              >
                <Icon
                  name="envelope"
                  className="text-base text-gold-600"
                />
                {contactEmail}
              </a>
              <ul className="space-y-3">
                {contactPersons.map((person) => (
                  <li key={person.name}>
                    <a
                      href={`tel:${person.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-3 text-sm font-medium text-brand-900/80 transition-colors hover:text-gold-600"
                    >
                      <Icon name="phone" className="text-base text-gold-600" />
                      <span>
                        {person.name}
                        <span className="text-brand-900/50"> — {person.phone}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
