import type { Metadata } from "next";
import CareerFinderClient from "@/components/CareerFinderClient";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Career Finder — IHSAN EDUCARE",
  description:
    "Tell us what you want to become and see the exam, documents, official website and counselling process you need — on one page.",
};

export default function CareerFinderPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
          <Icon name="robot" />
          Flagship Feature
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold text-brand-950">
          Career Finder
        </h1>
        <p className="mt-3 text-brand-900/60">
          The fastest way to plan your future after Plus Two. Choose a goal
          below and get the exam, documents, official website and
          counselling information in a single view.
        </p>
      </div>
      <div className="mt-12">
        <CareerFinderClient />
      </div>
    </div>
  );
}
