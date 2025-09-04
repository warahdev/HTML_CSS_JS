"use strict"
const prompt = require('prompt-sync')();

let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);

for(let i = 2; i < 10; i++){
    let proximoNum = num1 + num2;
    console.log(proximoNum);
    num1 = num2;
    num2 = proximoNum;
}