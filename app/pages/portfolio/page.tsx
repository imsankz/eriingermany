import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, Camera, MapPin, Coffee, Gem, Video } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Eri in Germany",
  description: "Eri in Germany Portfolio. As a passionate lifestyle and travel creator, I've dedicated myself to crafting authentic UGC content.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-muted/50 to-background border-b">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-8 backdrop-blur-sm bg-primary/5">
            <Star className="mr-2 h-4 w-4" /> Lifestyle & Travel Creator
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Eri in Germany Portfolio
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            As a passionate lifestyle and travel creator, I’ve dedicated myself to crafting authentic UGC content because my audience values my recommendations. Explore this portfolio to discover the essence of my work.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 border-b overflow-hidden bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-foreground mb-10">Brands I’ve Collaborated With</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Dji-Logo.png" alt="DJI" width={100} height={100} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Kodak-Logo-1.png" alt="Kodak" width={120} height={100} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Get-Your-Guide-Logo-1.png" alt="Get Your Guide" width={120} height={100} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Songmics-Logo.png" alt="Songmics" width={120} height={100} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Nivea-Logo.png" alt="Nivea" width={100} height={100} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Fussy-Logo.png" alt="Fussy" width={100} height={100} className="object-contain" />
          </div>
        </div>
      </section>

      {/* Life in Germany (YouTube) */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 flex items-center">
            <Video className="mr-4 h-8 w-8 text-primary" /> Life in Germany
          </h2>
          <p className="text-lg text-muted-foreground">My everyday lifestyle in Germany as an Indian working & living abroad.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {[
            "GMQIxigMam4", "ob7W-P1eH7c", "4Dslw94Jf0I", 
            "n7R7M1WyRWE", "LUBldQc8ITE", "3Z_xLabd98E"
          ].map((id) => (
            <div key={id} className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-foreground/10 bg-muted">
              <iframe 
                src={`https://www.youtube.com/embed/${id}?rel=0`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Diverse Moments (Bento Grid) */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 flex items-center justify-center">
              <Camera className="mr-4 h-8 w-8 text-primary" /> Capturing Life’s Diverse Moments
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-[400px]">
            {/* Travel */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg lg:col-span-2 ring-1 ring-foreground/10">
              <Image 
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/05/DSC02674-1024x683.jpg" 
                alt="Travel & Activities" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center text-white/80 mb-3 text-sm font-medium uppercase tracking-wider">
                  <MapPin className="mr-2 h-4 w-4" /> Travel & Activities
                </div>
                <h3 className="text-2xl font-bold text-white">Strasbourg & beyond</h3>
              </div>
            </div>

            {/* Food */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg ring-1 ring-foreground/10">
              <Image 
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2024/03/DSC04107-683x1024.jpg" 
                alt="Local Culture & Food" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center text-white/80 mb-3 text-sm font-medium uppercase tracking-wider">
                  <Coffee className="mr-2 h-4 w-4" /> Culture & Food
                </div>
                <h3 className="text-2xl font-bold text-white">Local flavors</h3>
              </div>
            </div>

            {/* Jewellery */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg lg:col-span-3 h-[400px] ring-1 ring-foreground/10">
              <Image 
                src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2023/08/DSC00308-683x1024.jpg" 
                alt="Jewellery" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="flex items-center text-white/80 mb-3 text-sm font-medium uppercase tracking-wider">
                  <Gem className="mr-2 h-4 w-4" /> Jewellery & Fashion
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">Premium aesthetics for everyday elegance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <Heart className="mx-auto h-12 w-12 text-primary/40 mb-8" />
        <blockquote className="text-2xl sm:text-4xl font-medium italic leading-relaxed text-foreground">
          “Unveiling the World, One Story at a Time – Embracing Life’s Journey through the Lens”
        </blockquote>
        <div className="mt-8 text-lg font-semibold text-muted-foreground">— Eri in Germany</div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t bg-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Ready to create together?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring authentic stories and premium UGC to your brand.
          </p>
          <Link 
            href="/pages/collaborate-with-eri-in-germany" 
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Collaborate Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
