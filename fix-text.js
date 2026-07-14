const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/app/about/page.tsx',
  'src/app/events/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/blogs/page.tsx',
  'src/components/Founders.tsx',
  'src/components/BlogPreview.tsx'
];

for (const relPath of targetFiles) {
  const filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) {
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace explicit text colors so they inherit from the <section> text color
  // text-text-main -> we can just remove it, so it falls back to inheriting text-white/text-black
  content = content.replace(/\btext-text-main\b/g, '');
  
  // text-text-secondary -> replace with opacity-80 to keep it visually subtle but match the section color
  content = content.replace(/\btext-text-secondary\b/g, 'opacity-80');
  
  // Cleanup any double spaces in classNames
  content = content.replace(/className="([^"]*)"/g, (match, classes) => {
      return `className="${classes.replace(/\s+/g, ' ').trim()}"`;
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated text colors in ${relPath}`);
  }
}
