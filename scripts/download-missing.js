import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const images = [
  {
    name: 'hero-about.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop',
    title: 'Water utility service and storage infrastructure',
    source: 'Unsplash (Free Commercial License)',
    author: 'Science in HD',
    authorUrl: 'https://unsplash.com/@scienceinhd'
  },
  {
    name: 'hero-contact.jpg',
    dir: 'public/images',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    title: 'Customer enquiry and service coordination',
    source: 'Unsplash (Free Commercial License)',
    author: 'Jeriden Villegas',
    authorUrl: 'https://unsplash.com/@jeriden'
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
}

run();
