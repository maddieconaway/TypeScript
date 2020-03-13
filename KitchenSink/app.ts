export {};
// my name, number of states, and 9
let myName: string = "Maddie Conaway";
const numofstates: number = 50;
let nbr: number = 5 + 4;
let veggieArray: Array<string> = ["green beans", "tomato", "asperagus", "beans"];
let memberList: Array<{name:string, age:number}> = [
    { name: "Maddie", age: 40 },
    { name: "David", age: 17 },
    { name: "Candace", age: 20 },
    { name: "Savvy", age: 24 },
    { name: "Levi", age: 30 }
];

console.log(sayHello());

listVeggies();

let j: number = 0;
while (j < 5) {
    checkAge(memberList[j].name, memberList[j].age);
    j++;
}

let k: number = getLength("Hello World");
if (k % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!")
}

let nameArray: Array<string> = ["Maddie", "Josie", "Alex", "Alden", "Hanna"];

let nameLoop: number;
let lyricLoop: number;
for (nameLoop = 0; nameLoop < nameArray.length; nameLoop++) {
    console.log(nameArray[nameLoop].toUpperCase() + ":");
    for (lyricLoop = 99; lyricLoop > 0; lyricLoop--) {
        console.log(lyricFormat(lyricLoop) + " in the file, " + lyricFormat(lyricLoop) + "; " +
            nameArray[nameLoop] + " strikes one out, clears it all out, " +
            lyricFormat(lyricLoop - 1) + " in the file");
    }
}

function lyricFormat(lyricNbr) {
    let lineStr : string;
    const ofCode = "of code";

    if (lyricNbr == 1) {
        lineStr = " line ";
    } else {
        lineStr = " lines ";
    }
    return lyricNbr + lineStr + ofCode;

}

function sayHello() {
    return "Hello World!";
}

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

function listVeggies() {
    let i : number;
    for (i = 0; i < veggieArray.length; i++) {
        console.log(veggieArray[i]);
    }
}

function getLength(inStr) {
    return inStr.length;
}