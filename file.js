// import fs from 'fs';                   // sync -> callback
import fs from 'fs/promises';          // async -> async/await

const file = {};

    file.create = async (dir, filename, content) => {
        let fileDescriptor = null;
        try {
            console.log('kuriamas failas...');
            return true;
        } catch (error) {
            return false;
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
