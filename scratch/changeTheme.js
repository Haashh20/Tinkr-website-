const fs = require('fs');
const path = require('path');

const componentsDir = 'c:/Users/Hrithika Baggam/OneDrive/Documents/Tinkr/Website/src/components';

const themeMap = {
  'Hero.tsx': 'black',
  'TrustLogos.tsx': 'yellow',
  'Stats.tsx': 'black',
  'AboutPreview.tsx': 'yellow',
  'ExperiencesPreview.tsx': 'black',
  'WhyChooseTinkr.tsx': 'yellow',
  'Industries.tsx': 'black',
  'ClientMarquee.tsx': 'yellow',
  'Testimonials.tsx': 'black',
  'GlobalCTA.tsx': 'yellow'
};

for (const [file, theme] of Object.entries(themeMap)) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf-8');

  // We only replace the <section ...> wrapper, and any text-text-main / text-text-secondary inside it.
  
  if (theme === 'black') {
    // Replace section bg
    content = content.replace(/<section([^>]*)className="([^"]*bg-[^"]*)"/g, (match, p1, p2) => {
      let newClass = p2.replace(/bg-bg-secondary|bg-white|bg-\[\#1F1F1F\]|bg-text-main/g, 'bg-black');
      if (!newClass.includes('text-white')) newClass += ' text-white';
      return `<section${p1}className="${newClass}"`;
    });
    // Replace text colors globally in this file
    content = content.replace(/text-text-main/g, 'text-white');
    content = content.replace(/text-text-secondary/g, 'text-white/80');
    // Inner cards might be white, let's make them dark gray so they don't blend into black
    content = content.replace(/bg-white/g, 'bg-[#1a1a1a]'); 
    content = content.replace(/bg-bg-secondary/g, 'bg-[#222]');
  } else if (theme === 'yellow') {
    content = content.replace(/<section([^>]*)className="([^"]*bg-[^"]*)"/g, (match, p1, p2) => {
      let newClass = p2.replace(/bg-bg-secondary|bg-white|bg-\[\#1F1F1F\]|bg-text-main/g, 'bg-tinkr-yellow');
      if (!newClass.includes('text-black')) newClass += ' text-black';
      return `<section${p1}className="${newClass}"`;
    });
    content = content.replace(/text-text-main/g, 'text-black');
    content = content.replace(/text-text-secondary/g, 'text-black/80');
    content = content.replace(/text-white/g, 'text-black');
    // For inner cards in yellow sections, let's keep them white or pale yellow
    content = content.replace(/bg-bg-secondary/g, 'bg-white/50');
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file} to ${theme} theme.`);
}
