"use client";

import Image from "next/image";
import { MobileNav } from "@/components/nav/mobile-nav";
import { NavLinks } from "@/components/nav/NavLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function Nav({ className, children, id }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "h-[64px] bg-[#fffcfa]/93 backdrop-blur-xl border-b border-[#e8dfd8]/60 shadow-[0_2px_28px_rgba(24,20,21,0.06)]"
          : "h-[80px] bg-[#fffcfa]/72 backdrop-blur-sm",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center"
      >
        <Link className="group flex items-center gap-3 shrink-0" href="/">
          <div
            className={cn(
              "relative transition-all duration-300",
              scrolled ? "w-[38px] h-[38px]" : "w-[46px] h-[46px]"
            )}
          >
            <Image
              src="/eri-logo.png"
              alt=""
              fill
              className="object-contain group-hover:scale-[1.05] transition-transform duration-300"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-serif italic text-[1.12rem] tracking-[-0.01em] text-[#181415] group-hover:text-[#ff2c00] transition-colors duration-200">
              Eri in Germany
            </span>
            <span
              className={cn(
                "font-sans text-[8.5px] uppercase tracking-[0.26em] text-[#181415]/35 transition-all duration-300 overflow-hidden",
                scrolled ? "opacity-0 max-h-0" : "opacity-100 max-h-4 mt-[3px]"
              )}
            >
              Frankfurt · Lifestyle
            </span>
          </div>
        </Link>

        {children}
        <NavLinks />
        <MobileNav />
      </div>
    </nav>
  );
}
