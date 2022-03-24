// import fs from 'fs';                   // sync -> callback
import fs from 'fs/promises';          // async -> async/await
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};

file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, '../.data', dir, fileName);
    console.log(__dirname);
}

    /**
     * 
     * @param {*} dir 
     * @param {*} fileName 
     * @param {*} content 
     * @returns 
     */
    
    file.create = async (dir, fileName, content) => {
        let fileDescriptor = null;
        try {
            console.log('kuriamas failas...');
            const filePath = file.fullPath(dir, fileName);

            fileDescriptor = await fs.open(filePath, 'wx');

            await fs.writeFile(fileDescriptor, JSON.stringify(content));
             
            return true;
        } catch (error) {
            console.log(error);
            return false;
        } finally {
            if (fileDescriptor) {
            await fileDescriptor.close();
            }
        } 
        
    }
    file.read = (dir, filename) => {
        console.log('Skaitomas failas...');
    }
    file.update = (dir, filename) => {
        console.log('Atnaujinamas failas...');
    }
    file.delete = (dir, filename) => {
        console.log('Trinamas failas...');
    }

export { file }
