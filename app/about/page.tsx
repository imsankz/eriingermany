import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Globe,
  Heart,
  MapPin,
  Mic2,
  PlayCircle,
  Sparkles,
  TrendingUp,
  Users,
  Youtube,
  Instagram,
  Twitter,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Eri in Germany",
  description:
    "I'm Eri — a passionate YouTuber, content creator, UGC creator and social media expert based in Frankfurt, Germany. Helping brands connect with their audience.",
};

const STATS = [
  { icon: Users, value: "194.3K", label: "Total Followers" },
  { icon: Instagram, value: "102.1K", label: "Instagram Followers" },
  { icon: Youtube, value: "67.4K", label: "YouTube Subscribers" },
  { icon: TrendingUp, value: "3.2%", label: "Engagement Rate" },
];

const TOPICS = [
  { icon: Globe, label: "Life in Germany" },
  { icon: MapPin, label: "Travel & Exploration" },
  { icon: Camera, label: "Photography & UGC" },
  { icon: Mic2, label: "Social Media Strategy" },
  { icon: Heart, label: "Lifestyle & Culture" },
  { icon: Sparkles, label: "Content Creation" },
];

const GALLERY_IMAGES = [
  {
    src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/DSC03612-scaled-e1684676554876-917x1024.jpg",
    alt: "Eri portrait",
    className: "lg:row-span-2",
  },
  {
    src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/08/DSC00551-scaled.jpg",
    alt: "Lifestyle shoot",
    className: "",
  },
  {
    src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/DSC02059-1024x683.jpg",
    alt: "Travel content",
    className: "",
  },
  {
    src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/DSC02674-1024x683.jpg",
    alt: "Strasbourg",
    className: "",
  },
  {
    src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2021/04/IMG_7865-683x1024.jpg",
    alt: "Content creator",
    className: "",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-0 sm:pt-40">
        {/* Gradient blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[700px] w-[700px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-64 -left-32 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center pb-24">

            {/* Left: Text */}
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5" />
                Frankfurt, Germany
              </span>

              <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]">
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                  Hi, I'm Eri
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                  Nice to meet you!
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-lg">
                A passionate YouTuber, content creator &amp; social media expert based in Frankfurt, Germany. I share my firsthand experience of Indian life in Germany — from culture and travel to career and everyday moments.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/collaborate-with-eri-in-germany"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105"
                >
                  Work with me <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://www.youtube.com/@EriInGermany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold transition-all hover:border-primary hover:text-primary"
                >
                  <Youtube className="h-4 w-4" /> YouTube Channel
                </a>
              </div>

              {/* Social pills */}
              <div className="mt-8 flex items-center gap-3">
                <a href="https://www.instagram.com/ertiqua/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-rose-400 hover:text-rose-500">
                  <Instagram className="h-3.5 w-3.5" /> @ertiqua
                </a>
                <a href="https://www.youtube.com/@EriInGermany" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-red-400 hover:text-red-500">
                  <Youtube className="h-3.5 w-3.5" /> @EriInGermany
                </a>
                <a href="https://twitter.com/ertiqua" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-foreground hover:text-foreground">
                  <Twitter className="h-3.5 w-3.5" /> @ertiqua
                </a>
              </div>
            </div>

            {/* Right: Hero image + floating cards */}
            <div className="relative">
              {/* Main portrait */}
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/IMG_0510-2-scaled-e1684680193261.jpg"
                    alt="Eri in Germany"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating signature card */}
                <div className="absolute -bottom-6 -left-6 hidden sm:block">
                  <div className="rounded-2xl border bg-card/90 backdrop-blur-md p-4 shadow-xl">
                    <Image
                      src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/Ertiqua-Signature-e1684680720241.png"
                      alt="Eri signature"
                      width={140}
                      height={60}
                      className="object-contain dark:invert"
                    />
                  </div>
                </div>

                {/* Floating stat card */}
                <div className="absolute -top-6 -right-6 hidden sm:block">
                  <div className="rounded-2xl border bg-card/90 backdrop-blur-md px-5 py-4 shadow-xl">
                    <p className="text-xs text-muted-foreground mb-1">Total Followers</p>
                    <p className="text-2xl font-extrabold text-foreground">194.3K</p>
                    <div className="mt-1 flex items-center gap-1 text-xs text-emerald-500 font-medium">
                      <TrendingUp className="h-3 w-3" /> Across all platforms
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="border-y bg-muted/30 py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-3xl font-extrabold tracking-tight text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── My Story ──────────────────────────────────────────────── */}
      <section className="py-28 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Story text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">My Story</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-8 leading-tight">
              Helping brands connect with their audience
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                I help small businesses build a strong and engaging presence online through creative storytelling and consistent social media strategies.
              </p>
              <p>
                Many local businesses have amazing products and services but struggle to show them online. That's where I come in. From planning content ideas to creating Reels, Shorts, photos, and UGC videos — I make sure your brand connects with the right audience and stands out.
              </p>
              <p>
                I work closely with small businesses across Frankfurt and nearby areas — cafés, shops, service providers, and local brands — to help them grow through clear strategy and authentic content.
              </p>
              <p>
                I'm thrilled to share my journey as I explore all things related to studying, working, traveling, and living in Germany. Whether you're a student, a professional seeking work opportunities, or simply curious about life here — you're in the right place.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105"
              >
                Let's connect <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Topics I cover */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">What I Cover</p>
            <h3 className="text-2xl font-bold text-foreground mb-8">Simple &amp; Effective Content Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TOPICS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-8 rounded-3xl border-l-4 border-primary bg-primary/5 p-6">
              <p className="text-base italic text-foreground/80 leading-relaxed">
                "Through my engaging videos, blog posts, and active social media presence, I aim to create an inclusive community where we can learn, grow, and support each other."
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">— Eri in Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────── */}
      <section className="border-y bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Gallery</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Behind the lens
            </h2>
            <p className="mt-4 text-muted-foreground">A glimpse into my world — life, travel, and content creation.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
            {/* Large portrait */}
            <div className="group relative col-span-1 sm:row-span-2 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/DSC03612-scaled-e1684676554876-917x1024.jpg"
                alt="Eri portrait"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Landscape 1 */}
            <div className="group relative col-span-1 sm:col-span-2 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/08/DSC00551-scaled.jpg"
                alt="Lifestyle"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Square */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/DSC02059-1024x683.jpg"
                alt="Travel"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Landscape 2 */}
            <div className="group relative col-span-1 sm:col-span-2 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/DSC02674-1024x683.jpg"
                alt="Strasbourg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Portrait */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2021/04/IMG_7865-683x1024.jpg"
                alt="Content creator"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold transition-all hover:border-primary hover:text-primary"
            >
              View full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Ready to share your story with the world?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            If you're ready to take your business online or improve your social media presence, let's connect. I'll be happy to guide you through the next steps.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-105"
            >
              Get in touch <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/collaborate-with-eri-in-germany"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-9 py-4 text-base font-semibold transition-all hover:border-primary hover:text-primary"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
