"use strict"
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('n');


//var a = parseInt(lines.shift());
//var b = parseInt(lines.shift());

const prompt = require('prompt-sync')();
let a = Number(prompt());
let b = 3;

console.log('X = '+(a+b));