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
        "sticky z-50 top-0 bg-white/95 backdrop-blur-sm border-b border-[#f0e9e3]",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-6xl mx-auto py-4 px-6 flex justify-between items-center"
      >
        {/* Logo */}
        <Link className="hover:opacity-75 transition-all shrink-0" href="/">
          <span className="font-serif italic text-xl text-[#181415]">
            Eri in Germany
          </span>
        </Link>

        {children}

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {Object.entries(mainMenu).map(([key, href]) => (
            <Link
              key={href}
              href={href}
              className="font-serif italic text-[15px] px-3 py-1.5 text-[#181415] hover:text-[#ff2c00] transition-colors"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
          <Link
            href="/pages/collaborate-with-eri-in-germany"
            className="ml-3 bg-[#ff2c00] text-white font-sans text-sm px-5 py-2 rounded-full hover:bg-[#ff6900] transition-colors"
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
