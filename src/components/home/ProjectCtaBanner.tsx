"use client"

import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { CheckCircle2 } from "lucide-react"

export function ProjectCtaBanner() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="bg-secondary relative rounded-[2rem] overflow-hidden border border-border">
          {/* Decorative background grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-16">
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-2">
                <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-[10px]">✓</span>
                Ready To Build
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
                Have a Project <br/>
                <span className="text-primary">In Mind?</span>
              </h2>
              
              <div className="space-y-4">
                {[
                  "Premium Architectural Glazing",
                  "Commercial & Residential Expertise",
                  "Precision Engineering & Safety"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold uppercase tracking-wide text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Button size="lg" asChild className="w-full sm:w-auto h-14 px-10 text-sm font-black tracking-widest bg-primary text-primary-foreground hover:bg-orange-500 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]">
                  <Link href="/request-a-quote">SUBMIT REQUEST NOW</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:flex items-center justify-center">
              {/* Profile / Engineer Avatar Showcase */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                <div className="relative w-80 h-80 bg-background border border-border rounded-full flex flex-col items-center justify-center overflow-hidden shadow-2xl p-8 text-center">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                   <div className="w-20 h-20 bg-secondary rounded-full border border-border flex items-center justify-center mb-6 z-10">
                     <span className="text-3xl">👷</span>
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-widest text-foreground z-10 mb-2">Expert Consultation</h3>
                   <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest z-10">Speak with our glazing engineers today.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
