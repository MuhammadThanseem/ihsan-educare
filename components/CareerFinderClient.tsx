"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { careerGoals, getStreamBySlug } from "@/lib/data";

export default function CareerFinderClient() {
  const [selectedGoal, setSelectedGoal] = useState(careerGoals[0].goal);

  const goal = careerGoals.find((g) => g.goal === selectedGoal) ?? careerGoals[0];
  const stream = getStreamBySlug(goal.streamSlug);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      <div className="lg:sticky lg:top-24 lg:w-80 lg:shrink-0">
        <h2 className="font-display text-lg font-semibold text-brand-950">
          I want to become a...
        </h2>
        <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap lg:gap-1.5">
          {careerGoals.map((g) => {
            const active = g.goal === selectedGoal;
            return (
              <button
                key={g.goal}
                type="button"
                onClick={() => setSelectedGoal(g.goal)}
                className={`flex items-center gap-2.5 rounded-full border px-4 py-2 text-left text-sm font-medium transition-all lg:w-full lg:rounded-xl lg:border-transparent lg:px-4 lg:py-2.5 ${
                  active
                    ? "border-brand-900 bg-brand-900 text-sand-50 lg:shadow-sm"
                    : "border-brand-900/15 bg-white text-brand-900/70 hover:border-gold-400 hover:text-brand-900 lg:bg-transparent lg:hover:bg-brand-50"
                }`}
              >
                <span>{g.emoji}</span>
                {g.goal}
                {active && (
                  <span className="ml-auto hidden text-gold-300 lg:inline">→</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <AnimatePresence mode="wait">
          {stream && (
            <motion.div
              key={stream.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-brand-900/8 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-brand-900/8 pb-5">
                <h3 className="font-display text-2xl font-semibold text-brand-950">
                  {goal.emoji} {goal.goal}{" "}
                  <span className="text-gold-500">→</span> {stream.name}
                </h3>
                <Link
                  href={`/streams/${stream.slug}`}
                  className="text-sm font-medium text-brand-700 hover:text-gold-600 hover:underline"
                >
                  View full stream page →
                </Link>
              </div>
              <p className="mt-5 text-brand-900/70">{stream.summary}</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <InfoBlock index="01" title="Entrance Exam">
                  <ul className="list-disc space-y-1 pl-5 text-sm text-brand-900/80">
                    {stream.exams.map((exam) => (
                      <li key={exam}>{exam}</li>
                    ))}
                  </ul>
                </InfoBlock>

                <InfoBlock index="02" title="Documents Required">
                  <ul className="list-disc space-y-1 pl-5 text-sm text-brand-900/80">
                    {stream.documents.map((doc) => (
                      <li key={doc}>{doc}</li>
                    ))}
                  </ul>
                </InfoBlock>

                <InfoBlock index="03" title="Official Website">
                  <ul className="space-y-1">
                    {stream.officialWebsites.map((site) => (
                      <li key={site.label}>
                        <a
                          href={site.url}
                          className="text-sm font-medium text-brand-700 hover:text-gold-600 hover:underline"
                        >
                          {site.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </InfoBlock>

                <InfoBlock index="04" title="Counselling & Eligibility">
                  <p className="text-sm text-brand-900/80">
                    {stream.eligibility ??
                      "Counselling schedules are published by the conducting authority after results. Check the official website above for the current process."}
                  </p>
                </InfoBlock>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function InfoBlock({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-brand-50/60 p-4">
      <div className="flex items-center gap-2">
        <span className="font-display text-xs font-semibold text-gold-600">
          {index}
        </span>
        <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-brand-700">
          {title}
        </h4>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
