const fs = require('fs');
const path = require('path');
const https = require('https');

const imageDirectories = [
  'teams',
  'tournaments',
  'products',
  'blog',
  'services',
  'authors',
  'gallery',
  'games',
  'hero',
];

const imageTypes = {
  teams: [
    'phoenix-gaming',
    'shadow-wolves',
    'neon-dragons',
    'quantum-raiders',
    'frost-giants',
  ],
  tournaments: [
    'cs2-championship',
    'lol-masters',
    'valorant-cup',
  ],
  products: [
    'headset-1',
    'headset-2',
    'headset-3',
    'headset-4',
    'mouse',
    'keyboard',
    'mousepad',
    'chair',
  ],
  blog: [
    'esports-growth',
    'gaming-trends',
    'mobile-esports',
    'esports-career',
  ],
  services: ['tournament-organization'],
  authors: [
    'sarah-johnson',
    'michael-chen',
    'alex-rodriguez',
  ],
  gallery: [
    'tournament-finals',
    'gaming-setup',
    'team-practice',
    'community-event',
    'gaming-arena',
    'victory-celebration',
    'streaming-setup',
    'team-meeting',
    'gaming-competition',
  ],
  games: [
    'league-of-legends',
    'counter-strike-2',
    'valorant',
    'dota-2',
    'overwatch-2',
    'rocket-league',
    'fantasy-realms',
    'tactical-force',
  ],
  hero: ['hero'],
};

const baseDir = path.join(process.cwd(), 'public', 'images');

// Create directories if they don't exist
imageDirectories.forEach((dir) => {
  const dirPath = path.join(baseDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Generate placeholder images using picsum.photos
Object.entries(imageTypes).forEach(([directory, images]) => {
  images.forEach((image, index) => {
    const filePath = path.join(baseDir, directory, `${image}.jpg`);
    
    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`Skipping ${filePath} - already exists`);
      return;
    }

    // Use a different seed for each image
    const seed = index + 1;
    const url = `https://picsum.photos/seed/${seed}/800/600`;
    
    https.get(url, (response) => {
      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        console.log(`Generated ${filePath}`);
        fileStream.close();
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err);
    });
  });
}); 