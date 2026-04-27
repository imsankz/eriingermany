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
    color: "from-blue-500/20 to-blue-600/5",
    accent: "blue",
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
    color: "from-rose-500/20 to-rose-600/5",
    accent: "rose",
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
    color: "from-violet-500/20 to-violet-600/5",
    accent: "violet",
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
    <div className="min-h-screen bg-background">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <BarChart3 className="h-3.5 w-3.5" />
            Content Strategy · Social Media · UGC
          </span>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
              Let's Grow
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Your Brand
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I help businesses grow their online presence through strategy-driven visuals, authentic storytelling, and high-performance social media campaigns. Ready to stand out?
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pages/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-foreground/40 hover:bg-foreground/5"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand Marquee ────────────────────────────────────────────── */}
      <section className="overflow-hidden border-y py-12">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          12+ Brands including DJI, Nivea, Kodak, GetYourGuide &amp; more
        </p>
        <div className="relative flex">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
          <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={110}
                height={48}
                className="h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-28 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">What I Offer</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Services Built for Growth
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            From day-to-day management to one-off UGC campaigns — everything your brand needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-3xl overflow-hidden border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                service.featured
                  ? "bg-gradient-to-b from-primary/10 via-card to-card border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-card hover:border-foreground/20"
              }`}
            >
              {service.featured && (
                <div className="absolute top-5 right-5">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                <service.icon className="h-6 w-6 text-foreground/70" />
              </div>

              <p className="text-[13px] font-semibold uppercase tracking-widest text-primary mb-2">{service.tagline}</p>
              <h3 className="text-xl font-bold text-foreground mb-6 leading-snug">{service.title}</h3>

              <ul className="space-y-3">
                {service.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-foreground/8">
                <Link
                  href="/pages/contact"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                    service.featured
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "border border-foreground/20 hover:border-primary hover:text-primary"
                  }`}
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Me ───────────────────────────────────────────────────── */}
      <section className="border-y bg-muted/20 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Why work with me?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {WHY_ME.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram Reels ──────────────────────────────────────────── */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Real Content Examples</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
              Featured Campaigns &amp; Reels
            </h2>
          </div>
          <a
            href="https://www.instagram.com/ertiqua/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-all hover:border-primary hover:text-primary"
          >
            View on Instagram <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {REEL_IDS.map((id) => (
            <div
              key={id}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-black ring-1 ring-foreground/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary/30"
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
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Let's build your online presence
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Partner with Eri in Germany to showcase your brand to a global audience. Let's create something amazing together. 🚀
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-105"
            >
              Get in Touch <ArrowRight className="h-5 w-5" />
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
