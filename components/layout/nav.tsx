import Image from "next/image";
import { MobileNav } from "@/components/nav/mobile-nav";
import { mainMenu } from "@/menu.config";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function Nav({ className, children, id }: NavProps) {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-white/90 backdrop-blur-md border-b border-[#f0e9e3]/80 shadow-[0_1px_16px_rgba(24,20,21,0.06)]",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-6xl mx-auto h-[80px] px-6 flex justify-between items-center"
      >
        {/* Logo + Wordmark */}
        <Link
          className="group flex items-center gap-3.5 shrink-0"
          href="/"
        >
          <Image
            src="/eri-logo.png"
            alt=""
            width={72}
            height={72}
            className="object-contain shrink-0 group-hover:scale-[1.04] transition-transform duration-300"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-serif italic text-[1.2rem] tracking-[-0.015em] text-[#181415] group-hover:text-[#ff2c00] transition-colors duration-200">
              Eri in Germany
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#181415]/40 mt-[3px]">
              Frankfurt · Lifestyle
            </span>
          </div>
        </Link>

        {children}

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {Object.entries(mainMenu).map(([key, href]) => (
            <Link
              key={href}
              href={href}
              className="link-hover font-serif italic text-[15.5px] px-3.5 py-1.5 text-[#181415]/75 hover:text-[#181415] transition-colors duration-200"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
          <Link
            href="/pages/collaborate-with-eri-in-germany"
            className="ml-4 bg-[#181415] text-white font-sans text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#ff2c00] transition-all duration-300 shadow-sm hover:shadow-[0_4px_12px_rgba(255,44,0,0.35)] hover:scale-[1.02]"
          >
            Collaborate Now
          </Link>
        </div>

        {/* Mobile nav */}
        <MobileNav />
      </div>
    </nav>
  );
}
