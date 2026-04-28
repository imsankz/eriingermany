import {
  getPostsPaginated,
  getAllAuthors,
  getAllTags,
  getAllCategories,
  searchAuthors,
  searchTags,
  searchCategories,
} from "@/lib/wordpress";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { PostCard } from "@/components/posts/post-card";
import { FilterPosts } from "@/components/posts/filter";
import { SearchInput } from "@/components/posts/search-input";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, guides and tips about expat life in Germany — from Frankfurt and beyond.",
};

export const dynamic = "auto";
export const revalidate = 3600;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    author?: string;
    tag?: string;
    category?: string;
    page?: string;
    search?: string;
  }>;
}) {
  const params = await searchParams;
  const { author, tag, category, page: pageParam, search } = params;

  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const postsPerPage = 9;

  const [postsResponse, authors, tags, categories] = await Promise.all([
    getPostsPaginated(page, postsPerPage, { author, tag, category, search }),
    search ? searchAuthors(search) : getAllAuthors(),
    search ? searchTags(search) : getAllTags(),
    search ? searchCategories(search) : getAllCategories(),
  ]);

  const { data: posts, headers } = postsResponse;
  const { total, totalPages } = headers;

  const createPaginationUrl = (newPage: number) => {
    const p = new URLSearchParams();
    if (newPage > 1) p.set("page", newPage.toString());
    if (category) p.set("category", category);
    if (author) p.set("author", author);
    if (tag) p.set("tag", tag);
    if (search) p.set("search", search);
    return `/posts${p.toString() ? `?${p.toString()}` : ""}`;
  };

  return (
    <div className="min-h-screen bg-[#f7f4f1]">

      {/* Header */}
      <section className="relative overflow-hidden bg-[#f7f4f1] pt-20 pb-14 border-b border-[#f0e9e3]">
        <div className="pointer-events-none absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-[#ff2c00]/6 blur-[100px]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-[#ff2c00] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#ff2c00]" />
            Frankfurt · Germany
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h1 className="font-serif italic text-[clamp(3.2rem,6vw,5.5rem)] text-[#181415] leading-[1.02]">
              From the blog
            </h1>
            <p className="font-sans text-[14px] text-[#181415]/45 pb-1">
              {total} {total === 1 ? "post" : "posts"}
              {search ? " matching your search" : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[64px] z-30 bg-white/90 backdrop-blur-md border-b border-[#f0e9e3]">
        <div className="max-w-6xl mx-auto px-6 py-3 space-y-3">
          <SearchInput defaultValue={search} />
          <FilterPosts
            authors={authors}
            tags={tags}
            categories={categories}
            selectedAuthor={author}
            selectedTag={tag}
            selectedCategory={category}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        {posts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="font-serif italic text-[1.4rem] text-[#181415]/40 mb-2">
              No posts found.
            </p>
            <p className="font-sans text-sm text-[#181415]/30">
              Try a different search or clear the filters.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center pt-16">
            <Pagination>
              <PaginationContent>
                {page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious href={createPaginationUrl(page - 1)} />
                  </PaginationItem>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(
                    (n) =>
                      n === 1 || n === totalPages || Math.abs(n - page) <= 1
                  )
                  .map((n, idx, arr) => {
                    const ellipsis = idx > 0 && n - arr[idx - 1] > 1;
                    return (
                      <div key={n} className="flex items-center">
                        {ellipsis && (
                          <span className="px-2 font-sans text-sm text-[#181415]/40">
                            …
                          </span>
                        )}
                        <PaginationItem>
                          <PaginationLink
                            href={createPaginationUrl(n)}
                            isActive={n === page}
                          >
                            {n}
                          </PaginationLink>
                        </PaginationItem>
                      </div>
                    );
                  })}
                {page < totalPages && (
                  <PaginationItem>
                    <PaginationNext href={createPaginationUrl(page + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
