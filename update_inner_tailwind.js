const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/about/page.tsx',
  'src/app/portfolio/page.tsx',
  'src/app/blog/page.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Tailwind shadow replacements
  content = content.replace(/shadow-\[3px_3px_0px_rgba\(0,0,0,1\)\]/g, 'shadow-sm rounded-md');
  content = content.replace(/shadow-\[2px_2px_0px_rgba\(0,0,0,1\)\]/g, 'shadow-sm rounded-md');
  content = content.replace(/shadow-\[4px_4px_0px_rgba\(0,0,0,1\)\]/g, 'shadow-md rounded-lg');
  content = content.replace(/shadow-\[6px_6px_0px_rgba\(0,0,0,1\)\]/g, 'shadow-lg rounded-xl');
  content = content.replace(/brutal-shadow/g, 'shadow-xl rounded-2xl');

  // Tailwind border replacements
  content = content.replace(/border-b-\[3px\]/g, 'border-b');
  content = content.replace(/border-r-\[3px\]/g, 'border-r');
  content = content.replace(/border-l-\[3\.5px\]/g, 'border-l-2');
  content = content.replace(/border-\[3px\]/g, 'border');
  content = content.replace(/border-2/g, 'border');

  // Tailwind background and text colors
  content = content.replace(/bg-black/g, 'bg-[#111111]');
  content = content.replace(/text-black/g, 'text-[#111111]');
  content = content.replace(/border-\[#FF9E66\]/g, 'border-[#111111]');
  
  // Font weights
  content = content.replace(/font-black/g, 'font-semibold');
  content = content.replace(/font-extrabold/g, 'font-medium');

  // Any remaining inline backgrounds
  content = content.replace(/background: "linear-gradient\(135deg, #f9fafb 0%, #FFD075 50%, #FF9E66 100%\)"/g, 'background: "#f9fafb"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`${file} tailwind classes updated.`);
});
