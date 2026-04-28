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
import { ArrowLeft } from "lucide-react";
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

    return (
      <article className="min-h-screen bg-[#fffcfa]">

        {/* Back nav */}
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <Link
            href="/posts"
            className="inline-flex items-center gap-1.5 font-sans text-[13px] text-[#181415]/40 hover:text-[#ff2c00] transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
            All Posts
          </Link>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 pt-8 pb-12">
          {category && (
            <Link
              href={`/posts?category=${category.id}`}
              className="font-sans text-[11.5px] uppercase tracking-[0.22em] text-[#ff2c00] mb-5 inline-flex items-center gap-2"
            >
              <span className="inline-block w-5 h-px bg-[#ff2c00]" />
              {category.name}
            </Link>
          )}

          <h1
            className="font-serif italic text-[clamp(2.2rem,4.5vw,4rem)] text-[#181415] leading-[1.1] mt-4 mb-8"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="flex items-center gap-3">
            {author?.avatar_urls?.["48"] && (
              <Image
                src={author.avatar_urls["48"]}
                alt={author.name ?? ""}
                width={36}
                height={36}
                className="rounded-full ring-2 ring-[#f0e9e3]"
              />
            )}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-sans text-[13.5px] text-[#181415]/50">
              {author?.name && (
                <>
                  <span className="font-medium text-[#181415]/70">
                    {author.name}
                  </span>
                  <span>·</span>
                </>
              )}
              <time dateTime={post.date}>{date}</time>
            </div>
          </div>
        </header>

        {/* Featured image — slightly wider than prose */}
        {featuredMedia?.source_url && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-14">
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl shadow-[#181415]/8">
              <Image
                src={featuredMedia.source_url}
                alt={featuredMedia.alt_text || post.title.rendered}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </div>
        )}

        {/* Article content */}
        <div
          className="
            max-w-2xl mx-auto px-6 pb-20
            prose prose-lg
            prose-headings:font-serif prose-headings:italic prose-headings:text-[#181415] prose-headings:font-normal
            prose-h2:text-[1.85rem] prose-h3:text-[1.4rem]
            prose-p:font-sans prose-p:text-[#181415]/72 prose-p:leading-[1.85]
            prose-a:text-[#ff2c00] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#181415] prose-strong:font-semibold
            prose-blockquote:border-l-[3px] prose-blockquote:border-[#ff2c00]/40 prose-blockquote:bg-[#f7f4f1] prose-blockquote:rounded-r-xl prose-blockquote:px-6 prose-blockquote:py-1 prose-blockquote:not-italic
            prose-blockquote:font-serif prose-blockquote:text-[#181415]/65 prose-blockquote:text-[1.1rem]
            prose-img:rounded-2xl prose-img:shadow-md prose-img:w-full
            prose-ul:font-sans prose-ol:font-sans
            prose-li:text-[#181415]/70
            prose-hr:border-[#f0e9e3]
            prose-code:text-[#ff2c00] prose-code:bg-[#ff2c00]/8 prose-code:rounded prose-code:px-1 prose-code:font-mono prose-code:text-sm
          "
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Tags */}
        {tags.length > 0 && (
          <div className="max-w-2xl mx-auto px-6 pb-8 flex flex-wrap gap-2">
            {tags.map((tag: { id: number; name: string }) => (
              <Link
                key={tag.id}
                href={`/posts?tag=${tag.id}`}
                className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#181415]/40 border border-[#f0e9e3] rounded-full px-3 py-1 hover:border-[#ff2c00]/40 hover:text-[#ff2c00] transition-all"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        )}

        {/* Footer nav */}
        <div className="border-t border-[#f0e9e3]">
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
      <div className="min-h-screen bg-[#fffcfa]">
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
