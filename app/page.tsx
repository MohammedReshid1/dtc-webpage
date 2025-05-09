import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import CommunitySection from "@/components/community-section"
import JoinSection from "@/components/join-section"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import ThemeToggle from "@/components/theme-toggle"
import SoundToggle from "@/components/sound-toggle"
import ThreeBackground from "@/components/three-background"
import { SoundProvider } from "@/components/sound-effects"
import ImpactSection from "@/components/impact-section"
import WhyJoinSection from "@/components/why-join-section"
import MemberSpotlight from "@/components/member-spotlight"

export const metadata: Metadata = {
  title: "Dablie Tech Club",
  description: "A community of innovators, creators, and tech enthusiasts",
}

export default function Home() {
  return (
    <SoundProvider>
      <SmoothScroll>
        <ThreeBackground />
        <ThemeToggle />
        <SoundToggle />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ImpactSection />
        <CommunitySection />
        <WhyJoinSection />
        <MemberSpotlight />
        <JoinSection />
        <Footer />
      </SmoothScroll>
    </SoundProvider>
  )
}
