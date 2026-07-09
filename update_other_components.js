const fs = require('fs');
const path = require('path');

const filesToUpdate = ['WhyUs.tsx', 'OurProcess.tsx', 'CTA.tsx'];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, 'src/components', file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace brutalist borders
  content = content.replace(/3\.5px solid var\(--foreground\)/g, '1px solid var(--color-border)');
  content = content.replace(/3px solid var\(--foreground\)/g, '1px solid var(--color-border)');
  content = content.replace(/2\.5px solid var\(--foreground\)/g, '1px solid var(--color-border)');
  content = content.replace(/4px solid var\(--foreground\)/g, '1px solid var(--color-border)');

  // Replace brutalist shadows
  content = content.replace(/boxShadow:\s*"8px 8px 0px var\(--foreground\)"/g, 'boxShadow: "0 4px 16px rgba(0,0,0,0.04)", borderRadius: "8px"');
  content = content.replace(/boxShadow:\s*"6px 6px 0px var\(--foreground\)"/g, 'boxShadow: "0 4px 12px rgba(0,0,0,0.04)", borderRadius: "6px"');
  content = content.replace(/boxShadow:\s*"4px 4px 0px var\(--foreground\)"/g, 'boxShadow: "0 2px 8px rgba(0,0,0,0.02)", borderRadius: "6px"');
  content = content.replace(/boxShadow:\s*"3px 3px 0px var\(--foreground\)"/g, 'boxShadow: "0 2px 8px rgba(0,0,0,0.02)", borderRadius: "6px"');

  // Replace backgrounds
  content = content.replace(/#F5F2E9/g, 'var(--background)');
  content = content.replace(/#ECE7D7/g, 'var(--background)');
  content = content.replace(/background:\s*"linear-gradient\(135deg, #FF9E66 0%, #FFD075 100%\)"/g, 'background: "var(--color-dark)", color: "#ffffff"');
  content = content.replace(/backgroundColor:\s*"#FF9E66"/g, 'backgroundColor: "var(--color-dark)"');
  content = content.replace(/background:\s*"#FF9E66"/g, 'background: "var(--color-dark)", color: "#ffffff"');
  content = content.replace(/background:\s*"#FF7B7B"/g, 'background: "var(--color-border)"');
  content = content.replace(/background:\s*"#FFD075"/g, 'background: "var(--color-border-light)"');
  
  // Tailwind classes replacement
  content = content.replace(/border-\[3\.5px\]/g, 'border');
  content = content.replace(/border-\[3px\]/g, 'border');
  content = content.replace(/border-black/g, 'border-[var(--color-border)]');
  content = content.replace(/bg-\[#F5F2E9\]/g, 'bg-[var(--background)]');
  content = content.replace(/bg-\[#ECE7D7\]/g, 'bg-[var(--background)]');
  content = content.replace(/bg-\[#FF9E66\]/g, 'bg-[var(--color-dark)]');
  content = content.replace(/bg-\[#FFD075\]/g, 'bg-[var(--color-border)]');
  
  // Typography
  content = content.replace(/fontWeight: 1000/g, 'fontWeight: 700');
  content = content.replace(/fontWeight: 900/g, 'fontWeight: 600');
  content = content.replace(/fontWeight: 800/g, 'fontWeight: 500');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`${file} updated.`);
});
