"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="gradient-bg">
        <div className="gradient-blob"></div>
      </div>

      <div className="app-container">
        <header className="app-header">
          <div className="logo">
            <span className="clover-icon">🍀</span>
            <span className="brand-name">4CloverLabs</span>
            <span className="badge">soon 2026</span>
          </div>
        </header>

        <main className="app-main">
          <h1 className="hero-title">
            <span className="text-dark">Coming soon.</span>
            <span className="text-gradient">Innovating for tomorrow.</span>
          </h1>
          
          <p className="subtitle">
            Stay close to the launch and be among the first to see what&apos;s coming. We are building something extraordinary.
          </p>

          <form className="notify-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Get Notified</button>
            </div>
          </form>

          <div className="social-links">
            <Link href="#">Instagram</Link>
            <span className="dot">•</span>
            <Link href="#">LinkedIn</Link>
            <span className="dot">•</span>
            <Link href="#">X</Link>
          </div>
        </main>

        <footer className="app-footer">
          <p>Created by 4CloverLabs • <Link href="#">Privacy Policy</Link></p>
        </footer>
      </div>
    </>
  );
}
