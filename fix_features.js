const fs = require("fs");

const filePath = "d:/Navtej/4CloverLabs/src/components/Features.tsx";
let content = fs.readFileSync(filePath, "utf8");

// Extract featuresData block
const startFeaturesData = "  const featuresData = [";
const endFeaturesData = "    }\n  ];\n";

const startIndex = content.indexOf(startFeaturesData);
const endIndex = content.indexOf(endFeaturesData) + endFeaturesData.length;

const featuresDataCode = content.substring(startIndex, endIndex);

// Remove featuresData from DotGrid
let newContent = content.substring(0, startIndex) + content.substring(endIndex);

// Insert into Features component
const featuresTarget = "export default function Features() {";
const insertPos = newContent.indexOf(featuresTarget) + featuresTarget.length;

newContent = newContent.substring(0, insertPos) + "\n" + featuresDataCode + newContent.substring(insertPos);

fs.writeFileSync(filePath, newContent);
console.log("Fixed Features.tsx");
