"use client";

import { useRef, useState, FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const ENQUIRY_TYPES = [
  "Brand Collaboration",
  "UGC Content",
  "Social Media Management",
  "Content Consultation",
  "Other",
];

type State = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      enquiry: (form.elements.namedItem("enquiry") as RadioNodeList).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setState("success");
      formRef.current?.reset();
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please email contact@eriingermany.com directly.");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff2c00]/10">
          <CheckCircle2 className="h-8 w-8 text-[#ff2c00]" />
        </div>
        <h3 className="font-serif italic text-2xl text-[#181415]">Message sent!</h3>
        <p className="font-sans text-[14.5px] text-[#181415]/60 max-w-sm">
          Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.
        </p>
        <button
          onClick={() => setState("idle")}
          className="font-sans mt-2 text-sm text-[#ff2c00] underline underline-offset-4 hover:text-[#181415] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="font-sans block text-[14px] font-semibold text-[#181415] mb-2">
            Name <span className="text-[#ff2c00]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            required
            className="font-sans w-full rounded-2xl border border-[#f0e9e3] bg-[#f7f4f1] px-5 py-3.5 text-[#181415] text-base outline-none transition-all placeholder:text-[#181415]/30 focus:border-[#ff2c00]/40 focus:ring-2 focus:ring-[#ff2c00]/10"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-sans block text-[14px] font-semibold text-[#181415] mb-2">
            Your Email <span className="text-[#ff2c00]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="hello@yourbrand.com"
            required
            className="font-sans w-full rounded-2xl border border-[#f0e9e3] bg-[#f7f4f1] px-5 py-3.5 text-[#181415] text-base outline-none transition-all placeholder:text-[#181415]/30 focus:border-[#ff2c00]/40 focus:ring-2 focus:ring-[#ff2c00]/10"
          />
        </div>
      </div>

      {/* Enquiry Type */}
      <div>
        <label className="font-sans block text-[14px] font-semibold text-[#181415] mb-3">
          What are you looking for? <span className="text-[#ff2c00]">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {ENQUIRY_TYPES.map((type) => (
            <label key={type} className="cursor-pointer">
              <input type="radio" name="enquiry" value={type} className="peer sr-only" required />
              <span className="font-sans inline-block rounded-full border border-[#181415]/12 bg-[#f7f4f1] px-4 py-2 text-[14px] font-medium text-[#181415]/60 transition-all peer-checked:border-[#ff2c00] peer-checked:bg-[#ff2c00]/8 peer-checked:text-[#ff2c00] hover:border-[#181415]/25 cursor-pointer">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="font-sans block text-[14px] font-semibold text-[#181415] mb-2">
          Subject <span className="text-[#ff2c00]">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Brief description of your project"
          required
          className="font-sans w-full rounded-2xl border border-[#f0e9e3] bg-[#f7f4f1] px-5 py-3.5 text-[#181415] text-base outline-none transition-all placeholder:text-[#181415]/30 focus:border-[#ff2c00]/40 focus:ring-2 focus:ring-[#ff2c00]/10"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="font-sans block text-[14px] font-semibold text-[#181415] mb-2">
          Message <span className="text-[#ff2c00]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your brand, goals, timeline, and any other relevant details..."
          required
          className="font-sans w-full resize-none rounded-2xl border border-[#f0e9e3] bg-[#f7f4f1] px-5 py-4 text-[#181415] text-base outline-none transition-all placeholder:text-[#181415]/30 focus:border-[#ff2c00]/40 focus:ring-2 focus:ring-[#ff2c00]/10"
        />
      </div>

      {state === "error" && (
        <p className="font-sans text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="font-sans w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#181415] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#ff2c00] hover:shadow-[0_6px_20px_rgba(255,44,0,0.35)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
      >
        {state === "loading" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
        ) : (
          <><Send className="h-4 w-4" /> Send Message</>
        )}
      </button>

      <p className="font-sans text-center text-xs text-[#181415]/35">
        Sends directly to contact@eriingermany.com — no spam, ever.
      </p>
    </form>
  );
}
