const fs = require('fs');
async function generateSitemap() {
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://dewskincare.com/</loc></url></urlset>';
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
generateSitemap();
