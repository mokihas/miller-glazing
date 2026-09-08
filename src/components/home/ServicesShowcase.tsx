"use client"

import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { ArrowRight } from "lucide-react"

export function ServicesShowcase() {
  return (
    <section className="py-32 bg-background border-b border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3">
               <span className="w-8 h-[1px] bg-primary" />
               <span className="text-xs font-black tracking-[0.2em] uppercase text-primary">Miller Glazing Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase text-foreground">
              Bespoke Glass <br/>
              <span className="text-muted-foreground">Solutions.</span>
            </h2>
          </div>
          <Link href="/services" className="group flex items-center text-xs font-bold tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors">
            View All Services <ArrowRight className="ml-3 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-2 text-primary" />
          </Link>
        </div>
        
        {/* Products/Services Grid resembling "Mudroom Products" */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.slice(0, 4).map((service, index) => (
            <Link 
              key={service.id} 
              href={`/services/${service.slug}`}
              className="group relative flex flex-col bg-secondary/50 border border-border rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-0 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Simulated Image Placeholder */}
                <div className="w-full h-48 bg-muted rounded-lg mb-6 flex items-center justify-center overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  <span className="text-muted-foreground/50 font-black uppercase tracking-widest text-xl rotate-[-10deg] scale-110 group-hover:scale-125 transition-transform duration-700">GLAZING</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-sm border border-primary/20">
                    FEATURED
                  </span>
                  <span className="text-xs text-muted-foreground font-bold tracking-widest">0{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-black uppercase tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 font-medium">
                  {service.shortDescription}
                </p>
                
                <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-primary">
                  Explore <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
