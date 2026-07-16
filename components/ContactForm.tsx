"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Icon from "./Icon";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          contact: data.get("contact"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-gold-300/50 bg-gold-50 p-8 text-center"
        >
          <Icon name="circle-check" className="text-3xl text-brand-700" />
          <p className="mt-3 font-medium text-brand-950">
            Thanks for reaching out — our team will get back to you soon.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-brand-900/8 bg-white p-7 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="c-name" className="text-sm font-medium text-brand-950">
              Name
            </label>
            <input
              id="c-name"
              name="name"
              required
              type="text"
              className="mt-1.5 w-full rounded-lg border border-brand-900/15 bg-sand-50 px-3 py-2.5 text-sm text-brand-950 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            />
          </div>
          <div>
            <label htmlFor="c-email" className="text-sm font-medium text-brand-950">
              Email or Phone
            </label>
            <input
              id="c-email"
              name="contact"
              required
              type="text"
              className="mt-1.5 w-full rounded-lg border border-brand-900/15 bg-sand-50 px-3 py-2.5 text-sm text-brand-950 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            />
          </div>
          <div>
            <label htmlFor="c-message" className="text-sm font-medium text-brand-950">
              Message
            </label>
            <textarea
              id="c-message"
              name="message"
              required
              rows={4}
              className="mt-1.5 w-full rounded-lg border border-brand-900/15 bg-sand-50 px-3 py-2.5 text-sm text-brand-950 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            />
          </div>
          {error && (
            <p className="text-sm font-medium text-red-600">{error}</p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="mt-1 self-start rounded-full bg-brand-900 px-7 py-3 text-sm font-semibold text-sand-50 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-md disabled:pointer-events-none disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
