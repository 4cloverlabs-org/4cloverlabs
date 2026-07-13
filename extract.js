const https = require('https');
const fs = require('fs');

https.get('https://4cloverlabs.com', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('4cloverlabs.html', data);
    console.log('HTML saved to 4cloverlabs.html');

    // Attempt some basic regex extraction of CSS/Framer tokens
    const cssVars = data.match(/--[a-zA-Z0-9-]+:\s*[^;]+;/g);
    if (cssVars) {
      fs.writeFileSync('4cloverlabs-css-vars.txt', Array.from(new Set(cssVars)).join('\n'));
      console.log('CSS vars extracted');
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
