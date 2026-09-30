import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const images = [
  {
    name: 'hero-home.jpg',
    dir: 'public/images',
    // High quality industrial/residential water storage tank / clean water facility
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=1600&auto=format&fit=crop',
    title: 'Water tank and purification facility infrastructure',
    source: 'Unsplash (Free Commercial License)',
    author: 'CDC',
    authorUrl: 'https://unsplash.com/@cdc'
  },
  {
    name: 'hero-about.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=1600&auto=format&fit=crop',
    title: 'Water utility service and urban infrastructure',
    source: 'Unsplash (Free Commercial License)',
    author: 'Ricardo Gomez Angel',
    authorUrl: 'https://unsplash.com/@ripato'
  },
  {
    name: 'hero-services.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    title: 'Water system maintenance equipment and tank inspection',
    source: 'Unsplash (Free Commercial License)',
    author: 'Jeriden Villegas',
    authorUrl: 'https://unsplash.com/@jeriden'
  },
  {
    name: 'hero-blog.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop',
    title: 'Clean clear water maintenance and hygiene guides',
    source: 'Unsplash (Free Commercial License)',
    author: 'Linus Nylund',
    authorUrl: 'https://unsplash.com/@linusnylund'
  },
  {
    name: 'hero-gallery.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop',
    title: 'Water tank inspection and maintenance gallery',
    source: 'Unsplash (Free Commercial License)',
    author: 'Science in HD',
    authorUrl: 'https://unsplash.com/@scienceinhd'
  },
  {
    name: 'hero-contact.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop',
    title: 'Customer enquiry and service coordination',
    source: 'Unsplash (Free Commercial License)',
    author: 'Science in HD',
    authorUrl: 'https://unsplash.com/@scienceinhd'
  },
  {
    name: 'overhead-tank.jpg',
    dir: 'public/images/services',
    url: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=1200&auto=format&fit=crop',
    title: 'Rooftop water storage tank structure',
    source: 'Unsplash (Free Commercial License)',
    author: 'Etienne Girardet',
    authorUrl: 'https://unsplash.com/@etiennegirardet'
  },
  {
    name: 'underground-sump.jpg',
    dir: 'public/images/services',
    url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1200&auto=format&fit=crop',
    title: 'Underground water sump and chamber maintenance',
    source: 'Unsplash (Free Commercial License)',
    author: 'Ivan Bandura',
    authorUrl: 'https://unsplash.com/@ivanbandura'
  },
  {
    name: 'residential-tank.jpg',
    dir: 'public/images/services',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    title: 'Residential domestic water supply maintenance',
    source: 'Unsplash (Free Commercial License)',
    author: 'Stephan Bechert',
    authorUrl: 'https://unsplash.com/@stephanbechert'
  },
  {
    name: 'apartment-tank.jpg',
    dir: 'public/images/services',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    title: 'Multi-family residential complex and building water reservoir',
    source: 'Unsplash (Free Commercial License)',
    author: 'Danist Soh',
    authorUrl: 'https://unsplash.com/@danistsoh'
  },
  {
    name: 'signs-water-tank-needs-cleaning.jpg',
    dir: 'public/images/blog',
    url: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1200&auto=format&fit=crop',
    title: 'Water clarity inspection and sediment awareness',
    source: 'Unsplash (Free Commercial License)',
    author: 'Nico Beard',
    authorUrl: 'https://unsplash.com/@nicobeard'
  },
  {
    name: 'overhead-and-sump-cleaning.jpg',
    dir: 'public/images/blog',
    url: 'https://images.unsplash.com/photo-1585675100414-add2e465a136?q=80&w=1200&auto=format&fit=crop',
    title: 'Overhead tank and underground sump comparison',
    source: 'Unsplash (Free Commercial License)',
    author: 'CDC',
    authorUrl: 'https://unsplash.com/@cdc'
  },
  {
    name: 'how-to-prepare-cleaning.jpg',
    dir: 'public/images/blog',
    url: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1200&auto=format&fit=crop',
    title: 'Preparation and coordination for tank cleaning service',
    source: 'Unsplash (Free Commercial License)',
    author: 'CDC',
    authorUrl: 'https://unsplash.com/@cdc'
  },
  {
    name: 'og-image.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=1200&h=630&auto=format&fit=crop',
    title: 'Vijaya Water Tank Cleaning Services Open Graph Banner',
    source: 'Unsplash (Free Commercial License)',
    author: 'CDC',
    authorUrl: 'https://unsplash.com/@cdc'
  }
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  for (const img of images) {
    const targetDir = path.resolve(img.dir);
    fs.mkdirSync(targetDir, { recursive: true });
    const filePath = path.join(targetDir, img.name);
    console.log(`Downloading ${img.name}...`);
    try {
      await downloadFile(img.url, filePath);
      console.log(`Saved ${filePath}`);
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }

  // Write asset manifest
  const manifestPath = path.resolve('public/images/asset-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(images, null, 2));
  console.log(`Asset manifest written to ${manifestPath}`);
}

run();
