import {
  getPostBySlug,
  getAllPostSlugs,
  getPageBySlug,
  getAllPages,
} from "@/lib/wordpress";
import { generateContentMetadata, stripHtml } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const [postSlugs, pages] = await Promise.all([
    getAllPostSlugs(),
    getAllPages(),
  ]);
  return [...postSlugs, ...pages.map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  if (post) {
    return generateContentMetadata({
      title: post.title.rendered,
      description: stripHtml(post.excerpt.rendered),
      slug: post.slug,
    });
  }

  const page = await getPageBySlug(slug);
  if (page) {
    const description = page.excerpt?.rendered
      ? stripHtml(page.excerpt.rendered)
      : stripHtml(page.content.rendered).slice(0, 200);
    return generateContentMetadata({
      title: page.title.rendered,
      description,
      slug: page.slug,
    });
  }

  return {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // ── Post ──────────────────────────────────────────────────────────
  const post = await getPostBySlug(slug);
  if (post) {
    const author = post._embedded?.author?.[0];
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
    const category = post._embedded?.["wp:term"]?.[0]?.[0];
    const tags = post._embedded?.["wp:term"]?.[1] ?? [];

    const date = new Date(post.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    // Reading time
    const wordCount = stripHtml(post.content.rendered)
      .split(/\s+/)
      .filter(Boolean).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    // Lead paragraph — styled separately as a standfirst
    const leadMatch = post.content.rendered.match(/<p(?:\s[^>]*)?>[\s\S]*?<\/p>/);
    const leadHtml = leadMatch?.[0] ?? null;
    const bodyHtml = leadHtml
      ? post.content.rendered.slice(leadMatch!.index! + leadHtml.length)
      : post.content.rendered;

    return (
      <article className="min-h-screen bg-[#f7f4f1]">

        {/* ── Dark hero with featured image as backdrop ── */}
        <section className="relative bg-[#181415] overflow-hidden min-h-[72vh] flex flex-col">

          {/* Featured image as darkened backdrop */}
          {featuredMedia?.source_url ? (
            <>
              <Image
                src={featuredMedia.source_url}
                alt={featuredMedia.alt_text || post.title.rendered}
                fill
                className="object-cover opacity-35"
                priority
                sizes="100vw"
              />
              {/* Gradient: dark at top (nav) and bottom (text) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181415] via-[#181415]/55 to-[#181415]/30" />
            </>
          ) : (
            /* No image — decorative blob */
            <>
              <div className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-[#ff2c00]/12 blur-[120px]" />
              <div className="pointer-events-none absolute bottom-0 -left-24 h-[400px] w-[400px] rounded-full bg-[#ff2c00]/6 blur-[100px]" />
            </>
          )}

          {/* Back nav */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 pt-10 w-full">
            <Link
              href="/posts"
              className="inline-flex items-center gap-1.5 font-sans text-[13px] text-white/40 hover:text-[#ff2c00] transition-colors group"
            >
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
              All Posts
            </Link>
          </div>

          {/* Spacer — pushes title to bottom */}
          <div className="flex-1" />

          {/* Title zone — anchored at bottom of hero */}
          <header className="relative z-10 max-w-4xl mx-auto px-6 pb-14 w-full">

            {/* Reading time + category row */}
            <div className="flex items-center gap-4 mb-5">
              {category && (
                <Link
                  href={`/posts?category=${category.id}`}
                  className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff2c00] inline-flex items-center gap-2"
                >
                  <span className="inline-block w-4 h-px bg-[#ff2c00]" />
                  {category.name}
                </Link>
              )}
              <span className="flex items-center gap-1.5 font-sans text-[11px] text-white/30">
                <Clock className="h-3 w-3" />
                {readingTime} min read
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-serif italic text-[clamp(2rem,4.5vw,3.8rem)] text-white leading-[1.1] mb-8"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Author + date */}
            <div className="flex items-center gap-3">
              {author?.avatar_urls?.["48"] && (
                <Image
                  src={author.avatar_urls["48"]}
                  alt={author.name ?? ""}
                  width={34}
                  height={34}
                  className="rounded-full ring-2 ring-white/15"
                />
              )}
              <div className="flex flex-wrap items-center gap-x-2 font-sans text-[13px] text-white/45">
                {author?.name && (
                  <>
                    <span className="font-medium text-white/65">{author.name}</span>
                    <span>·</span>
                  </>
                )}
                <time dateTime={post.date}>{date}</time>
              </div>
            </div>
          </header>
        </section>

        {/* ── Content ───────────────────────────────────────────────── */}
        <div className="bg-[#f7f4f1]">

          {/* Lead paragraph — standfirst */}
          {leadHtml && (
            <div className="max-w-2xl mx-auto px-6 pt-14 pb-2">
              <div
                className="font-serif italic text-[1.22rem] text-[#181415]/65 leading-[1.8] border-l-[3px] border-[#ff2c00]/30 pl-6"
                dangerouslySetInnerHTML={{ __html: leadHtml }}
              />
            </div>
          )}

          {/* Thin divider */}
          <div className="max-w-2xl mx-auto px-6 py-8">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#e8dfd8]" />
              <span className="text-[#ff2c00]/40 text-lg font-serif">✦</span>
              <div className="flex-1 h-px bg-[#e8dfd8]" />
            </div>
          </div>

          {/* Article body */}
          <div
            className="
              max-w-2xl mx-auto px-6 pb-16
              prose prose-lg
              prose-headings:font-serif prose-headings:italic prose-headings:text-[#181415] prose-headings:font-normal
              prose-h2:text-[1.85rem] prose-h2:mt-12 prose-h3:text-[1.4rem]
              prose-p:font-sans prose-p:text-[#181415]/70 prose-p:leading-[1.85]
              prose-a:text-[#ff2c00] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#181415] prose-strong:font-semibold
              prose-blockquote:border-l-[3px] prose-blockquote:border-[#ff2c00]/50 prose-blockquote:bg-white prose-blockquote:rounded-r-xl prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:not-italic prose-blockquote:shadow-sm
              prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-[#181415]/65 prose-blockquote:text-[1.1rem]
              prose-img:rounded-2xl prose-img:shadow-md prose-img:w-full
              prose-ul:font-sans prose-ol:font-sans
              prose-li:text-[#181415]/70
              prose-hr:border-[#e8dfd8]
              prose-code:text-[#ff2c00] prose-code:bg-[#ff2c00]/8 prose-code:rounded prose-code:px-1.5 prose-code:font-mono prose-code:text-sm
            "
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {/* Tags */}
          {tags.length > 0 && (
            <div className="max-w-2xl mx-auto px-6 pb-10 flex flex-wrap gap-2">
              {tags.map((tag: { id: number; name: string }) => (
                <Link
                  key={tag.id}
                  href={`/posts?tag=${tag.id}`}
                  className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#181415]/40 border border-[#e8dfd8] bg-white rounded-full px-3 py-1.5 hover:border-[#ff2c00]/40 hover:text-[#ff2c00] transition-all"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ── Footer nav ────────────────────────────────────────────── */}
        <div className="border-t border-[#e8dfd8] bg-white">
          <div className="max-w-2xl mx-auto px-6 py-10 flex items-center justify-between">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 font-sans text-sm text-[#181415]/40 hover:text-[#ff2c00] transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to blog
            </Link>
            {category && (
              <Link
                href={`/posts?category=${category.id}`}
                className="font-sans text-[11.5px] uppercase tracking-[0.18em] text-[#181415]/35 hover:text-[#ff2c00] transition-colors"
              >
                More in {category.name}
              </Link>
            )}
          </div>
        </div>
      </article>
    );
  }

  // ── Generic WP Page ───────────────────────────────────────────────
  const page = await getPageBySlug(slug);
  if (page) {
    return (
      <div className="min-h-screen bg-[#f7f4f1]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="font-serif italic text-[2.8rem] text-[#181415] leading-tight mb-10">
            {page.title.rendered}
          </h1>
          <div
            className="prose prose-lg prose-headings:font-serif prose-headings:italic prose-headings:text-[#181415] prose-headings:font-normal prose-p:font-sans prose-p:text-[#181415]/70 prose-a:text-[#ff2c00] prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </div>
      </div>
    );
  }

  notFound();
}
