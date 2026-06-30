import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-0 px-6 border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between">

        {/* Left: Newsletter */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">Join 5K+ Readers</h3>
          <p className="text-gray-400 text-[15px] font-medium leading-relaxed mb-8 max-w-sm">
            Get 1 actionable AI tip every Saturday. All in under 4 minutes.
          </p>
          <div className="flex items-center w-full max-w-md p-1.5 border border-dashed border-gray-700 rounded-full bg-black/50 transition-colors focus-within:border-gray-500">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 bg-transparent border-none outline-none text-white px-5 placeholder:text-gray-500 text-sm font-medium"
            />
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
              Subscribe
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Links */}
        <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-10 lg:pl-10">
          {/* Navigation */}
          <div className="flex flex-col">
            <h4 className="text-lg font-serif font-bold text-white mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <h4 className="text-lg font-serif font-bold text-white mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Terms of service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">404 Page</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col">
            <h4 className="text-lg font-serif font-bold text-white mb-6">Socials</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">X (twitter)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Linkedin</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">You Tube</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Logo & Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-dashed border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          <span className="font-serif font-bold text-xl tracking-tight">4CloverLabs</span>
        </div>
        <div className="text-sm text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} 4CloverLabs. All rights reserved.
        </div>
      </div>

      {/* Huge Typographic Footer */}
      <div className="w-full flex justify-center">
        <h1 className="text-[12.5vw] leading-none font-serif font-bold tracking-tighter text-white whitespace-nowrap translate-y-[8%]">
          4CLOVERLABS
        </h1>
      </div>
    </footer>
  );
}
