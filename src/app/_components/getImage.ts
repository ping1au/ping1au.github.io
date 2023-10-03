import { promises as fs } from 'fs';
import path from 'path';

type ImageArray = string[] | undefined;

/**
 * 
 * 
 * @returns {Promise<ImageArray>}
 */
export const getImages = async (folderName:any): Promise<ImageArray> => {
    try {
        console.log("slug: " + folderName);
        const filePath = 'public/images/' + folderName;
        /* Grabs path to public/images/{folderName} */
        const imageDirectory = path.join(process.cwd(), filePath);
        /* Reads the content of the midj dir and returns an array of strings */
        const imageFilenames: ImageArray = await fs.readdir(imageDirectory)

        return imageFilenames
    } catch (error: any) {
        console.log(error);
    }
}