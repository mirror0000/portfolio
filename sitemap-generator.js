import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: 'https://james-gates-0212.github.io/' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

const prefix = '/portfolio';
const urls = ['/', '/about', '/experience'];
const date = new Date().toISOString();

urls.forEach((url) => {
  console.log(prefix + url);
  sitemap.write({ url: prefix + url, lastmod: date, changefreq: 'daily', priority: 0.7 });
});
sitemap.end();
