"use client"

import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden border-b border-border">
      {/* Stadium / Grid Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-muted/50 to-background pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 animate-fade-up">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center gap-3 bg-secondary/50 border border-border backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
             <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
               Bespoke Glazing in {siteConfig.city}
             </span>
          </div>
          
          <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-black leading-[0.95] tracking-tight uppercase text-foreground">
            Clarity In <br/>
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">Every Detail.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto uppercase tracking-wide">
            Elevating modern architecture through precision glass installation, bespoke residential mirrors, and imposing commercial facades.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button size="lg" asChild className="w-full sm:w-auto h-14 px-8 text-sm font-black tracking-widest bg-primary text-primary-foreground hover:bg-orange-500 hover:scale-105 transition-all duration-300">
              <Link href="/request-a-quote">EXPLORE SERVICES</Link>
            </Button>
            <Link href="/projects" className="group flex items-center gap-3 text-sm font-bold tracking-[0.1em] uppercase text-foreground hover:text-primary transition-colors">
              <span className="flex items-center justify-center w-14 h-14 rounded-full border border-border bg-secondary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <Play className="w-4 h-4 ml-1 text-primary" />
              </span>
              View Showreel
            </Link>
          </div>
          
          {/* Hero Google Rating Badge */}
          {siteConfig.reviews?.googleBusinessProfileUrl && siteConfig.reviews.googleBusinessProfileUrl !== "" && (
            <div className="mt-16 flex items-center justify-center gap-3 bg-secondary/40 backdrop-blur-md py-3 px-6 rounded-full border border-border w-fit mx-auto shadow-2xl">
              <div className="flex text-primary">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <span className="text-xs font-black text-foreground tracking-widest uppercase">
                {siteConfig.reviews.aggregateRating}/5 <span className="text-muted-foreground ml-1">({siteConfig.reviews.totalReviews} Reviews)</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
