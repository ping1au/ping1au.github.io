import { promises as fs } from 'fs';
import path from 'path';

/**
 * Fetches image filenames from the specified folder.
 * @param folderName - The folder name (e.g., 'before', 'after', 'fdc_fix').
 * @param locale - The locale (e.g., 'en', 'fr').
 * @returns A promise resolving to an array of image filenames.
 */
export const getImages = async (folderName: string, locale: string): Promise<string[]> => {
  try {
    console.log('slug folder:', folderName);
    let targetFolder = folderName;
    if (folderName === 'fdc_fix') {
      targetFolder = `${folderName}/${locale}`;
    }
    const filePath = `public/images/${targetFolder}`;
    const imageDirectory = path.join(process.cwd(), filePath);
    const imageFilenames = await fs.readdir(imageDirectory);
    return imageFilenames.filter((file) => file.endsWith('.webp')); // Ensure only .webp files
  } catch (error) {
    console.error('Error reading image directory:', error);
    return [];
  }
};