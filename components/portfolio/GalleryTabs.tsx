"use client";

import Image from "next/image";
import { useState } from "react";
import { Globe, MapPin, Utensils, Shirt, Tag } from "lucide-react";

type Category = "All" | "Travel" | "Food & Culture" | "Fashion" | "Brand Collabs";

const CDN = "https://ersw66et6uc.exactdn.com/wp-content/uploads";

const GALLERY: { src: string; alt: string; category: Exclude<Category, "All"> }[] = [
  // Travel
  { src: `${CDN}/2023/05/DSC02674-scaled.jpg`, alt: "Strasbourg streets", category: "Travel" },
  { src: `${CDN}/2023/05/DSC02059-scaled.jpg`, alt: "Europe exploration", category: "Travel" },
  { src: `${CDN}/2023/07/DSC03612-scaled.jpg`, alt: "City adventure", category: "Travel" },
  { src: `${CDN}/2023/08/DSC01228-scaled.jpg`, alt: "Weekend getaway", category: "Travel" },
  { src: `${CDN}/2023/08/DSC01191-scaled.jpg`, alt: "German countryside", category: "Travel" },
  { src: `${CDN}/2023/08/DSC00561-scaled.jpg`, alt: "Hidden gems", category: "Travel" },
  { src: `${CDN}/2023/08/DSC00482-scaled.jpg`, alt: "Summer in Europe", category: "Travel" },
  { src: `${CDN}/2023/05/IMG_1517-scaled.jpg`, alt: "Travel moments", category: "Travel" },
  // Food & Culture
  { src: `${CDN}/2024/03/DSC04107-683x1024.jpg`, alt: "Local food culture", category: "Food & Culture" },
  { src: `${CDN}/2025/06/IMG_1443-scaled.jpg`, alt: "Fresh ingredients", category: "Food & Culture" },
  { src: `${CDN}/2025/06/IMG_1442-scaled.jpg`, alt: "Market finds", category: "Food & Culture" },
  { src: `${CDN}/2025/06/IMG_1438-scaled.jpg`, alt: "Frankfurt food scene", category: "Food & Culture" },
  { src: `${CDN}/2025/06/IMG_1437-scaled.jpg`, alt: "Street food", category: "Food & Culture" },
  { src: `${CDN}/2025/06/IMG_1090-scaled.jpg`, alt: "Café culture", category: "Food & Culture" },
  { src: `${CDN}/2025/06/IMG_1088-scaled.jpg`, alt: "German cuisine", category: "Food & Culture" },
  { src: `${CDN}/2023/08/IMG_9354-scaled.jpg`, alt: "Food stories", category: "Food & Culture" },
  // Fashion
  { src: `${CDN}/2023/08/DSC00308-scaled.jpg`, alt: "Jewellery & elegance", category: "Fashion" },
  { src: `${CDN}/2023/08/DSC00284-scaled.jpg`, alt: "Everyday style", category: "Fashion" },
  { src: `${CDN}/2023/08/DSC00289-scaled.jpg`, alt: "Statement pieces", category: "Fashion" },
  { src: `${CDN}/2023/08/DSC00299-scaled.jpg`, alt: "Lifestyle look", category: "Fashion" },
  { src: `${CDN}/2023/08/DSC00332-scaled.jpg`, alt: "Fashion detail", category: "Fashion" },
  { src: `${CDN}/2023/08/DSC00369-scaled.jpg`, alt: "Outfit of the day", category: "Fashion" },
  { src: `${CDN}/2023/08/IMG_7228-2-scaled.jpg`, alt: "Street style", category: "Fashion" },
  { src: `${CDN}/2023/08/IMG_7545-2-scaled.jpg`, alt: "Fashion moments", category: "Fashion" },
  { src: `${CDN}/2023/07/IMG_1622-2-scaled.jpg`, alt: "Summer wardrobe", category: "Fashion" },
  { src: `${CDN}/2021/06/IMG_7846.jpg`, alt: "Classic elegance", category: "Fashion" },
  // Brand Collabs
  { src: `${CDN}/2025/03/Origin-Mattress-x-Eri-in-Germany5-scaled.jpg`, alt: "Origin Mattress campaign", category: "Brand Collabs" },
  { src: `${CDN}/2025/03/Origin-Mattress-x-Eri-in-Germany4-scaled.jpg`, alt: "Origin Mattress collab", category: "Brand Collabs" },
  { src: `${CDN}/2023/05/DSC02674-scaled.jpg`, alt: "DJI × Eri in Germany", category: "Brand Collabs" },
  { src: `${CDN}/2024/03/DSC04107-683x1024.jpg`, alt: "GetYourGuide collaboration", category: "Brand Collabs" },
  { src: `${CDN}/2023/08/DSC00308-scaled.jpg`, alt: "Kodak × Eri in Germany", category: "Brand Collabs" },
  { src: `${CDN}/2025/06/IMG_1443-edited-scaled.jpg`, alt: "Nivea UGC content", category: "Brand Collabs" },
];

const TABS: { label: Category; icon: React.ElementType }[] = [
  { label: "All", icon: Globe },
  { label: "Travel", icon: MapPin },
  { label: "Food & Culture", icon: Utensils },
  { label: "Fashion", icon: Shirt },
  { label: "Brand Collabs", icon: Tag },
];

const ASPECTS = ["aspect-[4/5]", "aspect-[3/4]", "aspect-square", "aspect-[3/4]", "aspect-[4/5]"];

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const filtered = activeTab === "All" ? GALLERY : GALLERY.filter((p) => p.category === activeTab);

  return (
    <>
      {/* Tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {TABS.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`font-sans inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              activeTab === label
                ? "bg-[#181415] border-[#181415] text-white shadow-sm"
                : "border-[#181415]/15 text-[#181415]/65 hover:border-[#ff2c00] hover:text-[#ff2c00] bg-white"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {filtered.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className={`group relative overflow-hidden rounded-2xl bg-[#f0e9e3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${ASPECTS[i % ASPECTS.length]}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181415]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="font-sans text-[11px] uppercase tracking-widest text-white/70">{photo.category}</span>
              <p className="font-serif italic text-sm text-white mt-0.5">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
