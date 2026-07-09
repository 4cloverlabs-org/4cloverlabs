const https = require('https');
const fs = require('fs');

https.get('https://syntiq.framer.website/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('syntiq.html', data);
    console.log('HTML saved to syntiq.html');
    
    // Attempt some basic regex extraction of CSS/Framer tokens
    const cssVars = data.match(/--[a-zA-Z0-9-]+:\s*[^;]+;/g);
    if (cssVars) {
        fs.writeFileSync('syntiq-css-vars.txt', Array.from(new Set(cssVars)).join('\n'));
        console.log('CSS vars extracted');
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
