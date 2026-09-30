import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const images = [
  {
    name: 'commercial-tank.jpg',
    dir: 'public/images/services',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    title: 'Commercial building water tank cleaning',
  },
  {
    name: 'industrial-tank.jpg',
    dir: 'public/images/services',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    title: 'Industrial water reservoir and tank maintenance',
  },
  {
    name: 'sintex-tank.jpg',
    dir: 'public/images/services',
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=1200&auto=format&fit=crop',
    title: 'Sump & Sintex water tank cleaning setup',
  },
  {
    name: 'underground-tank.jpg',
    dir: 'public/images/services',
    url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1200&auto=format&fit=crop',
    title: 'Underground water tank cleaning and silt extraction',
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
