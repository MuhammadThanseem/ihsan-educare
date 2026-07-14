import Link from "next/link";
import Image from "next/image";
import {
  categories,
  careerGoals,
  getStreamsByCategory,
  heroTagline,
  orgLine,
} from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import FeaturedCategoryCard from "@/components/FeaturedCategoryCard";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import HeroIntro from "@/components/HeroIntro";
import QuickAccess from "@/components/QuickAccess";
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import GoalsSection from "@/components/GoalsSection";
import QuoteBanner from "@/components/QuoteBanner";
import MemorialSection from "@/components/MemorialSection";
import FeaturedExams from "@/components/FeaturedExams";
import ScholarshipUpdates from "@/components/ScholarshipUpdates";
import NotificationsWidget from "@/components/NotificationsWidget";

const values = [
  {
    emoji: "📚",
    title: "Every stream, one place",
    description:
      "Medical, Engineering, Law, Aviation, Defence, Teaching and more — no more scattered tabs.",
  },
  {
    emoji: "✅",
    title: "Exams, documents, websites",
    description:
      "Each stream lists the entrance exam, the paperwork you'll need and where to apply.",
  },
  {
    emoji: "🇮🇳",
    title: "Built for Kerala students",
    description: "Covers both national exams and Kerala-specific admissions.",
  },
];

export default function Home() {
  const featured = categories[0];
  const featuredStreams = getStreamsByCategory(featured.slug);
  const restCategories = categories.slice(1);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-grain relative overflow-hidden bg-sand-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,_var(--color-brand-100)_0%,_transparent_65%),radial-gradient(ellipse_at_60%_10%,_var(--color-gold-100)_0%,_transparent_50%)]"
        />
        <HeroIntro>
          <Image
            src="/IMG_0317.PNG"
            alt="IHSAN EDUCARE logo"
            width={88}
            height={88}
            className="h-[88px] w-[88px] rounded-full object-cover shadow-lg ring-4 ring-white"
            priority
          />
          <p lang="ml" className="text-sm font-medium tracking-wide text-brand-700/70">
            {heroTagline.ml}
          </p>
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-brand-950 sm:text-6xl lg:text-7xl">
              IHSAN EDUCARE
            </h1>
            <div className="mx-auto mt-5 h-px w-16 bg-gold-400" />
            <p className="mt-4 max-w-md text-sm font-medium tracking-wide text-gold-600 sm:text-base">
              {orgLine}
            </p>
          </div>
          <p className="max-w-2xl font-display text-xl text-brand-900/80 sm:text-2xl">
            🎓 +2 കഴിഞ്ഞാൽ എന്ത്?
          </p>
          <p className="max-w-xl text-base leading-relaxed text-brand-900/60">
            Every major entrance exam, application date, required document and
            official website in Kerala and India — after Plus Two, in one
            place.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/career-finder"
              className="rounded-full bg-brand-900 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-md shadow-brand-900/20 transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
            >
              🤖 Find My Career Path →
            </Link>
            <Link
              href="/streams"
              className="rounded-full border border-brand-900/25 px-7 py-3.5 text-sm font-semibold text-brand-900 transition-all hover:-translate-y-0.5 hover:border-brand-900/50 hover:bg-brand-50"
            >
              Browse Career Streams
            </Link>
          </div>
        </HeroIntro>
      </section>

      {/* In loving memory */}
      <Band bg="white">
        <Reveal>
          <MemorialSection />
        </Reveal>
      </Band>

      <Marquee items={careerGoals.map((g) => `${g.emoji} ${g.goal}`)} />

      {/* Quick access + Career Finder promo + Value props */}
      <Band bg="sand" className="flex flex-col gap-16">
        <Reveal>
          <QuickAccess />
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-900/8 bg-white p-8 shadow-sm sm:p-12 lg:flex lg:items-center lg:gap-12">
            <div className="lg:flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                🤖 Flagship Feature
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
                &ldquo;I want to become a Doctor&rdquo;
              </h2>
              <p className="mt-4 max-w-xl text-brand-900/60">
                Pick what you want to become and instantly see the entrance
                exam, required documents, official website and counselling
                process — all on a single page.
              </p>
              <Link
                href="/career-finder"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-900 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800"
              >
                Find My Career Path →
              </Link>
            </div>
            <div className="mt-10 grid flex-1 grid-cols-2 gap-3 lg:mt-0">
              {[
                { emoji: "🎯", label: "Entrance Exam" },
                { emoji: "📋", label: "Documents" },
                { emoji: "🔗", label: "Official Website" },
                { emoji: "🧭", label: "Counselling Info" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-brand-50/60 p-5 text-center"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-xs font-semibold text-brand-800">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-2xl">
                  {v.emoji}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-950">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-sm text-brand-900/60">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* About + Who it's for */}
      <Band bg="white" className="flex flex-col gap-16">
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <AudienceSection />
        </Reveal>
      </Band>

      {/* Featured Entrance Exams + Category grid */}
      <Band bg="sand" className="flex flex-col gap-16">
        <div id="exams" className="scroll-mt-24">
          <Reveal>
            <FeaturedExams />
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Explore
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold text-brand-950">
                Career Streams
              </h2>
              <p className="mt-2 text-brand-900/60">
                Explore admissions by field — exams, documents and official
                websites for every path.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <FeaturedCategoryCard category={featured} streams={featuredStreams} />
          </Reveal>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {restCategories.map((category, i) => (
              <Reveal key={category.slug} delay={i * 0.05}>
                <CategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </Band>

      {/* Scholarship updates + Latest notifications */}
      <Band bg="gold" className="flex flex-col gap-16">
        <div id="scholarships" className="scroll-mt-24">
          <Reveal>
            <ScholarshipUpdates />
          </Reveal>
        </div>
        <div id="notifications" className="scroll-mt-24">
          <Reveal>
            <NotificationsWidget />
          </Reveal>
        </div>
      </Band>

      {/* Our goals + quote */}
      <Band bg="white" className="flex flex-col gap-16">
        <Reveal>
          <GoalsSection />
        </Reveal>
        <Reveal>
          <QuoteBanner />
        </Reveal>
      </Band>

      {/* Closing CTA */}
      <Band bg="sand">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold-300/40 bg-gold-50 p-8 text-center shadow-sm sm:flex-row sm:p-10 sm:text-left">
            <div>
              <h3 className="font-display text-2xl font-semibold text-brand-950">
                Not sure where to start?
              </h3>
              <p className="mt-2 max-w-md text-brand-900/60">
                Reach out and our team will help you find the right stream for
                your goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-sand-50 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-800"
            >
              Contact Us →
            </Link>
          </div>
        </Reveal>
      </Band>
    </div>
  );
}

const bandBg = {
  white: "bg-white",
  sand: "bg-sand-50",
  gold: "bg-gold-50/40",
};

function Band({
  bg,
  className = "",
  children,
}: {
  bg: keyof typeof bandBg;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={bandBg[bg]}>
      <div className={`mx-auto max-w-6xl px-4 py-20 sm:px-6 ${className}`}>
        {children}
      </div>
    </section>
  );
}
