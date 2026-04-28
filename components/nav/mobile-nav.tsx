"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight } from "lucide-react";
import { mainMenu, contentMenu } from "@/menu.config";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger — two asymmetric bars */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex flex-col gap-[5px] items-end justify-center w-10 h-10 group"
        aria-label="Open menu"
      >
        <span className="block w-5 h-[1.5px] bg-[#181415]/70 group-hover:bg-[#ff2c00] transition-all duration-200 group-hover:w-6" />
        <span className="block w-3.5 h-[1.5px] bg-[#181415]/70 group-hover:bg-[#ff2c00] transition-all duration-200 group-hover:w-6" />
      </button>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[#181415] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 shrink-0">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5"
          >
            <Image
              src="/eri-logo.png"
              alt="Eri in Germany"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-serif italic text-white text-[1rem]">
              Eri in Germany
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Thin rule */}
        <div
          className="h-px mx-6 bg-white/10 transition-all duration-300"
          style={{ opacity: open ? 1 : 0, transitionDelay: open ? "80ms" : "0ms" }}
        />

        {/* Main links — editorial large type */}
        <nav className="flex-1 flex flex-col justify-center px-7 gap-0">
          {Object.entries(mainMenu).map(([key, href], i) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between font-serif italic leading-[1.1] py-[14px] border-b border-white/[0.07] transition-all duration-500 ${
                  isActive
                    ? "text-[#ff2c00]"
                    : "text-white/70 hover:text-white"
                } ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{
                  fontSize: "clamp(2rem, 8vw, 2.6rem)",
                  transitionDelay: open ? `${100 + i * 55}ms` : "0ms",
                }}
              >
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <ArrowUpRight
                  className={`h-5 w-5 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ${
                    isActive ? "opacity-50 translate-x-0" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div
          className={`px-6 pb-8 pt-5 shrink-0 transition-all duration-500 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: open ? "420ms" : "0ms" }}
        >
          {/* Secondary links */}
          <div className="flex items-center gap-5 mb-5">
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/collaborate-with-eri-in-germany"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#ff2c00] text-white font-sans font-semibold text-sm px-6 py-4 rounded-full hover:bg-[#e52900] transition-all duration-200 shadow-lg shadow-[#ff2c00]/20"
          >
            Collaborate Now
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Social */}
          <div className="mt-5 flex justify-center gap-5">
            {[
              { label: "Instagram", href: "https://www.instagram.com/ertiqua" },
              { label: "YouTube", href: "https://www.youtube.com/@EriInGermany" },
              { label: "Twitter", href: "https://twitter.com/ertiqua" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/22 hover:text-white/55 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
