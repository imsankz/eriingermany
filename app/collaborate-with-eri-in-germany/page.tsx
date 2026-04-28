import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Camera, Smartphone, CheckCircle2, Zap, Clock, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Eri in Germany",
  description: "Collaboration & Services. I help businesses grow their online presence through strategy driven visuals and social media campaigns.",
};

const BRAND_LOGOS = [
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Dji-Logo.png", alt: "DJI" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Kodak-Logo-1.png", alt: "Kodak" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Get-Your-Guide-Logo-1.png", alt: "Get Your Guide" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Songmics-Logo.png", alt: "Songmics" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Nivea-Logo.png", alt: "Nivea" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Fussy-Logo.png", alt: "Fussy" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Vahdam-Logo.png", alt: "Vahdam" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/TRS-Logo-1.png", alt: "TRS" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Origin-Mattress-Logo.png", alt: "Origin Mattress" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Nhow-Logo.png", alt: "Nhow" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Desigros-Logo.png", alt: "Desigros" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Paudin-Logo.png", alt: "Paudin" },
];

const SERVICES = [
  {
    icon: BarChart3,
    title: "Social Media Management & Growth Strategy",
    tagline: "Grow while you focus on what you love",
    perks: [
      "Plan & schedule on Instagram, Facebook, and TikTok",
      "Data-driven content calendar built for your goals",
      "Monthly analytics reports & engagement tracking",
      "Community management & audience interaction",
    ],
  },
  {
    icon: Camera,
    title: "Content Creation & Consultation",
    tagline: "High-quality visuals that tell your story",
    perks: [
      "Professional photo & video production",
      "Complete brand story development",
      "Social media page audit & strategy session",
      "Editing, captioning & hashtag optimization",
    ],
    featured: true,
  },
  {
    icon: Smartphone,
    title: "UGC – User Generated Content",
    tagline: "Real content for real results",
    perks: [
      "Natural, authentic video & photo content",
      "Optimized for paid ads & organic social",
      "Raw + edited files delivered quickly",
      "Multiple formats: Reels, TikTok, Stories",
    ],
  },
];

const REEL_IDS = ["DTP61wACIBN", "DT7uSukiCsQ", "DUrmWmhCFVI", "DMNq6QlK3HG", "DT5syL9CBi8"];

const WHY_ME = [
  { icon: Zap, title: "Fast Turnaround", desc: "Professionally edited content delivered on time, every time." },
  { icon: Users, title: "Engaged Audience", desc: "Real followers who trust my recommendations — your brand's best asset." },
  { icon: Clock, title: "Consistent Posting", desc: "Reliable content calendar that keeps your brand top-of-mind." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f7f4f1]">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f7f4f1] pt-28 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-[#ff2c00]/8 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#ff2c00]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-6 flex items-center justify-center gap-2">
            <span className="inline-block w-8 h-px bg-[#ff2c00]" />
            Content Strategy · Social Media · UGC
            <span className="inline-block w-8 h-px bg-[#ff2c00]" />
          </p>

          <h1 className="font-serif italic text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] text-[#181415]">
            Let&apos;s Grow
            <br />
            <span className="text-[#ff2c00]">Your Brand.</span>
          </h1>

          <p className="font-sans mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#181415]/65 sm:text-xl">
            I help businesses grow their online presence through strategy-driven visuals, authentic storytelling, and high-performance social media campaigns. Ready to stand out?
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="font-sans inline-flex items-center gap-2 rounded-full bg-[#181415] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#ff2c00] hover:shadow-[0_6px_20px_rgba(255,44,0,0.35)] hover:scale-[1.02]"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="font-sans inline-flex items-center gap-2 rounded-full border border-[#181415]/25 text-[#181415] px-7 py-3.5 text-sm font-semibold transition-all hover:border-[#ff2c00] hover:text-[#ff2c00]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand Marquee ────────────────────────────────────────────── */}
      <section className="overflow-hidden border-y border-[#f0e9e3] bg-white py-12">
        <p className="font-sans mb-8 text-center text-[11.5px] uppercase tracking-[0.22em] text-[#181415]/40">
          12+ Brands including DJI, Nivea, Kodak, GetYourGuide &amp; more
        </p>
        <div className="relative flex">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={110}
                height={48}
                className="h-16 w-auto object-contain opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-4 flex items-center justify-center gap-2">
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
              What I Offer
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
            </p>
            <h2 className="font-serif italic text-[2.6rem] text-[#181415] sm:text-[3.2rem]">
              Services Built for Growth
            </h2>
            <p className="font-sans mx-auto mt-4 max-w-xl text-lg text-[#181415]/60">
              From day-to-day management to one-off UGC campaigns — everything your brand needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className={`relative rounded-3xl overflow-hidden border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.featured
                    ? "bg-[#181415] border-[#181415] shadow-lg shadow-[#181415]/20"
                    : "bg-[#f7f4f1] border-[#f0e9e3] hover:border-[#ff2c00]/30 hover:shadow-[0_8px_30px_rgba(255,44,0,0.08)]"
                }`}
              >
                {service.featured && (
                  <div className="absolute top-5 right-5">
                    <span className="rounded-full bg-[#ff2c00] px-3 py-1 text-xs font-semibold text-white font-sans">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`mb-6 h-12 w-12 rounded-2xl flex items-center justify-center ${
                  service.featured ? "bg-[#ff2c00]" : "bg-[#ff2c00]/10"
                }`}>
                  <service.icon className={`h-6 w-6 ${service.featured ? "text-white" : "text-[#ff2c00]"}`} />
                </div>

                <p className={`font-sans text-[12px] font-semibold uppercase tracking-widest mb-2 ${
                  service.featured ? "text-[#ff2c00]" : "text-[#ff2c00]"
                }`}>{service.tagline}</p>
                <h3 className={`font-serif italic text-[1.25rem] mb-6 leading-snug ${
                  service.featured ? "text-white" : "text-[#181415]"
                }`}>{service.title}</h3>

                <ul className="space-y-3">
                  {service.perks.map((perk) => (
                    <li key={perk} className={`flex items-start gap-3 font-sans text-[14.5px] ${
                      service.featured ? "text-white/70" : "text-[#181415]/60"
                    }`}>
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${service.featured ? "text-[#ff2c00]" : "text-[#ff2c00]"}`} />
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className={`mt-8 pt-6 border-t ${service.featured ? "border-white/10" : "border-[#181415]/8"}`}>
                  <Link
                    href="/contact"
                    className={`font-sans inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                      service.featured
                        ? "bg-[#ff2c00] text-white shadow-md shadow-[#ff2c00]/30 hover:bg-[#e02600]"
                        : "border border-[#181415]/20 text-[#181415] hover:border-[#ff2c00] hover:text-[#ff2c00]"
                    }`}
                  >
                    Get started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Me ───────────────────────────────────────────────────── */}
      <section className="border-y border-[#f0e9e3] bg-[#f7f4f1] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-4 flex items-center justify-center gap-2">
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
              The difference
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
            </p>
            <h2 className="font-serif italic text-[2.2rem] text-[#181415] sm:text-[2.8rem]">
              Why work with me?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {WHY_ME.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-4 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff2c00] shadow-lg shadow-[#ff2c00]/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-serif italic text-[1.15rem] text-[#181415]">{title}</h3>
                <p className="font-sans text-[14.5px] text-[#181415]/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram Reels ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-3 flex items-center gap-2">
                <span className="inline-block w-6 h-px bg-[#ff2c00]" />
                Real Content Examples
              </p>
              <h2 className="font-serif italic text-[2rem] text-[#181415]">
                Featured Campaigns &amp; Reels
              </h2>
            </div>
            <a
              href="https://www.instagram.com/ertiqua/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans shrink-0 inline-flex items-center gap-2 rounded-full border border-[#181415]/20 px-5 py-2.5 text-sm font-medium text-[#181415] transition-all hover:border-[#ff2c00] hover:text-[#ff2c00]"
            >
              View on Instagram <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {REEL_IDS.map((id) => (
              <div
                key={id}
                className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-black ring-1 ring-[#181415]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#ff2c00]/30"
              >
                <iframe
                  src={`https://www.instagram.com/reel/${id}/embed`}
                  allow="encrypted-media"
                  className="absolute inset-0 h-[calc(100%+40px)] w-full -top-5 border-0"
                  scrolling="no"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#ff2c00] py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif italic text-[clamp(2.5rem,5vw,4rem)] text-white mb-5 leading-tight">
            Let&apos;s build your online presence.
          </h2>
          <p className="font-sans text-white/75 mb-10 leading-relaxed text-base">
            Partner with Eri in Germany to showcase your brand to a global audience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="font-sans bg-white text-[#ff2c00] font-semibold text-sm px-9 py-4 rounded-full hover:bg-[#181415] hover:text-white transition-all duration-300 inline-flex items-center gap-2 group shadow-xl shadow-black/20"
            >
              Get in Touch <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </div>
  );
}
