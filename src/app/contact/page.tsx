import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Clock, MapPin, Zap, ArrowUpRight, Asterisk } from "lucide-react";

export const metadata = {
  title: "Contact Us | 4CloverLabs",
  description:
    "Have an idea that keeps you up at night? Reach out to the 4CloverLabs team - we'd love to hear it.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] overflow-x-hidden selection:bg-[#ff4f00] selection:text-white flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight">Contact Information</h2>
            <p className="text-neutral-500 mb-10 leading-relaxed text-[15px]">
              Whether you have an idea, a question, or just want to see what we're building — we're always open to a good conversation.
            </p>

            <div className="space-y-8">
              {/* Info Item */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-[#ff4f00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-neutral-900">Email</h3>
                  <p className="text-neutral-500 mt-1 text-[15px]">founder@4cloverlabs.com</p>
                </div>
              </div>

              {/* Info Item */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-[#ff4f00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-neutral-900">Based In</h3>
                  <p className="text-neutral-500 mt-1 text-[15px]">Hyderabad, India</p>
                </div>
              </div>

              {/* Info Item */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-[#ff4f00]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-neutral-900">Office Hours</h3>
                  <p className="text-neutral-500 mt-1 text-[15px]">Mon – Fri: 10:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              {/* Info Item */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-[#ff4f00]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-neutral-900">Response Time</h3>
                  <p className="text-neutral-500 mt-1 text-[15px]">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#fcfaf8] rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-neutral-100 mb-6 self-start">
              <Asterisk className="w-4 h-4 text-[#ff4f00]" />
              <span className="text-sm font-semibold text-neutral-800">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">Let's Talk.</h2>
            <p className="text-neutral-500 mb-8 leading-relaxed text-[15px] max-w-2xl">
              Tell us what you're working on. We'll take a look and get back to you with honest thoughts — no sales pitch, no obligation.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-xl bg-[#fff2ea]/60 border border-[#ffe0cc] text-neutral-900 placeholder:text-neutral-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#ff4f00]/20 focus:border-[#ff4f00] transition-all"
                  />
                </div>
                {/* Email Address */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl bg-[#fff2ea]/60 border border-[#ffe0cc] text-neutral-900 placeholder:text-neutral-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#ff4f00]/20 focus:border-[#ff4f00] transition-all"
                  />
                </div>
                {/* Phone Number */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="w-full px-5 py-4 rounded-xl bg-[#fff2ea]/60 border border-[#ffe0cc] text-neutral-900 placeholder:text-neutral-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#ff4f00]/20 focus:border-[#ff4f00] transition-all"
                  />
                </div>
                {/* Service */}
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full px-5 py-4 rounded-xl bg-[#fff2ea]/60 border border-[#ffe0cc] text-neutral-900 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#ff4f00]/20 focus:border-[#ff4f00] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled hidden>What are you interested in?</option>
                    <option value="exploring">Just exploring</option>
                    <option value="collaborating">Collaborating on a venture</option>
                    <option value="building">Building a product</option>
                    <option value="other">Something else</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Tell us more"
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-[#fff2ea]/60 border border-[#ffe0cc] text-neutral-900 placeholder:text-neutral-500 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#ff4f00]/20 focus:border-[#ff4f00] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#ff4f00] text-white font-semibold rounded-full hover:bg-[#e64600] transition-colors shadow-lg shadow-[#ff4f00]/20"
                >
                  Send Message
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-[#ff4f00]" />
                  </div>
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
