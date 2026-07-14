import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";
import NewsletterCTA from "@/components/NewsletterCTA";
import GlobalCTA from "@/components/GlobalCTA";

export default function BlogsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-bg-primary overflow-hidden">
      <Navbar />
      
      {/* Spacer */}
      <div className="h-24 bg-black"></div>

      <section className="py-20 md:py-32 relative bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-tinkr-yellow"></span>
            <span className="text-sm font-bold uppercase tracking-widest opacity-80">Insights & Ideas</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 leading-tight tracking-tight">
            The Tinkr <span className="text-tinkr-gold">Blog</span>
          </h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto font-light leading-relaxed">
            Expert perspectives on leadership, team culture, and the transformative power of experiential learning in the modern workplace.
          </p>
        </div>
      </section>

      <BlogPreview />
      
      <NewsletterCTA />

      <GlobalCTA 
        title="Ready to Build Your Team?"
        description="Browse our full catalog of creative, technology, CSR, and leadership workshops tailored for modern corporates."
        buttonText="Explore Our Events"
        buttonLink="/events"
      />

      <Footer />
    </main>
  );
}
