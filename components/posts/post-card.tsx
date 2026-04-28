import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/wordpress.d";

export function PostCard({ post }: { post: Post }) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0] ?? null;
  const category = post._embedded?.["wp:term"]?.[0]?.[0] ?? null;
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/posts/${post.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f0e9e3] mb-4 shadow-sm">
        {media?.source_url ? (
          <Image
            src={media.source_url}
            alt={media.alt_text || post.title?.rendered || "Post image"}
            fill
            className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-[#f0e9e3]" />
        )}
        <div className="absolute inset-0 bg-[#ff2c00]/0 group-hover:bg-[#ff2c00]/6 transition-colors duration-300" />
      </div>

      {category && (
        <span className="font-sans text-[11.5px] uppercase tracking-[0.18em] text-[#ff2c00] mb-1.5">
          {category.name}
        </span>
      )}
      <h3
        className="font-serif italic text-[1.1rem] text-[#181415] leading-snug mb-2 group-hover:text-[#ff2c00] transition-colors duration-200 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: post.title?.rendered || "Untitled" }}
      />
      <p className="font-sans text-[12px] text-[#181415]/40 mt-auto">{date}</p>
    </Link>
  );
}
