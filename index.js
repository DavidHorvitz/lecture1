import { writeFile, readFile } from 'node:fs';
import { exit } from 'node:process';
const ive = 2;
const ive1 = 2;
// function printName(name,age) {
//     console.log(`Name ${name}`, `age${age}`);
// }
// printName("david", 26);
// setTimeout((function printName() {
//     console.log("b");
// }), 3000);
// console.log("a");
const me = {
    firstName: "david",
    lastName: "Hor",
    age: 26
}
writeFile("./me.json", JSON.stringify(me), (err) => {
    if (err) {
        console.log(err);
        exit(1);
    }
    readFile("./me.json", (err, data) => {
        if (err) {
            console.error(err);
            exit(2);
        }
        console.log("%s", data);
    })

});