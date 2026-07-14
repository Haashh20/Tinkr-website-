import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import GlobalCTA from "@/components/GlobalCTA";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-bg-primary overflow-hidden">
      <Navbar />
      
      {/* Spacer for sticky nav */}
      <div className="h-24 bg-black"></div>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-tinkr-yellow"></span>
            <span className="text-sm font-bold uppercase tracking-widest opacity-80">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 leading-tight tracking-tight">
            Building Better Teams, <br /> One Experience at a Time.
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto font-light leading-relaxed">
            With over 10 years of experience, we believe that learning doesn't have to be serious to be impactful. Play, creativity, and shared challenges are the true catalysts for organizational growth.
          </p>
        </div>
      </section>

      {/* The Story Grid */}
      <section className="py-24 bg-tinkr-yellow text-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                A decade of redefining corporate learning.
              </h2>
              <div className="space-y-6 text-lg opacity-80 font-light">
                <p>
                  For decades, corporate training has meant sitting in cold conference rooms, watching endless slide decks, and participating in forced trust falls. 
                  With a vision to break this mold, Sameer Nagi launched Tinkr Learning to ask a simple question: What if corporate learning felt like an adventure?
                </p>
                <p>
                  Over the past 10+ years, we've transformed the way Fortune 500 companies approach team building. By blending psychological insights with hands-on, creative tasks—like assembling smart cars, painting giant canvases, or building CSR initiatives—Tinkr forces teams out of their comfort zones.
                </p>
                <p>
                  In these novel environments, true leadership, communication, and empathy naturally emerge. We don't just host events; we architect experiences that leave a lasting impact on your company's culture.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-bg-secondary rounded-3xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <Founders />

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
