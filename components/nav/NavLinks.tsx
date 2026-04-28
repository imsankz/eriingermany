"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useCallback } from "react";
import { mainMenu } from "@/menu.config";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });

  const updatePill = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const cr = container.getBoundingClientRect();
    const er = e.currentTarget.getBoundingClientRect();
    setPill({ left: er.left - cr.left, width: er.width, visible: true });
  }, []);

  const hidePill = useCallback(() => {
    setPill((p) => ({ ...p, visible: false }));
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden md:flex items-center gap-0.5 relative"
      onMouseLeave={hidePill}
    >
      {/* Morphing hover pill */}
      <span
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full bg-[#181415]/[0.055] transition-all duration-200 pointer-events-none"
        style={{
          left: pill.left,
          width: pill.width,
          opacity: pill.visible ? 1 : 0,
        }}
      />

      {Object.entries(mainMenu).map(([key, href]) => {
        const isActive =
          pathname === href || (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            onMouseEnter={updatePill}
            className={cn(
              "relative font-serif italic text-[15px] px-4 py-2 rounded-full transition-colors duration-150 z-10 select-none",
              isActive
                ? "text-[#ff2c00]"
                : "text-[#181415]/58 hover:text-[#181415]"
            )}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
            {isActive && (
              <span className="absolute bottom-[5px] left-4 right-4 h-[1.5px] bg-[#ff2c00]/55 rounded-full" />
            )}
          </Link>
        );
      })}

      <Link
        href="/collaborate-with-eri-in-germany"
        className="relative z-10 ml-2 inline-flex items-center font-sans text-[13px] font-semibold px-5 py-2.5 rounded-full bg-[#181415] text-white hover:bg-[#ff2c00] transition-all duration-300 shadow-sm hover:shadow-[0_4px_14px_rgba(255,44,0,0.28)] hover:scale-[1.02]"
      >
        Collaborate
      </Link>
    </div>
  );
}
