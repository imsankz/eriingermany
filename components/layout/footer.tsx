import Image from "next/image";
import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#181415] text-white/80">
      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-[#ff2c00] via-[#ff6900] to-[#ff2c00]" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 grid md:grid-cols-[2fr_1fr_1fr] gap-12">
        {/* Brand column */}
        <div className="flex flex-col gap-5 max-w-xs">
          <Link href="/" className="group flex items-center gap-3 w-fit">
            <Image
              src="/eri-logo.png"
              alt="Eri in Germany"
              width={56}
              height={56}
              className="object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <span className="font-serif italic text-xl text-white group-hover:text-[#ff6900] transition-colors duration-200">
              Eri in Germany
            </span>
          </Link>

          <p className="font-sans text-[15px] text-white/55 leading-relaxed">
            {siteConfig.site_description}
          </p>

          {/* Social links */}
          <div className="flex gap-3 mt-1 flex-wrap">
            {[
              { label: "Twitter", href: "https://twitter.com/ertiqua" },
              { label: "Instagram", href: "https://www.instagram.com/ertiqua" },
              { label: "YouTube", href: "https://www.youtube.com/@EriInGermany" },
              { label: "Threads", href: "https://www.threads.com/@ertiqua" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[12px] uppercase tracking-[0.15em] text-white/45 hover:text-[#ff2c00] transition-colors duration-200 border border-white/10 rounded-full px-3 py-1.5 hover:border-[#ff2c00]/40"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mt-2 grid grid-cols-3 gap-4 pt-5 border-t border-white/10">
            {[
              { value: "194.3K", label: "Followers" },
              { value: "3.2%", label: "Engagement" },
              { value: "12+", label: "Brands" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-sans text-lg font-bold text-white">{value}</span>
                <span className="font-sans text-[11.5px] uppercase tracking-widest text-white/45">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h5 className="font-sans text-[12px] uppercase tracking-[0.18em] text-white/40 mb-4">
            Navigation
          </h5>
          {Object.entries(mainMenu).map(([key, href]) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-[15px] text-white/55 hover:text-[#ff6900] transition-colors duration-200 w-fit link-hover"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
        </div>

        {/* Work with me */}
        <div className="flex flex-col gap-2">
          <h5 className="font-sans text-[12px] uppercase tracking-[0.18em] text-white/40 mb-4">
            Work with me
          </h5>
          {[
            { label: "Collaborate", href: "/pages/collaborate-with-eri-in-germany" },
            { label: "Portfolio", href: "/pages/portfolio" },
            { label: "Media Kit", href: "https://beacons.ai/ertiqua/mediakit" },
            { label: "Categories", href: "/posts/categories" },
            { label: "Tags", href: "/posts/tags" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-sans text-[15px] text-white/55 hover:text-[#ff6900] transition-colors duration-200 w-fit link-hover"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-3">
          <p className="font-sans text-[13px] text-white/35">
            © {new Date().getFullYear()} Eri in Germany. All rights reserved.
          </p>
          <Link
            href="/pages/collaborate-with-eri-in-germany"
            className="font-sans text-[13px] text-[#ff2c00] hover:text-[#ff6900] transition-colors underline underline-offset-4"
          >
            Collaborate Now →
          </Link>
        </div>
      </div>
    </footer>
  );
}
