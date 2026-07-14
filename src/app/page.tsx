import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import ExperiencesPreview from "@/components/ExperiencesPreview";
import WhyChooseTinkr from "@/components/WhyChooseTinkr";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bg-primary overflow-hidden">
      <Navbar />
      <Hero />
      <TrustLogos />
      <Stats />
      <AboutPreview />
      <ExperiencesPreview limit={4} showExploreMore={true} />
      <WhyChooseTinkr />
      <Industries />
      <Testimonials />
      <GlobalCTA />
      <Footer />
    </main>
  );
}
