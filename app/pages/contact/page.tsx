import { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, MapPin, ArrowRight, Instagram, Youtube, Twitter, Send, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Eri in Germany",
  description: "Contact the Social Media Expert. Hi, I'm Eri — a content creator and social media manager based in Frankfurt, Germany.",
};

const SOCIALS = [
  {
    icon: Youtube,
    label: "YouTube",
    handle: "@EriInGermany",
    href: "https://www.youtube.com/@EriInGermany",
    color: "hover:bg-red-500 hover:text-white hover:border-red-500",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@ertiqua",
    href: "https://www.instagram.com/ertiqua/",
    color: "hover:bg-gradient-to-br hover:from-rose-500 hover:to-violet-600 hover:text-white hover:border-transparent",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@ertiqua",
    href: "https://twitter.com/ertiqua",
    color: "hover:bg-foreground hover:text-background hover:border-foreground",
  },
];

const ENQUIRY_TYPES = [
  "Brand Collaboration",
  "UGC Content",
  "Social Media Management",
  "Content Consultation",
  "Other",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <MessageSquare className="h-3.5 w-3.5" />
            Open to collaborations &amp; inquiries
          </span>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
              Let's
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you. I typically respond within 24–48 hours.
          </p>
        </div>
      </section>

      {/* ── Main Grid ───────────────────────────────────────────────── */}
      <section className="pb-28 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ── Left sidebar ──────────────────────────────────────── */}
          <aside className="lg:col-span-2 space-y-8">

            {/* About Card */}
            <div className="rounded-3xl border bg-card p-8">
              <h2 className="text-2xl font-extrabold text-foreground mb-2">Hi, I'm Eri 👋</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                A content creator &amp; social media manager based in Frankfurt, Germany. I've helped small businesses grow their online presence through strategy-driven visuals, storytelling, and impactful campaigns.
              </p>
            </div>

            {/* Contact Info */}
            <div className="rounded-3xl border bg-card p-8 space-y-6">
              <h3 className="font-bold text-lg text-foreground">Get in touch directly</h3>

              <a
                href="mailto:contact@eriingermany.com"
                className="flex items-center gap-4 group rounded-2xl border border-transparent p-4 -m-4 transition-all hover:border-foreground/10 hover:bg-muted/50"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">Business inquiries</p>
                  <p className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">
                    contact@eriingermany.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">Based in</p>
                  <p className="text-sm font-semibold text-foreground">Frankfurt, Germany</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">Response time</p>
                  <p className="text-sm font-semibold text-foreground">Within 24–48 hours</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-3xl border bg-card p-8">
              <h3 className="font-bold text-lg text-foreground mb-5">Follow along</h3>
              <div className="space-y-3">
                {SOCIALS.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-200 ${color}`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-sm opacity-70 leading-none mb-0.5">{label}</p>
                      <p className="text-[15px] font-semibold leading-none">{handle}</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 opacity-40" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* ── Contact Form ──────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="relative rounded-3xl border bg-card p-8 sm:p-10 shadow-lg overflow-hidden">
              {/* Decorative blob */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-2xl font-extrabold text-foreground mb-2">Send a Message</h2>
                <p className="text-muted-foreground text-[15px] mb-8">
                  Fill out the form and I'll get back to you as soon as possible.
                </p>

                <form action="#" className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[15px] font-semibold text-foreground mb-2">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your full name"
                        required
                        className="w-full rounded-2xl border bg-background/60 px-5 py-3.5 text-base outline-none ring-0 transition-all placeholder:text-muted-foreground/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[15px] font-semibold text-foreground mb-2">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="hello@yourbrand.com"
                        required
                        className="w-full rounded-2xl border bg-background/60 px-5 py-3.5 text-base outline-none ring-0 transition-all placeholder:text-muted-foreground/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-[15px] font-semibold text-foreground mb-3">
                      What are you looking for? <span className="text-primary">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {ENQUIRY_TYPES.map((type) => (
                        <label key={type} className="cursor-pointer">
                          <input type="radio" name="enquiry" value={type} className="peer sr-only" />
                          <span className="inline-block rounded-full border border-foreground/15 px-4 py-2 text-[15px] font-medium text-muted-foreground transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:border-foreground/30">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-[15px] font-semibold text-foreground mb-2">
                      Subject <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Brief description of your project"
                      required
                      className="w-full rounded-2xl border bg-background/60 px-5 py-3.5 text-base outline-none ring-0 transition-all placeholder:text-muted-foreground/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[15px] font-semibold text-foreground mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your brand, goals, timeline, and any other relevant details..."
                      required
                      className="w-full resize-none rounded-2xl border bg-background/60 px-5 py-4 text-base outline-none ring-0 transition-all placeholder:text-muted-foreground/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] hover:shadow-primary/40 active:scale-[0.98]"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to being contacted about your inquiry. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ───────────────────────────────────────────────── */}
      <section className="border-t bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm text-muted-foreground mb-4">Prefer to browse first?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pages/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold transition-all hover:border-primary hover:text-primary"
            >
              View Portfolio
            </Link>
            <Link
              href="/pages/collaborate-with-eri-in-germany"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold transition-all hover:border-primary hover:text-primary"
            >
              See Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
