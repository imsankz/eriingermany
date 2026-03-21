import Image from "next/image";
import Link from "next/link";
import { getRecentPosts, getAllCategories } from "@/lib/wordpress";
import type { Post, Category } from "@/lib/wordpress.d";

const BRANDS = [
  "DJI",
  "Kodak",
  "GetYourGuide",
  "SONGMICS",
  "Nivea",
  "Fussy",
  "Vahdam",
  "Origin Mattress",
  "Nhow Hotels",
  "Paudin",
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
      <section className="bg-[#f7f4f1] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#ff2c00] mb-5">
              Lifestyle · UGC Creator · Frankfurt, Germany
            </p>
            <h1 className="font-serif italic text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] text-[#181415] mb-6">
              Sharing real life
              <br />
              <span className="text-[#ff2c00]">in Germany.</span>
            </h1>
            <p className="font-sans text-base text-[#181415]/65 leading-relaxed mb-8 max-w-md">
              Hi, I&apos;m Eri — an Indian lifestyle creator living in Frankfurt.
              I share honest stories, guides, and tips about moving to and living
              in Germany.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/posts"
                className="bg-[#ff2c00] text-white font-sans text-sm px-6 py-3 rounded-full hover:bg-[#ff6900] transition-colors"
              >
                Read the Blog
              </Link>
              <Link
                href="/pages/collaborate-with-eri-in-germany"
                className="border border-[#181415] text-[#181415] font-sans text-sm px-6 py-3 rounded-full hover:bg-[#181415] hover:text-white transition-colors"
              >
                Work With Me
              </Link>
            </div>
          </div>

          {/* Right: hero portrait */}
          <div className="relative">
            <div
              className="relative w-full aspect-[4/5] overflow-hidden"
              style={{ borderRadius: "215px 20px 20px 200px" }}
            >
              <Image
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2021/04/IMG_7865-scaled.jpg?strip=all"
                alt="Eri in Germany"
                fill
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
                priority
              />
            </div>
            {/* Floating label */}
            <div className="absolute bottom-6 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg">
              <p className="font-serif italic text-sm text-[#181415]">
                6+ years in Germany 🇩🇪
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND LOGOS ──────────────────────────────────────────────── */}
      <section className="border-y border-[#f0e9e3] bg-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#181415]/40 text-center mb-6">
            Trusted by brands including
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="font-sans text-sm font-semibold text-[#181415]/30 tracking-wide uppercase"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_2px_1fr] gap-12 items-center">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#ff2c00] mb-4">
              About Eri
            </p>
            <h2 className="font-serif italic text-4xl text-[#181415] leading-tight mb-5">
              Creator, vlogger &amp; expat
            </h2>
            <p className="font-sans text-sm text-[#181415]/60 leading-relaxed mb-6">
              I came to Germany for a short stint and stayed for over six years.
              I create lifestyle and travel content documenting what it&apos;s
              really like to live here as an expat — the beautiful parts and the
              bureaucratic ones.
            </p>
            <Link
              href="/pages/about"
              className="font-sans text-sm text-[#ff2c00] hover:underline underline-offset-4"
            >
              More about me →
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-full bg-[#f0e9e3]" />

          {/* Services list */}
          <div className="flex flex-col gap-5">
            {[
              {
                title: "UGC Content Creation",
                desc: "Authentic photos and videos crafted for your brand's ads and social media.",
              },
              {
                title: "Social Media Management",
                desc: "Strategy, planning, posting and growth across Instagram, Facebook & TikTok.",
              },
              {
                title: "Blog & Content Consultation",
                desc: "Brand storytelling and long-form content that connects with real audiences.",
              },
            ].map((s) => (
              <div key={s.title} className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-[#ff2c00] mt-2 shrink-0" />
                <div>
                  <h3 className="font-serif italic text-lg text-[#181415] mb-1">
                    {s.title}
                  </h3>
                  <p className="font-sans text-sm text-[#181415]/55 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
            <Link
              href="/pages/collaborate-with-eri-in-germany"
              className="mt-2 font-sans text-sm text-[#ff2c00] hover:underline underline-offset-4"
            >
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ────────────────────────────────────────────── */}
      {featuredPost && (
        <section className="bg-[#f7f4f1] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#ff2c00] mb-2">
                  Latest Post
                </p>
                <h2 className="font-serif italic text-4xl text-[#181415]">
                  From the blog
                </h2>
              </div>
              <Link
                href="/posts"
                className="font-sans text-sm text-[#181415]/50 hover:text-[#ff2c00] transition-colors hidden md:block"
              >
                All posts →
              </Link>
            </div>
            <FeaturedPostCard post={featuredPost} />
          </div>
        </section>
      )}

      {/* ── RECENT POSTS GRID ────────────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/posts"
                className="font-sans text-sm border border-[#181415] text-[#181415] px-6 py-3 rounded-full hover:bg-[#181415] hover:text-white transition-colors inline-block"
              >
                View all posts
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CATEGORIES ───────────────────────────────────────────────── */}
      {categories.length > 0 && (
        <section className="bg-[#f7f4f1] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#ff2c00] mb-4">
              Topics
            </p>
            <h2 className="font-serif italic text-3xl text-[#181415] mb-8">
              Browse by category
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.slice(0, 12).map((cat: Category) => (
                <Link
                  key={cat.id}
                  href={`/posts/categories/${cat.slug}`}
                  className="bg-white border border-[#f0e9e3] text-[#181415] font-sans text-sm px-5 py-2 rounded-full hover:border-[#ff2c00] hover:text-[#ff2c00] transition-colors"
                >
                  {cat.name}
                  {cat.count > 0 && (
                    <span className="ml-1.5 text-[#181415]/30">
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
      <section className="bg-[#181415] py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#ff2c00] mb-3">
              Portfolio
            </p>
            <h2 className="font-serif italic text-4xl text-white leading-tight max-w-lg">
              See my work with brands like DJI, Kodak &amp; GetYourGuide.
            </h2>
          </div>
          <Link
            href="/pages/portfolio"
            className="shrink-0 border border-white text-white font-sans text-sm px-8 py-3 rounded-full hover:bg-white hover:text-[#181415] transition-colors"
          >
            View Portfolio →
          </Link>
        </div>
      </section>

      {/* ── COLLABORATE CTA ──────────────────────────────────────────── */}
      <section className="bg-[#ff2c00] py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif italic text-5xl text-white mb-5 leading-tight">
            Let&apos;s work together.
          </h2>
          <p className="font-sans text-white/75 mb-8 leading-relaxed">
            I help businesses grow their online presence through strategy-driven
            visuals and social media campaigns.
          </p>
          <Link
            href="/pages/collaborate-with-eri-in-germany"
            className="bg-white text-[#ff2c00] font-sans font-medium text-sm px-8 py-3 rounded-full hover:bg-[#f7f4f1] transition-colors inline-block"
          >
            Collaborate Now
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
      className="group grid md:grid-cols-[1.1fr_1fr] gap-10 items-center"
    >
      {featuredImage?.source_url && (
        <div
          className="relative w-full aspect-video overflow-hidden"
          style={{ borderRadius: "20px 80px 20px 80px" }}
        >
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>
      )}
      <div>
        {category && (
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#ff2c00]">
            {category.name}
          </span>
        )}
        <h3
          className="font-serif italic text-[clamp(1.6rem,3vw,2.5rem)] text-[#181415] mt-3 mb-4 leading-tight group-hover:text-[#ff2c00] transition-colors"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div
          className="font-sans text-sm text-[#181415]/55 line-clamp-3 mb-5 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <div className="flex items-center gap-3">
          <span className="font-sans text-xs text-[#181415]/35">{date}</span>
          <span className="text-[#ff2c00] text-sm">→</span>
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
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f0e9e3] mb-4">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] rounded-2xl bg-[#f0e9e3] mb-4" />
      )}
      {category && (
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#ff2c00] mb-1">
          {category.name}
        </span>
      )}
      <h3
        className="font-serif italic text-[1.1rem] text-[#181415] leading-snug mb-2 group-hover:text-[#ff2c00] transition-colors line-clamp-2"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <p className="font-sans text-xs text-[#181415]/35 mt-auto">{date}</p>
    </Link>
  );
}
