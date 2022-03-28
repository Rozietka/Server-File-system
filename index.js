import { file } from './lib/file.js';

const createFileStatus = await file.create('users', 'petras.json', {
    name: 'Petras',
    age: 99,
    isMarried: true
});
console.log(createFileStatus);

const readFileStatus1 = await file.read('users', 'petras.json');
console.log(readFileStatus1);

const updateFileStatus = await file.update('users', 'petras.json', {
    name: 'Petras',
    age: 99
});
console.log(updateFileStatus);

const readFileStatus2 = await file.read('users', 'petras.json');
console.log(readFileStatus2);

const updateFileStatus2 = await file.update('users', 'petras.json', {
    name: 'Petras'
});
console.log(updateFileStatus2);

const readFileStatus3 = await file.read('users', 'petras.json');
console.log(readFileStatus3);

file.delete();

const readFileStatus4 = await file.read('users', 'petras.json');
console.log(readFileStatus4);