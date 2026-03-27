const fs = require('fs');

const appFile = 'src/App.jsx';
let app = fs.readFileSync(appFile, 'utf8');

// Fix 1: Stats/Authority Bar (15+, 2M, 100%, Global)
app = app.replace(/text-yellow-500( mb-2 tracking-tighter drop-shadow-\[2px_2px_0px_rgba\(28\,25\,23\,1\)\] font-display uppercase font-black">)(15\+|2M\+|100%|Global)/g, 'text-stone-950 border-l-[6px] border-yellow-500 pl-4$1$2');

// Fix 2: Leadership Titles in App.jsx
app = app.replace(/<p className="text-yellow-600 text-sm font-black mb-4 uppercase tracking-widest drop-shadow-sm">/g, '<p className="bg-yellow-400 text-stone-950 px-3 py-1 inline-block text-xs font-bold uppercase tracking-widest mb-4 font-display">');

// Fix 3: Strict NDA Framework links
app = app.replace(/<a href="\/nda\.html" className="text-yellow-600 underline hover:text-stone-950 transition-colors">/g, '<a href="/nda.html" className="text-stone-950 underline decoration-yellow-400 decoration-[3px] hover:bg-yellow-400 transition-colors">');
app = app.replace(/<a href="\/nda\.html" className="underline hover:text-yellow-600 transition-colors">/g, '<a href="/nda.html" className="text-stone-950 underline decoration-yellow-400 decoration-[3px] hover:bg-yellow-400 transition-colors">');

// Also check for aria-hidden="true" anywhere near the top
app = app.replace(/aria-hidden="true"\s*/g, '');

fs.writeFileSync(appFile, app);

const htmlFiles = [
  'public/team.html',
  'public/blog.html',
  'public/denim-manufacturing.html',
  'public/knitwear-production.html',
  'public/compliance-and-sustainability.html'
];

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<p class="text-yellow-600 font-black uppercase tracking-widest text-xs mb-4">/g, '<p class="bg-yellow-400 text-stone-950 px-3 py-1 inline-block text-xs font-bold uppercase tracking-widest mb-4 font-display">');
  content = content.replace(/<p class="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">/g, '<p class="bg-yellow-400 text-stone-950 px-3 py-1 inline-block text-xs font-bold uppercase tracking-widest mb-4 font-display">');
  fs.writeFileSync(file, content);
});

console.log('Done');
