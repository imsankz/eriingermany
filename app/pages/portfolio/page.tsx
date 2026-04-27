import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MapPin, Coffee, Gem, Play, Users, Eye, TrendingUp, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Eri in Germany",
  description: "Eri in Germany Portfolio. As a passionate lifestyle and travel creator, I've dedicated myself to crafting authentic UGC content.",
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
];

const STATS = [
  { icon: Users, value: "194.3K", label: "Total Followers" },
  { icon: Eye, value: "102.1K", label: "Instagram Followers" },
  { icon: TrendingUp, value: "3.2%", label: "Avg. Engagement" },
  { icon: Globe, value: "12+", label: "Brand Partners" },
];

const SHORT_IDS = ["GMQIxigMam4", "ob7W-P1eH7c", "4Dslw94Jf0I", "n7R7M1WyRWE", "LUBldQc8ITE", "3Z_xLabd98E"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-28">
        {/* Gradient blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <Camera className="h-3.5 w-3.5" />
            Lifestyle &amp; Travel Creator · Frankfurt, Germany
          </span>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Authentic storytelling meets strategy-driven content. From vibrant reels to stunning photography, every piece is crafted to connect, inspire, and convert.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pages/collaborate-with-eri-in-germany"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40"
            >
              Work with me <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.youtube.com/@EriInGermany"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-foreground/40 hover:bg-foreground/5"
            >
              <Play className="h-4 w-4 fill-current" /> Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────── */}
      <section className="border-y bg-muted/30 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-3xl font-extrabold tracking-tight text-foreground">{value}</span>
                <span className="text-[15px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Marquee ────────────────────────────────────────────── */}
      <section className="overflow-hidden py-16 border-b">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          Trusted by leading brands
        </p>
        <div className="relative flex">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

          {/* Marquee track — duplicate for seamless loop */}
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

      {/* ── Short-Form Content ───────────────────────────────────────── */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Short-Form Content</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Life in Germany
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              My everyday lifestyle as an Indian living &amp; working in Germany — raw, real, and relatable.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@EriInGermany"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-all hover:border-primary hover:text-primary"
          >
            View all shorts <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SHORT_IDS.map((id) => (
            <div
              key={id}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary/30"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                title="YouTube Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Bento Photo Grid ────────────────────────────────────────── */}
      <section className="py-24 bg-muted/20 border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Photography</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Capturing Life's Diverse Moments
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From the cobblestone streets of Strasbourg to vibrant food markets and premium jewellery — every frame tells a story.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-[260px]">
            {/* Travel — wide */}
            <div className="group relative lg:col-span-7 lg:row-span-2 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/DSC02674-1024x683.jpg"
                alt="Travel & Activities"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/20">
                  <MapPin className="h-3 w-3" /> Travel &amp; Activities
                </span>
                <h3 className="text-3xl font-bold text-white">Strasbourg &amp; beyond</h3>
                <p className="mt-2 text-white/70 text-[15px] max-w-xs">Discovering the hidden gems of Europe one weekend at a time.</p>
              </div>
            </div>

            {/* Food */}
            <div className="group relative lg:col-span-5 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2024/03/DSC04107-683x1024.jpg"
                alt="Local Culture & Food"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/20">
                  <Coffee className="h-3 w-3" /> Culture &amp; Food
                </span>
                <h3 className="text-xl font-bold text-white">Local flavors</h3>
              </div>
            </div>

            {/* Jewellery */}
            <div className="group relative lg:col-span-5 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/08/DSC00308-683x1024.jpg"
                alt="Jewellery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/20">
                  <Gem className="h-3 w-3" /> Jewellery &amp; Fashion
                </span>
                <h3 className="text-xl font-bold text-white">Everyday elegance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <span className="text-[20rem] font-black leading-none">"</span>
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-2xl font-semibold italic leading-relaxed text-foreground sm:text-4xl sm:leading-relaxed">
            "Unveiling the World, One Story at a Time — Embracing Life's Journey through the Lens"
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary/40" />
            <p className="text-[13px] font-semibold uppercase tracking-widest text-muted-foreground">Eri in Germany</p>
            <div className="h-px w-12 bg-primary/40" />
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Ready to create together?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Let's collaborate to bring authentic stories and premium UGC to your brand. I'd love to hear your vision.
          </p>
          <div className="mt-10">
            <Link
              href="/pages/collaborate-with-eri-in-germany"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50"
            >
              Collaborate Now <ArrowRight className="h-5 w-5" />
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
