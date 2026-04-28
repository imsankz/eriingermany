import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Users, Eye, TrendingUp, Globe } from "lucide-react";
import { Metadata } from "next";
import GalleryTabs from "@/components/portfolio/GalleryTabs";

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

const BRAND_COLLABS = [
  { logo: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Dji-Logo.png", name: "DJI", result: "100K+ reel views", type: "UGC · Aerial Content" },
  { logo: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Get-Your-Guide-Logo-1.png", name: "GetYourGuide", result: "3 campaigns · 80K reach", type: "Affiliate · Content" },
  { logo: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Kodak-Logo-1.png", name: "Kodak", result: "Featured photographer", type: "Product · Photography" },
  { logo: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Nivea-Logo.png", name: "Nivea", result: "50K+ organic reach", type: "UGC · Skincare" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#f7f4f1]">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f7f4f1] pt-28 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-[#ff2c00]/8 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#ff2c00]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-6 flex items-center justify-center gap-2">
            <span className="inline-block w-8 h-px bg-[#ff2c00]" />
            Lifestyle &amp; Travel Creator · Frankfurt, Germany
            <span className="inline-block w-8 h-px bg-[#ff2c00]" />
          </p>

          <h1 className="font-serif italic text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] text-[#181415]">
            Creative
            <br />
            <span className="text-[#ff2c00]">Portfolio.</span>
          </h1>

          <p className="font-sans mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#181415]/65 sm:text-xl">
            Authentic storytelling meets strategy-driven content. From vibrant reels to stunning photography, every piece is crafted to connect, inspire, and convert.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/collaborate-with-eri-in-germany"
              className="font-sans inline-flex items-center gap-2 rounded-full bg-[#181415] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#ff2c00] hover:shadow-[0_6px_20px_rgba(255,44,0,0.35)] hover:scale-[1.02]"
            >
              Work with me <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.youtube.com/@EriInGermany"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans inline-flex items-center gap-2 rounded-full border border-[#181415]/25 text-[#181415] px-7 py-3.5 text-sm font-semibold transition-all hover:border-[#ff2c00] hover:text-[#ff2c00]"
            >
              <Play className="h-4 w-4 fill-current" /> Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────── */}
      <section className="border-y border-[#f0e9e3] bg-white py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff2c00]/10">
                  <Icon className="h-5 w-5 text-[#ff2c00]" />
                </div>
                <span className="font-serif italic text-3xl font-bold text-[#181415] group-hover:text-[#ff2c00] transition-colors duration-300">{value}</span>
                <span className="font-sans text-[13px] text-[#181415]/50 uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Marquee ────────────────────────────────────────────── */}
      <section className="overflow-hidden bg-white py-14 border-b border-[#f0e9e3]">
        <p className="font-sans mb-8 text-center text-[11.5px] uppercase tracking-[0.22em] text-[#181415]/40">
          Trusted by leading brands
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

      {/* ── Photo Gallery with Category Tabs ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
              Photography
            </p>
            <h2 className="font-serif italic text-[2rem] text-[#181415] sm:text-[2.5rem]">
              Capturing Life&apos;s Moments
            </h2>
          </div>
          <GalleryTabs />
        </div>
      </section>

      {/* ── Brand Collab Case Studies ────────────────────────────────── */}
      <section className="py-24 bg-[#f7f4f1] border-y border-[#f0e9e3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-4 flex items-center justify-center gap-2">
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
              Brand Work
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
            </p>
            <h2 className="font-serif italic text-[2rem] text-[#181415] sm:text-[2.5rem]">
              Featured Collaborations
            </h2>
            <p className="font-sans mx-auto mt-4 max-w-xl text-[#181415]/60">
              Campaigns with global brands — real content, real results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BRAND_COLLABS.map(({ logo, name, result, type }) => (
              <div key={name} className="group rounded-3xl border border-[#f0e9e3] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#ff2c00]/20">
                <div className="mb-6 h-12 flex items-center">
                  <Image src={logo} alt={name} width={100} height={36} className="h-8 w-auto object-contain" />
                </div>
                <p className="font-sans text-[11px] uppercase tracking-widest text-[#ff2c00] mb-1">{type}</p>
                <p className="font-serif italic text-[1.1rem] text-[#181415] font-medium">{name}</p>
                <div className="mt-4 pt-4 border-t border-[#f0e9e3]">
                  <p className="font-sans text-[13px] font-semibold text-[#181415]/70">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YouTube Shorts ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-3 flex items-center gap-2">
                <span className="inline-block w-6 h-px bg-[#ff2c00]" />
                Short-Form Content
              </p>
              <h2 className="font-serif italic text-[2rem] text-[#181415]">
                Life in Germany
              </h2>
              <p className="font-sans mt-3 text-[#181415]/55 max-w-md text-[14.5px]">
                Everyday life as an Indian living &amp; working in Germany — raw, real, and relatable.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@EriInGermany"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans shrink-0 inline-flex items-center gap-2 rounded-full border border-[#181415]/20 px-5 py-2.5 text-sm font-medium text-[#181415] transition-all hover:border-[#ff2c00] hover:text-[#ff2c00]"
            >
              View all shorts <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {SHORT_IDS.map((id) => (
              <a
                key={id}
                href={`https://www.youtube.com/shorts/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#181415] shadow-sm ring-1 ring-[#181415]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#ff2c00]/30"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                  alt="YouTube Short"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181415]/50 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-white/30 transition-all duration-300 group-hover:bg-[#ff2c00] group-hover:ring-[#ff2c00] group-hover:scale-110">
                    <Play className="h-5 w-5 fill-white text-white ml-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#181415] py-28 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <span className="font-serif text-[8rem] leading-none text-[#ff2c00]/20 select-none">&quot;</span>
          <blockquote className="-mt-8 font-serif italic text-2xl leading-relaxed text-white sm:text-4xl sm:leading-relaxed">
            Unveiling the World, One Story at a Time — Embracing Life&apos;s Journey through the Lens
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#ff2c00]/40" />
            <p className="font-sans text-[13px] font-semibold uppercase tracking-widest text-white/40">Eri in Germany</p>
            <div className="h-px w-12 bg-[#ff2c00]/40" />
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
            Ready to create together?
          </h2>
          <p className="font-sans text-white/75 mb-10 leading-relaxed text-base">
            Let&apos;s collaborate to bring authentic stories and premium UGC to your brand.
          </p>
          <Link
            href="/collaborate-with-eri-in-germany"
            className="font-sans bg-white text-[#ff2c00] font-semibold text-sm px-9 py-4 rounded-full hover:bg-[#181415] hover:text-white transition-all duration-300 inline-flex items-center gap-2 group shadow-xl shadow-black/20"
          >
            Collaborate Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </div>
  );
}
