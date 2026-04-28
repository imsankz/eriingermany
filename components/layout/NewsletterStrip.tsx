"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type State = "idle" | "loading" | "success" | "error";

export function NewsletterStrip() {
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="bg-[#f7f4f1] border-t border-[#f0e9e3]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
        {/* Copy */}
        <div>
          <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-3 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#ff2c00]" />
            Newsletter
          </p>
          <h2 className="font-serif italic text-[1.9rem] text-[#181415] leading-tight">
            Life in Germany,<br />straight to your inbox.
          </h2>
          <p className="font-sans text-[14.5px] text-[#181415]/55 mt-3 leading-relaxed max-w-sm">
            Honest expat stories, tips, and guides — no fluff. Join readers who want the real picture of living in Germany.
          </p>
        </div>

        {/* Form */}
        <div>
          {state === "success" ? (
            <div className="flex items-center gap-4 rounded-2xl bg-[#ff2c00]/8 border border-[#ff2c00]/20 px-6 py-5">
              <CheckCircle2 className="h-6 w-6 text-[#ff2c00] shrink-0" />
              <div>
                <p className="font-serif italic text-[#181415] text-base">You&apos;re in!</p>
                <p className="font-sans text-[13px] text-[#181415]/55 mt-0.5">Check your inbox for a welcome note.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="First name"
                  className="font-sans w-36 shrink-0 rounded-xl border border-[#f0e9e3] bg-white px-4 py-3 text-sm text-[#181415] outline-none placeholder:text-[#181415]/30 focus:border-[#ff2c00]/40 focus:ring-2 focus:ring-[#ff2c00]/10 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="font-sans flex-1 min-w-0 rounded-xl border border-[#f0e9e3] bg-white px-4 py-3 text-sm text-[#181415] outline-none placeholder:text-[#181415]/30 focus:border-[#ff2c00]/40 focus:ring-2 focus:ring-[#ff2c00]/10 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={state === "loading"}
                className="font-sans self-start inline-flex items-center gap-2 rounded-xl bg-[#181415] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#ff2c00] hover:shadow-[0_4px_16px_rgba(255,44,0,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
              >
                {state === "loading" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Subscribing…</>
                ) : (
                  <>Subscribe <ArrowRight className="h-3.5 w-3.5" /></>
                )}
              </button>
              {state === "error" && (
                <p className="font-sans text-xs text-red-500">Something went wrong — try again.</p>
              )}
              <p className="font-sans text-[11.5px] text-[#181415]/35">No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
