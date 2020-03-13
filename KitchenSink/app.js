"use strict";
exports.__esModule = true;
// my name, number of states, and 9
var myName = "Maddie Conaway";
var numofstates = 50;
var nbr = 5 + 4;
var veggieArray = ["green beans", "tomato", "asperagus", "beans"];
var memberList = [
    { name: "Maddie", age: 40 },
    { name: "David", age: 17 },
    { name: "Candace", age: 20 },
    { name: "Savvy", age: 24 },
    { name: "Levi", age: 30 }
];
console.log(sayHello());
listVeggies();
var j = 0;
while (j < 5) {
    checkAge(memberList[j].name, memberList[j].age);
    j++;
}
var k = getLength("Hello World");
if (k % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
var nameArray = ["Maddie", "Josie", "Alex", "Alden", "Hanna"];
var nameLoop;
var lyricLoop;
for (nameLoop = 0; nameLoop < nameArray.length; nameLoop++) {
    console.log(nameArray[nameLoop].toUpperCase() + ":");
    for (lyricLoop = 99; lyricLoop > 0; lyricLoop--) {
        console.log(lyricFormat(lyricLoop) + " in the file, " + lyricFormat(lyricLoop) + "; " +
            nameArray[nameLoop] + " strikes one out, clears it all out, " +
            lyricFormat(lyricLoop - 1) + " in the file");
    }
}
function lyricFormat(lyricNbr) {
    var lineStr;
    var ofCode = "of code";
    if (lyricNbr == 1) {
        lineStr = " line ";
    }
    else {
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
    var i;
    for (i = 0; i < veggieArray.length; i++) {
        console.log(veggieArray[i]);
    }
}
function getLength(inStr) {
    return inStr.length;
}
