// const users = ['Petras', 'Maryte', 'Jonas', 'Ona'];

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(`${i + 1}) Studentas: ${user}.`);
// }

//arba

// let i = 0;
// for (const user of users) {
//     console.log(`${++i}) Studentas: ${user}.`);
// } 

// 1) Studentas: Petras.
// 2) Studentas: Maryte.
// 3) Studentas: Jonas.
// 4) Studentas: Ona.

// number 2

const users = [
    { name: 'Petras', age: 99, isMarried: true },
    { name: 'Maryte', age: 87, isMarried: false },
    { name: 'Jonas', age: 66, isMarried: false },
    { name: 'Ona', age: 54, isMarried: true },
];

let i = 0;
for (const user of users) {
    const married = user.isMarried ? '' : 'not ';
    const fileName = user.name.toLowerCase() + '.json'  
    console.log(`${++i}) Student ${user.name} is ${user.age} years old and is
     ${married}married (${fileName}).`);
}

// 1) Student Petras is 99 years old and is married.
// 2) Student Maryte is 87 years old and is not married.

// kiekviena user objekta irastyi i atskira faila, kurie turetu buti 
// talpinami `.data/users' folderyje. Failo pavadinimas
// attitinka sablona `vardenis.json` (mazosios raides)