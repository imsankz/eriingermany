"use client";

import { Search } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchInput({ defaultValue }: { defaultValue?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#181415]/35 pointer-events-none" />
      <input
        type="text"
        name="search"
        placeholder="Search posts…"
        defaultValue={defaultValue}
        onChange={(e) => handleSearch(e.target.value)}
        className="font-sans w-full rounded-xl border border-[#f0e9e3] bg-white pl-11 pr-4 py-3 text-sm text-[#181415] placeholder:text-[#181415]/35 outline-none focus:border-[#ff2c00]/40 focus:ring-2 focus:ring-[#ff2c00]/10 transition-all"
      />
    </div>
  );
}
