"use client"

import { siteConfig } from "@/config/siteConfig"
import { CheckCircle2 } from "lucide-react"

export function CraftsmanshipSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Craftsmanship Focus */}
          <div className="bg-secondary/40 border border-border rounded-3xl p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-background border border-border px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-black tracking-[0.2em] uppercase text-foreground">Bespoke Engineering</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6 leading-none">
                Precision in <br/>
                <span className="text-primary">Manufacturing.</span>
              </h2>
              
              <p className="text-muted-foreground font-medium mb-10 max-w-md">
                Every pane of glass is custom-cut, toughened, and engineered to meet the exact tolerances of your architectural vision.
              </p>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
              {[
                "Safety Toughened",
                "Thermal Insulation",
                "Custom Cutting",
                "10-Year Warranty"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold uppercase tracking-wide text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Card: Interactive Preview Simulation */}
          <div className="bg-primary border border-primary/50 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end min-h-[400px] lg:min-h-full">
            {/* Background Image / Texture */}
            <div className="absolute inset-0 bg-black/20 z-0"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0"></div>
            
            {/* Mock Floating Spec Cards */}
            <div className="absolute top-8 right-8 z-10 bg-background/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl transform rotate-3">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Thickness</p>
              <p className="text-xl font-black text-foreground">12.5mm</p>
            </div>
            
            <div className="absolute top-32 left-8 z-10 bg-background/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl transform -rotate-2">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Rating</p>
              <p className="text-xl font-black text-foreground">A++ Energy</p>
            </div>
            
            <div className="relative z-10 mt-auto bg-background/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-black uppercase tracking-widest text-foreground">Acoustic Glazing</h4>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-black">PREMIUM</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Engineered for maximum sound reduction in urban environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
