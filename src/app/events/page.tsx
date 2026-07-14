import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperiencesPreview from "@/components/ExperiencesPreview";
import GlobalCTA from "@/components/GlobalCTA";
import { CheckCircle2 } from "lucide-react";

export default function EventsPage() {
  const processSteps = [
    {
      title: "Discovery & Alignment",
      description: "We start by understanding your team's specific challenges, goals, and organizational culture to recommend the perfect experience."
    },
    {
      title: "Customization",
      description: "Every workshop is tailored. We adjust the framing, the constraints, and the debrief focus to align directly with your desired outcomes."
    },
    {
      title: "Execution",
      description: "Our expert facilitators lead the session, ensuring high energy, deep engagement, and psychological safety for all participants."
    },
    {
      title: "Debrief & Application",
      description: "The most important part. We translate the insights gained during the activity into actionable takeaways for the actual workplace."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-bg-primary overflow-hidden">
      <Navbar />
      
      {/* Spacer */}
      <div className="h-24 bg-black"></div>

      <section className="py-20 md:py-32 relative bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 leading-tight tracking-tight">
            Our <span className="text-tinkr-gold">Events</span>
          </h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            From building wheelchairs for charity to racing smart robots, explore our comprehensive range of experiential learning programs.
          </p>
          <a
            href="/Tinkr-Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-tinkr-yellow text-black font-semibold rounded-full hover:bg-white transition-all shadow-md"
          >
            Download Brochure
          </a>
        </div>
      </section>

      {/* Show 6 events with yellow theme */}
      <ExperiencesPreview theme="yellow" limit={6} />

      <section className="py-24 border-t border-border-subtle bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">The Tinkr Methodology</h2>
            <p className="text-lg opacity-80 font-light">We don't just run games. We facilitate transformational change through a structured 4-step process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-bg-secondary text-text-main border border-border-subtle hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-500">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-tinkr-yellow text-black font-bold text-xl rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 mt-2">{step.title}</h3>
                <p className="opacity-80 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
      <Footer />
    </main>
  );
}
