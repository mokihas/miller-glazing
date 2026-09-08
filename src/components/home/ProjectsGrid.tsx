"use client"

import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { ArrowUpRight } from "lucide-react"

export function ProjectsGrid() {
  return (
    <section className="py-32 bg-muted/30 border-y border-border relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
           <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-foreground mb-4">
              Featured <br/> <span className="text-primary">Installations.</span>
            </h2>
            <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">
              Explore our portfolio of architectural glazing masterpieces.
            </p>
          </div>
          <Link href="/projects" className="group flex items-center text-xs font-bold tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors bg-background border border-border px-6 py-3 rounded-full">
            View Gallery <ArrowUpRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-primary" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.projects.slice(0, 4).map((project) => (
            <Link 
              key={project.id} 
              href={`/projects`}
              className="group relative block aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
            >
              {/* Fallback pattern for project image */}
              <div className="absolute inset-0 bg-secondary group-hover:scale-105 transition-transform duration-700 ease-in-out">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-sm shadow-lg">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-2 drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground/90 line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
              </div>
              
              <div className="absolute top-6 right-6 w-12 h-12 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 border border-white/10">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
