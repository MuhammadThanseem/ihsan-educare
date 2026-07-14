"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-gold-300/50 bg-gold-50 p-8 text-center"
        >
          <span className="text-3xl">✅</span>
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
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col gap-5 rounded-2xl border border-brand-900/8 bg-white p-7 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="c-name" className="text-sm font-medium text-brand-950">
              Name
            </label>
            <input
              id="c-name"
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
              required
              rows={4}
              className="mt-1.5 w-full rounded-lg border border-brand-900/15 bg-sand-50 px-3 py-2.5 text-sm text-brand-950 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            />
          </div>
          <button
            type="submit"
            className="mt-1 self-start rounded-full bg-brand-900 px-7 py-3 text-sm font-semibold text-sand-50 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
