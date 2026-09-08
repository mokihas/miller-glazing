"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, Menu, X, MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:-rotate-6 transition-transform">
             <span className="text-primary-foreground font-black text-xl">M</span>
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase text-foreground">
            Miller<span className="text-primary">Glazing</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-[12px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href={`tel:${siteConfig.phone}`} className="flex items-center text-xs font-black uppercase tracking-widest hover:text-primary transition-colors text-foreground">
            <Phone className="mr-2 h-4 w-4 text-primary" />
            {siteConfig.phone}
          </Link>
          <Button asChild size="sm" className="h-12 px-6 text-xs font-black tracking-widest bg-primary text-primary-foreground hover:bg-orange-500 hover:scale-105 transition-all">
            <Link href="/request-a-quote">GET QUOTE</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-6 space-y-6 shadow-2xl absolute w-full">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col space-y-4 pt-6 border-t border-border">
            <Button asChild className="w-full justify-center h-12 font-black tracking-widest text-xs bg-secondary text-foreground hover:bg-secondary/80">
              <Link href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4 text-primary" /> Call Now
              </Link>
            </Button>
            
            {siteConfig.whatsapp && siteConfig.whatsapp !== "WHATSAPP_PLACEHOLDER" && (
              <Button asChild variant="outline" className="w-full justify-center h-12 font-black tracking-widest text-xs text-[#25D366] border-[#25D366] hover:bg-[#25D366]/10">
                <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </Link>
              </Button>
            )}

            <Button asChild className="w-full justify-center h-12 font-black tracking-widest text-xs bg-primary text-primary-foreground hover:bg-orange-500">
              <Link href="/request-a-quote">REQUEST QUOTE</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
