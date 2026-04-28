import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Eri in Germany",
  description: "Contact the Social Media Expert. Hi, I'm Eri — a content creator and social media manager based in Frankfurt, Germany.",
};

const SOCIALS = [
  {
    label: "YouTube",
    handle: "@EriInGermany",
    followers: "92.3K",
    href: "https://www.youtube.com/@EriInGermany",
    bg: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@ertiqua",
    followers: "102.1K",
    href: "https://www.instagram.com/ertiqua/",
    bg: "linear-gradient(135deg, #f43f5e, #a855f7, #3b82f6)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    handle: "@ertiqua",
    followers: null,
    href: "https://twitter.com/ertiqua",
    bg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f4f1]">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f7f4f1] pt-28 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-[#ff2c00]/8 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#ff2c00]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-6 flex items-center justify-center gap-2">
            <span className="inline-block w-8 h-px bg-[#ff2c00]" />
            Open to collaborations &amp; inquiries
            <span className="inline-block w-8 h-px bg-[#ff2c00]" />
          </p>

          <h1 className="font-serif italic text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] text-[#181415]">
            Let&apos;s
            <br />
            <span className="text-[#ff2c00]">Connect.</span>
          </h1>

          <p className="font-sans mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#181415]/65 sm:text-xl">
            Have a project in mind or want to discuss a collaboration? I&apos;d love to hear from you. I typically respond within 24–48 hours.
          </p>
        </div>
      </section>

      {/* ── Main Grid ───────────────────────────────────────────────── */}
      <section className="pb-28 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ── Left sidebar ──────────────────────────────────────── */}
          <aside className="lg:col-span-2 space-y-6">

            {/* About Card with photo */}
            <div className="rounded-3xl border border-[#f0e9e3] bg-white p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden ring-2 ring-[#ff2c00]/20">
                  <Image
                    src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2021/04/IMG_7865-scaled.jpg"
                    alt="Eri in Germany"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 15%" }}
                  />
                </div>
                <div>
                  <h2 className="font-serif italic text-xl text-[#181415]">Hi, I&apos;m Eri 👋</h2>
                  <p className="font-sans text-[13px] text-[#181415]/50 mt-0.5">Frankfurt, Germany</p>
                </div>
              </div>
              <p className="font-sans text-[14.5px] text-[#181415]/65 leading-relaxed">
                A content creator &amp; social media manager based in Frankfurt. I&apos;ve helped businesses grow their online presence through strategy-driven visuals and impactful campaigns.
              </p>
            </div>

            {/* Contact Info */}
            <div className="rounded-3xl border border-[#f0e9e3] bg-white p-8 space-y-5">
              <h3 className="font-serif italic text-lg text-[#181415]">Get in touch directly</h3>

              <a
                href="mailto:contact@eriingermany.com"
                className="flex items-center gap-4 group rounded-2xl border border-transparent p-4 -m-4 transition-all hover:border-[#f0e9e3] hover:bg-[#f7f4f1]"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-[#ff2c00]/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#ff2c00]" />
                </div>
                <div>
                  <p className="font-sans text-[12px] uppercase tracking-widest text-[#181415]/40 mb-0.5">Business inquiries</p>
                  <p className="font-sans text-[14.5px] font-semibold text-[#181415] group-hover:text-[#ff2c00] transition-colors">
                    contact@eriingermany.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-[#ff2c00]/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#ff2c00]" />
                </div>
                <div>
                  <p className="font-sans text-[12px] uppercase tracking-widest text-[#181415]/40 mb-0.5">Based in</p>
                  <p className="font-sans text-[14.5px] font-semibold text-[#181415]">Frankfurt, Germany</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-[#ff2c00]/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#ff2c00]" />
                </div>
                <div>
                  <p className="font-sans text-[12px] uppercase tracking-widest text-[#181415]/40 mb-0.5">Response time</p>
                  <p className="font-sans text-[14.5px] font-semibold text-[#181415]">Within 24–48 hours</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-3xl border border-[#f0e9e3] bg-white p-8">
              <h3 className="font-serif italic text-lg text-[#181415] mb-5">Follow along</h3>
              <div className="space-y-3">
                {SOCIALS.map(({ label, handle, followers, href, bg, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-[#f0e9e3] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group"
                  >
                    <div
                      className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center text-white"
                      style={{ background: bg }}
                    >
                      {icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-sans text-[11px] uppercase tracking-widest text-[#181415]/40 leading-none mb-0.5">{label}</p>
                      <p className="font-sans text-[14.5px] font-semibold text-[#181415] leading-none">{handle}</p>
                    </div>
                    <div className="ml-auto text-right shrink-0">
                      {followers && (
                        <p className="font-serif italic text-base font-bold text-[#ff2c00]">{followers}</p>
                      )}
                      <ArrowRight className="h-4 w-4 text-[#181415]/30 group-hover:text-[#ff2c00] group-hover:translate-x-0.5 transition-all mt-0.5 ml-auto" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* ── Contact Form ──────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="relative rounded-3xl border border-[#f0e9e3] bg-white p-8 sm:p-10 shadow-sm overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#ff2c00]/5 blur-3xl" />
              <div className="relative z-10">
                <h2 className="font-serif italic text-2xl text-[#181415] mb-1">Send a Message</h2>
                <p className="font-sans text-[#181415]/55 text-[14.5px] mb-8">
                  Fill out the form — it opens your email app pre-filled and sends directly to me.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ───────────────────────────────────────────────── */}
      <section className="border-t border-[#f0e9e3] bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#181415]/40 mb-5">Prefer to browse first?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="font-sans inline-flex items-center gap-2 rounded-full border border-[#181415]/20 px-6 py-3 text-sm font-semibold text-[#181415] transition-all hover:border-[#ff2c00] hover:text-[#ff2c00]"
            >
              View Portfolio
            </Link>
            <Link
              href="/collaborate-with-eri-in-germany"
              className="font-sans inline-flex items-center gap-2 rounded-full border border-[#181415]/20 px-6 py-3 text-sm font-semibold text-[#181415] transition-all hover:border-[#ff2c00] hover:text-[#ff2c00]"
            >
              See Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
