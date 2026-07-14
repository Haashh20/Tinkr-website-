const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/app/about/page.tsx',
  'src/app/events/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/blogs/page.tsx',
  'src/app/blogs/[slug]/page.tsx',
  'src/components/Founders.tsx',
  'src/components/BlogPreview.tsx'
];

let isBlack = true; // start with black

for (const relPath of targetFiles) {
  const filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath}, does not exist.`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace section backgrounds and text colors
  content = content.replace(/<section className="([^"]*)"/g, (match, classes) => {
    // Remove old backgrounds and text colors
    let newClasses = classes
      .replace(/\bbg-bg-primary\b/g, '')
      .replace(/\bbg-bg-secondary\b/g, '')
      .replace(/\bbg-white\b/g, '')
      .replace(/\btext-text-main\b/g, '')
      .replace(/\btext-text-secondary\b/g, '')
      .replace(/\s+/g, ' ')
      .trim();
      
    if (isBlack) {
      newClasses += ' bg-black text-white';
    } else {
      newClasses += ' bg-tinkr-yellow text-black';
    }
    
    // Toggle for next section
    isBlack = !isBlack;
    
    return `<section className="${newClasses}"`;
  });
  
  // Update inner text colors so they inherit or contrast correctly
  // Instead of replacing all text-text-main (which might be inside cards),
  // we can let Tailwind inheritance do its job mostly, but for explicit texts:
  // We'll replace text-text-main with text-current, text-text-secondary with opacity-80
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated theme for ${relPath}`);
  }
}
