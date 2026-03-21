import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#f0e9e3]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-[2fr_1fr_1fr] gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <Link href="/">
            <span className="font-serif italic text-2xl text-[#181415]">
              Eri in Germany
            </span>
          </Link>
          <p className="font-sans text-sm text-[#181415]/55 leading-relaxed">
            {siteConfig.site_description}
          </p>
          <div className="flex gap-4 mt-1">
            <a
              href="https://twitter.com/ertiqua"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs uppercase tracking-widest text-[#181415]/40 hover:text-[#ff2c00] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/eriingermany"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs uppercase tracking-widest text-[#181415]/40 hover:text-[#ff2c00] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@eriingermany"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs uppercase tracking-widest text-[#181415]/40 hover:text-[#ff2c00] transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h5 className="font-sans text-xs uppercase tracking-[0.2em] text-[#181415] mb-3">
            Navigation
          </h5>
          {Object.entries(mainMenu).map(([key, href]) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-sm text-[#181415]/55 hover:text-[#ff2c00] transition-colors"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
        </div>

        {/* Work */}
        <div className="flex flex-col gap-2">
          <h5 className="font-sans text-xs uppercase tracking-[0.2em] text-[#181415] mb-3">
            Work with me
          </h5>
          <Link
            href="/pages/collaborate-with-eri-in-germany"
            className="font-sans text-sm text-[#181415]/55 hover:text-[#ff2c00] transition-colors"
          >
            Collaborate
          </Link>
          <Link
            href="/pages/portfolio"
            className="font-sans text-sm text-[#181415]/55 hover:text-[#ff2c00] transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/posts/categories"
            className="font-sans text-sm text-[#181415]/55 hover:text-[#ff2c00] transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/posts/tags"
            className="font-sans text-sm text-[#181415]/55 hover:text-[#ff2c00] transition-colors"
          >
            Tags
          </Link>
        </div>
      </div>

      <div className="border-t border-[#181415]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <p className="font-sans text-xs text-[#181415]/35">
            &copy; {new Date().getFullYear()} Eri in Germany. All rights
            reserved.
          </p>
          <Link
            href="/pages/collaborate-with-eri-in-germany"
            className="font-sans text-xs text-[#ff2c00] hover:underline underline-offset-4"
          >
            Collaborate Now →
          </Link>
        </div>
      </div>
    </footer>
  );
}
