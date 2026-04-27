import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Camera, Smartphone, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Eri in Germany",
  description: "Collaboration & Services. I help businesses grow their online presence through strategy driven visuals and social media campaigns.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-muted/50 to-background border-b">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-8 backdrop-blur-sm bg-primary/5">
            <Sparkles className="mr-2 h-4 w-4" /> Grow Your Brand
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Collaboration & Services
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            I help businesses grow their online presence through strategy-driven visuals, storytelling, and impactful social media campaigns. Let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 border-b overflow-hidden bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-foreground mb-10">Brands I’ve Collaborated With</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Dji-Logo.png" alt="DJI" width={100} height={80} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Kodak-Logo-1.png" alt="Kodak" width={110} height={80} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Get-Your-Guide-Logo-1.png" alt="Get Your Guide" width={110} height={80} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Songmics-Logo.png" alt="Songmics" width={110} height={80} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Nivea-Logo.png" alt="Nivea" width={90} height={80} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/07/Fussy-Logo.png" alt="Fussy" width={90} height={80} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/Vahdam-Logo.png" alt="Vahdam" width={110} height={80} className="object-contain" />
             <Image src="https://ersw66et6uc.exactdn.com/wp-content/uploads/2025/02/TRS-Logo-1.png" alt="TRS" width={100} height={80} className="object-contain" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            How I can help your business grow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From comprehensive strategy to authentic UGC, I provide full-stack creative services for modern brands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="rounded-3xl border bg-card text-card-foreground shadow-sm p-8 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Social Media Management & Growth Strategy</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0" /> Plan and post on Instagram, Facebook, and TikTok</li>
              <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0" /> Create a clear, actionable content calendar</li>
              <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0" /> Track results and audience engagement</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="rounded-3xl border bg-card text-card-foreground shadow-sm p-8 hover:shadow-md transition-shadow ring-1 ring-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Camera className="w-32 h-32" />
            </div>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 relative z-10">
              <Camera className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 relative z-10">Content Creation & Consultation</h3>
            <ul className="space-y-3 text-muted-foreground relative z-10">
              <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0" /> Produce high-quality videos and photos</li>
              <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0" /> Share your unique brand story</li>
              <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0" /> Comprehensive review of current social media pages</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="rounded-3xl border bg-card text-card-foreground shadow-sm p-8 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">UGC – User Generated Content</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0" /> Create real, natural, and authentic videos</li>
              <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0" /> Build trust with your target audience</li>
              <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-primary shrink-0" /> Ideal for performance ads and social media posts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Reels Section */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Featured Campaigns & Reels
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "DTP61wACIBN", "DT7uSukiCsQ", "DUrmWmhCFVI", "DMNq6QlK3HG", "DT5syL9CBi8"
            ].map((id) => (
              <div key={id} className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-foreground/10 bg-black">
                <iframe 
                  src={`https://www.instagram.com/reel/${id}/embed`}
                  allow="encrypted-media"
                  className="absolute inset-0 w-full h-[calc(100%+40px)] -top-[20px] border-0"
                  scrolling="no"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden text-center mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Let’s build your online presence</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Partner with Eri in Germany to showcase your brand to a global audience. Whether it’s content creation, collaboration, or exclusive features, let’s create something amazing together. Reach out today! 🚀
        </p>
        <Link 
          href="/pages/contact" 
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
        >
          Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
