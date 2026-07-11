const fs = require("fs");

const filePath = "d:/Navtej/4CloverLabs/src/components/Features.tsx";
let content = fs.readFileSync(filePath, "utf8");

// Normalize line endings
content = content.replace(/\r\n/g, "\n");

const c1Start = content.indexOf("{/* Card 1: Venture Building */}");
const c2Start = content.indexOf("{/* Card 2: AI Development */}");
const c3Start = content.indexOf("{/* Card 3: Shared Infrastructure */}");
const cardsGridStart = content.indexOf("{/* Cards Grid */}");
const endOfCardsGrid = content.indexOf("        </div>\n      </div>\n    </section>");

const card1 = content.substring(c1Start, c2Start).trim();
const card2 = content.substring(c2Start, c3Start).trim();
const card3 = content.substring(c3Start, endOfCardsGrid).trim();



let imports = `"use client";\nimport React from "react";\nimport { HoverEffect } from "./ui/card-hover-effect";\n`;

// Wrap the cards in Fragments <></> so comments don't cause syntax errors
const featuresDataCode = `
  const featuresData = [
    { title: "", description: ( <>
      ${card1Fixed}
    </> ) },
    { title: "", description: ( <>
      ${card2Fixed}
    </> ) },
    { title: "", description: ( <>
      ${card3Fixed}
    </> ) }
  ];
`;

let remainingTop = content.substring(content.indexOf("function DotGrid"));
const featuresStart = remainingTop.indexOf("export default function Features() {") + "export default function Features() {".length;

let newContent = imports + remainingTop.substring(0, featuresStart) + "\n" + featuresDataCode + remainingTop.substring(featuresStart, remainingTop.indexOf("{/* Cards Grid */}"));

newContent += `        {/* Cards Grid */}
        <HoverEffect items={featuresData} className="!gap-[2rem]" />
      </div>
    </section>
  );
}
`;

fs.writeFileSync(filePath, newContent);
console.log("Features.tsx rewritten properly with fragments.");
