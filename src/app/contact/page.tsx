"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalCTA from "@/components/GlobalCTA";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    workEmail: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycby3_LAXcpIe5GBOGAwf0nAyw3jc3LEBnuPvChnE0KGA4XVGmCmtj-uus0U3GgR8gRYg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });
      setFormStatus("success");
      setFormData({ firstName: "", lastName: "", companyName: "", workEmail: "", message: "" });
    } catch (error) {
      console.error("Error submitting form", error);
      setFormStatus("idle");
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-bg-primary overflow-hidden">
      <Navbar />
      
      <div className="h-24 bg-black"></div>

      <section className="py-20 md:py-32 relative bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-8 leading-tight tracking-tight">
                Let's start a <br/> <span className="text-tinkr-gold">conversation.</span>
              </h1>
              <p className="text-xl opacity-80 font-light leading-relaxed mb-12 max-w-lg">
                Ready to elevate your team's potential? Reach out to us to design a custom experiential learning program for your organization.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-bg-secondary border border-border-subtle rounded-2xl flex items-center justify-center text-tinkr-yellow shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email Us</h3>
                    <p className="opacity-80 font-light">sameer@tinkrlearning.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-bg-secondary border border-border-subtle rounded-2xl flex items-center justify-center text-tinkr-yellow shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                    <p className="opacity-80 font-light max-w-xs">Mantri Euphoria, Manchirevula, Hyderabad 500075</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-bg-secondary text-text-main p-8 md:p-12 rounded-3xl border border-border-subtle shadow-sm relative">
              {formStatus === "success" ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-bg-secondary text-text-main rounded-3xl z-10">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4">Request Received</h3>
                  <p className="opacity-80 font-light">Thank you for reaching out. A Tinkr representative will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-tinkr-gold font-semibold hover: transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : null}

              <h3 className="text-2xl font-heading font-bold mb-8">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">First Name *</label>
                    <input 
                      required 
                      type="text" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-tinkr-yellow transition-colors" 
                      placeholder="Jane" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Last Name *</label>
                    <input 
                      required 
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-tinkr-yellow transition-colors" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Company Name *</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-tinkr-yellow transition-colors" 
                    placeholder="Acme Corp" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Work Email *</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.workEmail}
                    onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                    className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-tinkr-yellow transition-colors" 
                    placeholder="jane@acmecorp.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">How can we help? *</label>
                  <textarea 
                    required 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-tinkr-yellow transition-colors resize-none" 
                    placeholder="Tell us about your team size, goals, and preferred dates..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="w-full bg-text-main text-white font-semibold py-4 rounded-xl hover:bg-tinkr-yellow hover: transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <GlobalCTA />

      <Footer />
    </main>
  );
}
