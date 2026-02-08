import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const htmlPath = join(__dirname, '../public/quick suite project/Build with ai/pattern-cards.html');
const outputPath = join(__dirname, '../public/quick suite project/Build with ai/pattern-cards-overview.png');

async function generateImage() {
  if (!existsSync(htmlPath)) {
    console.error(`HTML file not found at: ${htmlPath}`);
    process.exit(1);
  }

  const browser = await chromium.launch({
    headless: true,
  });
  const page = await browser.newPage();
  
  try {
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
    
    // Wait for images to load
    await page.waitForTimeout(3000);
    
    // Get the container element
    const container = await page.$('.container');
    if (!container) {
      throw new Error('Container element not found');
    }
    
    // Take screenshot of the container
    await container.screenshot({
      path: outputPath,
      type: 'png',
    });
    
    console.log(`Image generated successfully at: ${outputPath}`);
  } catch (error) {
    console.error('Error generating image:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generateImage();
