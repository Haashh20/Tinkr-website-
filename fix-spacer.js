const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/app/about/page.tsx',
  'src/app/events/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/blogs/page.tsx'
];

for (const relPath of targetFiles) {
  const filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) {
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace the spacer background
  content = content.replace(/<div className="h-24 bg-bg-secondary"><\/div>/g, '<div className="h-24 bg-black"></div>');
  
  // Just in case they had other spacers
  content = content.replace(/<div className="h-24 bg-white"><\/div>/g, '<div className="h-24 bg-black"></div>');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated spacer in ${relPath}`);
  }
}
