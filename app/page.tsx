import Image from "next/image";
import Link from "next/link";
import { getRecentPosts, getAllCategories } from "@/lib/wordpress";
import type { Post, Category } from "@/lib/wordpress.d";
import { ArrowRight } from "lucide-react";

const BRAND_LOGOS = [
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Dji-Logo.png", alt: "DJI" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Kodak-Logo-1.png", alt: "Kodak" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Get-Your-Guide-Logo-1.png", alt: "GetYourGuide" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Songmics-Logo.png", alt: "SONGMICS" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Nivea-Logo.png", alt: "Nivea" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Fussy-Logo.png", alt: "Fussy" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Vahdam-Logo.png", alt: "Vahdam" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/TRS-Logo-1.png", alt: "TRS" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Nhow-Logo.png", alt: "Nhow" },
  { src: "https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Paudin-Logo.png", alt: "Paudin" },
];

export default async function Home() {
  const [allPosts, categories] = await Promise.all([
    getRecentPosts(),
    getAllCategories(),
  ]);

  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(1, 5);

  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#f7f4f1] overflow-hidden">
        {/* Decorative blob */}
        <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ff2c00]/5 blur-[100px] -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-16 items-center relative">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-6 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-[#ff2c00]" />
              Lifestyle · UGC Creator · Frankfurt, Germany
            </p>
            <h1 className="font-serif italic text-[clamp(2.8rem,5.5vw,4.8rem)] leading-[1.05] text-[#181415] mb-6">
              Sharing real life
              <br />
              <span className="text-[#ff2c00]">in Germany.</span>
            </h1>
            <p className="font-sans text-base text-[#181415]/68 leading-relaxed mb-10 max-w-md">
              Hi, I&apos;m Eri — an Indian lifestyle creator living in Frankfurt.
              I share honest stories, guides, and tips about moving to and living
              in Germany.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/posts"
                className="bg-[#181415] text-white font-sans text-sm px-7 py-3.5 rounded-full hover:bg-[#ff2c00] transition-all duration-300 shadow-sm hover:shadow-[0_6px_20px_rgba(255,44,0,0.35)] hover:scale-[1.02] flex items-center gap-2"
              >
                Read the Blog <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/collaborate-with-eri-in-germany"
                className="border border-[#181415]/25 text-[#181415] font-sans text-sm px-7 py-3.5 rounded-full hover:border-[#ff2c00] hover:text-[#ff2c00] transition-all duration-300"
              >
                Work With Me
              </Link>
            </div>

            {/* Social proof mini-strip */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#181415]/8 pt-8">
              {[
                { value: "194.3K", label: "Followers" },
                { value: "3.2%", label: "Engagement" },
                { value: "6+", label: "Years in Germany" },
              ].map(({ value, label }) => (
                <div key={label} className="group">
                  <p className="font-serif italic text-[2rem] font-bold text-[#181415] leading-none group-hover:text-[#ff2c00] transition-colors duration-300">{value}</p>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-[#181415]/45 mt-1.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero portrait */}
          <div className="relative">
            <div
              className="relative w-full aspect-[4/5] overflow-hidden shadow-2xl shadow-[#181415]/15"
              style={{ borderRadius: "40% 20px 20px 40%" }}
            >
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2021/04/IMG_7865-scaled.jpg?strip=all"
                alt="Eri in Germany"
                fill
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
                priority
              />
              {/* Subtle inner vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181415]/20 via-transparent to-transparent" />
            </div>

            {/* Floating label — bottom left */}
            <div className="absolute bottom-6 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[#f0e9e3]">
              <p className="font-serif italic text-sm text-[#181415]">
                6+ years in Germany 🇩🇪
              </p>
            </div>

            {/* Floating accent — top right */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-4 border-[#ff2c00]/20 bg-[#ff2c00]/5 backdrop-blur-sm hidden sm:flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND MARQUEE ──────────────────────────────────────────────── */}
      <section className="border-y border-[#f0e9e3] bg-white py-10 overflow-hidden">
        <p className="font-sans text-[11.5px] uppercase tracking-[0.22em] text-[#181415]/40 text-center mb-8">
          Trusted by leading brands
        </p>
        <div className="relative flex">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="animate-marquee flex shrink-0 items-center gap-14 pr-14">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="h-16 w-auto object-contain opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1px_1fr] gap-14 items-center">
          <div>
            <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
              About Eri
            </p>
            <h2 className="font-serif italic text-[2.4rem] text-[#181415] leading-[1.1] mb-6">
              Creator, vlogger &amp; expat
            </h2>
            <p className="font-sans text-base text-[#181415]/65 leading-relaxed mb-8">
              I came to Germany for a short stint and stayed for over six years.
              I create lifestyle and travel content documenting what it&apos;s
              really like to live here as an expat — the beautiful parts and the
              bureaucratic ones.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans text-sm text-[#181415] hover:text-[#ff2c00] transition-colors group"
            >
              More about me
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-full bg-[#f0e9e3]" />

          {/* Services list */}
          <div className="flex flex-col gap-6">
            {[
              {
                num: "01",
                title: "UGC Content Creation",
                desc: "Authentic photos and videos crafted for your brand's ads and social media.",
              },
              {
                num: "02",
                title: "Social Media Management",
                desc: "Strategy, planning, posting and growth across Instagram, Facebook & TikTok.",
              },
              {
                num: "03",
                title: "Blog & Content Consultation",
                desc: "Brand storytelling and long-form content that connects with real audiences.",
              },
            ].map((s) => (
              <div key={s.title} className="flex gap-5 items-start group">
                <span className="font-sans text-[11px] font-bold text-[#ff2c00]/50 mt-1 shrink-0 group-hover:text-[#ff2c00] transition-colors">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-serif italic text-[1.1rem] text-[#181415] mb-1 group-hover:text-[#ff2c00] transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-sans text-[14.5px] text-[#181415]/62 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
            <Link
              href="/collaborate-with-eri-in-germany"
              className="inline-flex items-center gap-2 mt-2 font-sans text-sm text-[#ff2c00] hover:text-[#ff6900] transition-colors group"
            >
              See all services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ────────────────────────────────────────────── */}
      {featuredPost && (
        <section className="bg-[#f7f4f1] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-2 flex items-center gap-2">
                  <span className="inline-block w-6 h-px bg-[#ff2c00]" />
                  Latest Post
                </p>
                <h2 className="font-serif italic text-[2.2rem] text-[#181415]">
                  From the blog
                </h2>
              </div>
              <Link
                href="/posts"
                className="font-sans text-sm text-[#181415]/45 hover:text-[#ff2c00] transition-colors hidden md:flex items-center gap-1.5 group"
              >
                All posts
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <FeaturedPostCard post={featuredPost} />
          </div>
        </section>
      )}

      {/* ── RECENT POSTS GRID ────────────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/posts"
                className="font-sans text-sm border border-[#181415]/20 text-[#181415] px-8 py-3.5 rounded-full hover:bg-[#181415] hover:text-white hover:border-transparent transition-all duration-300 inline-block"
              >
                View all posts
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CATEGORIES ───────────────────────────────────────────────── */}
      {categories.length > 0 && (
        <section className="bg-[#f7f4f1] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
              Topics
            </p>
            <h2 className="font-serif italic text-[2rem] text-[#181415] mb-8">
              Browse by category
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {categories.slice(0, 12).map((cat: Category) => (
                <Link
                  key={cat.id}
                  href={`/posts/categories/${cat.slug}`}
                  className="bg-white border border-[#f0e9e3] text-[#181415] font-sans text-sm px-5 py-2.5 rounded-full hover:border-[#ff2c00] hover:text-[#ff2c00] hover:shadow-sm transition-all duration-200"
                >
                  {cat.name}
                  {cat.count > 0 && (
                    <span className="ml-1.5 text-[#181415]/25 text-xs">
                      {cat.count}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PORTFOLIO BANNER ─────────────────────────────────────────── */}
      <section className="bg-[#181415] py-24 relative overflow-hidden">
        {/* Decorative blob */}
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff2c00]/8 blur-[100px]" />
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center justify-between relative">
          <div>
            <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-[#ff2c00]" />
              Portfolio
            </p>
            <h2 className="font-serif italic text-[2.4rem] text-white leading-tight max-w-lg">
              See my work with brands like DJI, Kodak &amp; GetYourGuide.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="shrink-0 border border-white/20 text-white font-sans text-sm px-8 py-3.5 rounded-full hover:bg-[#ff2c00] hover:border-[#ff2c00] transition-all duration-300 flex items-center gap-2 group hover:shadow-[0_6px_20px_rgba(255,44,0,0.35)]"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── COLLABORATE CTA ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 bg-[#ff2c00]">
        {/* Noise texture overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} />
        <div className="pointer-events-none absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)`
        }} />
        <div className="max-w-2xl mx-auto px-6 text-center relative">
          <h2 className="font-serif italic text-[clamp(2.5rem,5vw,4rem)] text-white mb-5 leading-tight">
            Let&apos;s work together.
          </h2>
          <p className="font-sans text-white/75 mb-10 leading-relaxed text-base">
            I help businesses grow their online presence through strategy-driven
            visuals and social media campaigns.
          </p>
          <Link
            href="/collaborate-with-eri-in-germany"
            className="bg-white text-[#ff2c00] font-sans font-semibold text-sm px-9 py-4 rounded-full hover:bg-[#181415] hover:text-white transition-all duration-300 inline-flex items-center gap-2 group shadow-xl shadow-black/20"
          >
            Collaborate Now
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeaturedPostCard({ post }: { post: Post }) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const category = post._embedded?.["wp:term"]?.[0]?.[0];
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group grid md:grid-cols-[1.1fr_1fr] gap-12 items-center"
    >
      {featuredImage?.source_url && (
        <div
          className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-xl shadow-[#181415]/10"
          style={{}}
        >
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181415]/10 to-transparent" />
        </div>
      )}
      <div>
        {category && (
          <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#ff2c00]">
            {category.name}
          </span>
        )}
        <h3
          className="font-serif italic text-[clamp(1.5rem,3vw,2.3rem)] text-[#181415] mt-3 mb-4 leading-tight group-hover:text-[#ff2c00] transition-colors duration-300"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div
          className="font-sans text-[14.5px] text-[#181415]/62 line-clamp-3 mb-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <div className="flex items-center gap-3">
          <span className="font-sans text-xs text-[#181415]/45">{date}</span>
          <span className="text-[#ff2c00] text-sm group-hover:translate-x-1 transition-transform inline-block">→</span>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const category = post._embedded?.["wp:term"]?.[0]?.[0];
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group flex flex-col"
    >
      {featuredImage?.source_url ? (
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f0e9e3] mb-4 shadow-sm">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#ff2c00]/0 group-hover:bg-[#ff2c00]/8 transition-colors duration-300" />
        </div>
      ) : (
        <div className="aspect-[4/3] rounded-2xl bg-[#f0e9e3] mb-4" />
      )}
      {category && (
        <span className="font-sans text-[11.5px] uppercase tracking-[0.18em] text-[#ff2c00] mb-1">
          {category.name}
        </span>
      )}
      <h3
        className="font-serif italic text-[1.12rem] text-[#181415] leading-snug mb-2 group-hover:text-[#ff2c00] transition-colors duration-200 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <p className="font-sans text-[12px] text-[#181415]/45 mt-auto">{date}</p>
    </Link>
  );
}
