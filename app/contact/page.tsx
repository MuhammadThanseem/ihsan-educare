import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { orgLine, orgTagline } from "@/lib/data";

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
              src="/IMG_0317.PNG"
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
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
