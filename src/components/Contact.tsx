"use client";

import React, { useState, useRef } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#f0ece6] border-b border-dashed border-gray-300"
    >
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-l border-r border-dashed border-[#DEDEDE]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

          {/* LEFT PANEL */}
          <div className="lg:w-5/12 flex flex-col justify-between gap-12">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-300 bg-transparent mb-8 shadow-sm">
                <span className="text-[10px] font-bold text-[#111] uppercase tracking-widest">
                  CONTACT
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-[2.8rem] md:text-[3.6rem] font-serif font-bold text-[#111] leading-[1.05] tracking-tight mb-4">
                Got an idea that keeps you up at night? {" "}<br />
                <span className="text-[#888]">Let&apos;s hear it.</span>
              </h2>
            </div>

            {/* Contact Details */}
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#F04020] shrink-0" />
                <div>
                  <p className="text-[13px] font-bold text-[#111] uppercase tracking-wider mb-1">
                    Want to call us?
                  </p>
                  <a
                    href="tel:+00001234567"
                    className="text-[15px] font-medium text-[#888] hover:text-[#F04020] transition-colors"
                  >
                    +(00) 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#F04020] shrink-0" />
                <div>
                  <p className="text-[13px] font-bold text-[#111] uppercase tracking-wider mb-1">
                    Prefer the old way?
                  </p>
                  <a
                    href="mailto:hello@4cloverlabs.com"
                    className="text-[15px] font-medium text-[#888] hover:text-[#F04020] transition-colors"
                  >
                    hello@4cloverlabs.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT PANEL (Form) */}
          <div className="lg:w-7/12">
            <div className="bg-[#F9F7F5] border border-dashed border-gray-300 rounded-[2rem] p-8 md:p-10 shadow-sm h-full flex flex-col">
              {/* Form heading */}
              <div className="mb-8">
                <h3 className="text-[2rem] md:text-[2.6rem] font-serif font-bold text-[#111] leading-tight tracking-tight">
                  Let&apos;s start
                </h3>
                <h3 className="text-[2rem] md:text-[2.6rem] font-serif font-bold text-[#111] leading-tight tracking-tight">
                  the conversation.
                </h3>
              </div>

              {status === "sent" ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#F04020]/10 flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F04020"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="font-serif font-bold text-xl text-[#111]">Message sent!</p>
                  <p className="text-[#888] text-sm">We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 flex-1"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-[12px] font-bold text-[#555] uppercase tracking-wider"
                    >
                      Your name <span className="text-[#F04020]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] font-medium text-[#111] placeholder:text-[#ccc] outline-none focus:border-[#F04020] focus:ring-2 focus:ring-[#F04020]/10 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-[12px] font-bold text-[#555] uppercase tracking-wider"
                    >
                      Your e-mail <span className="text-[#F04020]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] font-medium text-[#111] placeholder:text-[#ccc] outline-none focus:border-[#F04020] focus:ring-2 focus:ring-[#F04020]/10 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label
                      htmlFor="contact-message"
                      className="text-[12px] font-bold text-[#555] uppercase tracking-wider"
                    >
                      Message <span className="text-[#F04020]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about what you're building..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-[15px] font-medium text-[#111] placeholder:text-[#ccc] outline-none focus:border-[#F04020] focus:ring-2 focus:ring-[#F04020]/10 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 text-[15px] font-bold text-[#111] hover:bg-[#111] hover:text-white hover:border-[#111] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending&hellip;
                      </>
                    ) : (
                      <>
                        Send message
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                          style={{ background: "rgba(255, 255, 255, 0.59)" }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#111"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
