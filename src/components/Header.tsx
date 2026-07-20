"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        .header-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          padding: 0;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .header-root.scrolled {
          padding: 0.75rem 1.5rem;
        }

        .header-inner {
          width: 100%;
          max-width: 100%;
          background: var(--background);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          height: 4.5rem;
          border-radius: 0px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @media (min-width: 768px) {
          .header-inner {
            padding: 0 2rem;
          }
        }

        .header-root.scrolled .header-inner {
          max-width: 1180px;
          height: 3.75rem;
          background: #313131;
          border-bottom-color: transparent;
          border-radius: 12px;
          padding: 0 1.25rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
        }

        @media (min-width: 768px) {
          .header-root.scrolled .header-inner {
            padding: 0 1.5rem;
          }
        }

        .header-logo-text {
          font-size: 1.25rem;
          font-family: var(--font-sans), sans-serif;
          font-weight: 600;
          color: var(--foreground);
          letter-spacing: -0.03em;
          transition: color 0.3s;
        }

        .header-nav-link {
          color: var(--color-neutral-600);
          text-decoration: none;
          padding: 0.5rem 1rem;
          font-weight: 500;
          font-size: 0.875rem;
          transition: color 0.2s ease-out;
        }
        .header-nav-link:hover {
          color: var(--foreground);
        }

        .header-cta {
          background: var(--color-deep-black);
          color: #ffffff;
          padding: 0.5rem 1rem;
          font-weight: 500;
          font-size: 0.75rem; /* 12px */
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 4px;
          border: 1px solid var(--color-deep-black);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .header-cta:hover {
          background: var(--color-graphite);
          border-color: var(--color-graphite);
        }
        .header-cta:active {
          transform: translateY(1px);
        }

        /* Scrolled Text Inversion */
        .header-root.scrolled .header-logo-text {
          color: #ffffff;
        }
        .header-root.scrolled .header-nav-link {
          color: #e7e2e2;
        }
        .header-root.scrolled .header-nav-link:hover {
          color: #ffffff;
        }
        .header-root.scrolled .header-cta {
          background: #ffffff;
          color: var(--color-deep-black);
          border-color: #ffffff;
        }
        .header-root.scrolled .header-cta:hover {
          background: var(--color-neutral-200);
          border-color: var(--color-neutral-200);
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--foreground);
          transition: color 0.3s;
        }
        .header-root.scrolled .mobile-menu-btn {
          color: #ffffff;
        }
        
        .desktop-nav {
          display: none;
        }
        .desktop-cta {
          display: none;
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .desktop-cta {
            display: flex;
          }
        }
      `}</style>

      <div className={`header-root${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", zIndex: 60 }}>
            <img
              src={scrolled && !isMobileMenuOpen ? "/4cloverlabs-black-withoutbg.png" : "/4cloverlabs-white-withoutbg.png"}
              alt="4CloverLabs Logo"
              style={{
                width: "1.75rem",
                height: "1.75rem",
                objectFit: "contain",
                filter: isMobileMenuOpen ? "brightness(0) invert(1)" : "none"
              }}
            />
            <span className="header-logo-text" style={{ color: isMobileMenuOpen ? "#ffffff" : undefined }}>
              4cloverlabs
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <Link href="/" className="header-nav-link">Home</Link>
            <Link href="/about" className="header-nav-link">About</Link>
            <Link href="/portfolio" className="header-nav-link">Portfolio</Link>
            <Link href="/blog" className="header-nav-link">Blog</Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="header-cta desktop-cta"
          >
            <span>Contact Us</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ zIndex: 60, color: isMobileMenuOpen ? "#ffffff" : undefined }}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#151515] flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8 text-white w-full px-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium tracking-tight">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium tracking-tight">About</Link>
              <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium tracking-tight">Portfolio</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium tracking-tight">Blog</Link>
              
              <div className="w-full h-px bg-white/10 my-4 max-w-sm"></div>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-transform active:scale-95"
              >
                <span>Contact Us</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: "4.5rem" }} aria-hidden="true" />
    </>
  );
}
