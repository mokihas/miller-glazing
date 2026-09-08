import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"
import { HeroSection } from "@/components/home/HeroSection"
import { ServicesShowcase } from "@/components/home/ServicesShowcase"
import { CraftsmanshipSection } from "@/components/home/CraftsmanshipSection"
import { ProjectsGrid } from "@/components/home/ProjectsGrid"
import { ProjectCtaBanner } from "@/components/home/ProjectCtaBanner"

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      
      <HeroSection />
      
      <ServicesShowcase />
      
      <CraftsmanshipSection />
      
      <ProjectsGrid />
      
      <ProjectCtaBanner />
      
    </>
  )
}
