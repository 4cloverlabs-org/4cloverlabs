const fs = require("fs");

const filePath = "d:/Navtej/4CloverLabs/src/components/Features.tsx";
let content = fs.readFileSync(filePath, "utf8");

const startComment = "{/* Cards Grid */}";
const endString = "</div>\n      </div>\n    </section>\n  );\n}";

const startIndex = content.indexOf(startComment);
const endIndex = content.indexOf(endString, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find start or end index");
  process.exit(1);
}

const featuresDataCode = `
  const featuresData = [
    {
      title: (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "13px", fontWeight: 500, color: "var(--color-neutral-400)" }}>Venture Building</span>
        </div>
      ),
      description: (
        <>
          <div style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 600, color: "var(--color-neutral-100)", letterSpacing: "-0.02em", lineHeight: "1.1", marginBottom: "2rem" }}>
            01
          </div>
          <div style={{ height: "200px", backgroundColor: "#1e293b", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5rem", padding: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "1.25rem 1rem", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "3.2rem", height: "3.2rem", backgroundColor: "#111", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(45deg) translate(-1px, 1px)" }}>
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </div>
              <div style={{ width: "3.2rem", height: "3.2rem", backgroundColor: "#fff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", border: "1px solid #eaeaea" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <div style={{ height: "3.2rem", padding: "0 1.5rem", backgroundColor: "#fff", borderRadius: "100px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", border: "1px solid #eaeaea", color: "#111", fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em" }}>
                PRIMARY
              </div>
              <div style={{ width: "3.2rem", height: "3.2rem", backgroundColor: "#fff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", border: "1px solid #eaeaea", color: "#111", fontSize: "18px", fontWeight: 400 }}>
                +
              </div>
              <div style={{ width: "3.2rem", height: "3.2rem", backgroundColor: "#fff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.04)", border: "1px solid #eaeaea" }}>
                <div style={{ width: "1rem", height: "1rem", backgroundColor: "#111", borderRadius: "50%" }} />
              </div>
              <div style={{ height: "3.2rem", padding: "0 1.5rem", backgroundColor: "#111", borderRadius: "100px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", color: "#fff", fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em" }}>
                DISCOVER
              </div>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "16px", color: "var(--color-neutral-400)", lineHeight: "1.6", margin: 0 }}>
            We conceive, fund, and build intelligent digital businesses from the ground up. Fully owned and operated within the studio.
          </p>
        </>
      )
    },
    {
      title: (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "13px", fontWeight: 500, color: "var(--color-neutral-400)" }}>AI Development</span>
        </div>
      ),
      description: (
        <>
          <div style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 600, color: "var(--color-neutral-100)", letterSpacing: "-0.02em", lineHeight: "1.1", marginBottom: "2rem" }}>
            02
          </div>
          <div style={{ height: "200px", backgroundColor: "#1e293b", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2.5rem", padding: "1.5rem 2rem", position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 56px)", gap: "12px 14px" }}>
              <Hexagon bg="#fff" border="#eaeaea">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
                  <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
                  <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
                </svg>
              </Hexagon>
              <Hexagon bg="#fff" border="#eaeaea">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="7" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
              </Hexagon>
              <Hexagon bg="#111">
                <span style={{ color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "16px" }}>4</span>
              </Hexagon>
              <Hexagon bg="#94a3b8" />
              <Hexagon bg="#fff" border="#eaeaea">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="7" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </Hexagon>
              <Hexagon bg="#fff" border="#eaeaea">
                <span style={{ color: "#111", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "15px" }}>{"{}"}</span>
              </Hexagon>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <DotGrid cols={3} rows={4} color="#64748b" gap={8} dotSize={3} />
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "16px", color: "var(--color-neutral-400)", lineHeight: "1.6", margin: 0 }}>
            From intelligent automations to autonomous agent platforms - we engineer custom AI products built for real-world impact.
          </p>
        </>
      )
    },
    {
      title: (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "13px", fontWeight: 500, color: "var(--color-neutral-400)" }}>Shared Infrastructure</span>
        </div>
      ),
      description: (
        <>
          <div style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 600, color: "var(--color-neutral-100)", letterSpacing: "-0.02em", lineHeight: "1.1", marginBottom: "2rem" }}>
            03
          </div>
          <div style={{ height: "200px", backgroundColor: "#1e293b", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "flex-start", marginBottom: "2.5rem", padding: "1.5rem", position: "relative", overflow: "hidden" }}>
            <svg style={{ position: "absolute", bottom: 0, right: 0, width: "65%", height: "60%", opacity: 0.8, zIndex: 1 }} viewBox="0 0 200 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#475569" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,80 L40,75 L80,60 L120,70 L160,35 L200,20 L200,100 L0,100 Z" fill="url(#chart-grad)" />
              <path d="M0,80 L40,75 L80,60 L120,70 L160,35 L200,20" fill="none" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="200" cy="20" r="3.5" fill="#94a3b8" />
            </svg>
            <div style={{ position: "relative", zIndex: 2, backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #eaeaea", boxShadow: "0 10px 25px rgba(0,0,0,0.04)", width: "210px", padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "12px", height: "12px", border: "1.5px solid #111", borderRadius: "3px" }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700, color: "#111" }}>APPS</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{ display: "flex", gap: "3px" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} style={{ width: "22px", height: "5px", backgroundColor: i <= 4 ? "#111" : "#e5e5e5", borderRadius: "10px" }} />
                  ))}
                </div>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700, color: "#111" }}>72%</span>
              </div>
              <div style={{ borderBottom: "1px solid #f3f4f6", marginBottom: "0.75rem" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontFamily: "var(--font-sans)", color: "#666", marginBottom: "0.5rem" }}>
                <span>DATABASE</span><span style={{ color: "#111", fontWeight: 700 }}>OK</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontFamily: "var(--font-sans)", color: "#666" }}>
                <span>SYSTEM</span><span style={{ color: "#111", fontWeight: 700 }}>99.9%</span>
              </div>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "16px", color: "var(--color-neutral-400)", lineHeight: "1.6", margin: 0 }}>
            Every venture we build runs on the same foundation - enabling faster time to market and scaling with ease.
          </p>
        </>
      )
    }
  ];
`;

const beforeReturn = content.indexOf("return (");
const newContentCorrect = content.substring(0, beforeReturn) + featuresDataCode + "\n  return (\n" + content.substring(beforeReturn + 8, startIndex) + `
        {/* Cards Grid */}
        <HoverEffect items={featuresData} className="grid-cols-1 md:grid-cols-3 !gap-[24px]" />
` + "\n" + endString;

fs.writeFileSync(filePath, newContentCorrect);
console.log("Updated Features.tsx successfully!");
