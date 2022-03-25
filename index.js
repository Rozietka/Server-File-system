import { file } from "./lib/file.js";

const status = await file.create('users', 'petras.json', {
    name: 'Petras'
});

console.log(status);

file.read();
file.update();
file.read();
file.delete();
file.read();