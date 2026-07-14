const fs = require('fs');
const path = require('path');

const distPath = path.join(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('Successfully copied index.html to 404.html');
} else {
  console.error('Error: dist/index.html not found. Did you run build first?');
  process.exit(1);
}
