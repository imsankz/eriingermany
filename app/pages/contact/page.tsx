import { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, MapPin, ArrowRight, Instagram, Youtube, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Eri in Germany",
  description: "Contact the Social Media Expert. Hi, I’m Eri — a content creator and social media manager based in Frankfurt, Germany.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-muted/50 to-background border-b">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-8 backdrop-blur-sm bg-primary/5">
            <MessageSquare className="mr-2 h-4 w-4" /> Get in Touch
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Contact the Social Media Expert
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            Hi, I’m Eri — a content creator and social media manager based in Frankfurt, Germany. I’ve helped small businesses grow their online presence through strategy-driven visuals, storytelling, and social media campaigns.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Have a question or need social media guidance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let’s chat! Whether you’re a small business owner or a brand looking to grow online. I’m here to help with content ideas, strategy, and engagement tips. Fill out the contact form, and I’ll get back to you soon. Let’s build your online presence together!
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Business Inquiries</h3>
                  <a href="mailto:contact@eriingermany.com" className="text-primary hover:underline text-lg">
                    contact@eriingermany.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-lg">Frankfurt, Germany</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t">
              <h3 className="text-xl font-bold mb-6">Connect with me</h3>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@EriInGermany" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm border">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/ertiqua/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm border">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/ertiqua" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm border">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card rounded-3xl p-8 sm:p-10 shadow-lg border relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <MessageSquare className="w-64 h-64" />
            </div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Send a Message</h3>
            <form className="space-y-6 relative z-10" action="#">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-full border bg-background px-6 py-3 text-base outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-full border bg-background px-6 py-3 text-base outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                  placeholder="hello@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full rounded-full border bg-background px-6 py-3 text-base outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full rounded-3xl border bg-background px-6 py-4 text-base outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" 
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>

    </div>
  );
}
