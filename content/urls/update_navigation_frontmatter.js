// Run this script with: node update_navigation_frontmatter.js
// It updates all .md files in the current directory, setting eleventyNavigation.key to the filename (no extension)
// and order based on alphabetical order of filenames.

const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir)
  .filter(f => f.endsWith('.md'))
  .sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

files.forEach((file, idx) => {
  const filePath = path.join(dir, file);
  const slug = path.basename(file, '.md');
  const order = idx + 1;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace or insert front matter
  const fmRegex = /^---[\s\S]*?---/;
  const navBlock = `eleventyNavigation:\n  key: ${slug}\n  order: ${order}`;
  if (fmRegex.test(content)) {
    // Replace or add to existing front matter
    content = content.replace(
      /^(---[\s\S]*?)(eleventyNavigation:[\s\S]*?)(---)/m,
      (match, start, nav, end) => {
        // Remove old nav block, add new one before end
        const newStart = start.replace(/eleventyNavigation:[\s\S]*?(?=\n---)/, '');
        return `${newStart}${navBlock}\n${end}`;
      }
    );
    // If no nav block, insert before closing ---
    if (!/eleventyNavigation:/.test(content)) {
      content = content.replace(/^(---[\s\S]*?)---/m, `$1${navBlock}\n---`);
    }
  } else {
    // No front matter, add it
    content = `---\n${navBlock}\n---\n` + content;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
