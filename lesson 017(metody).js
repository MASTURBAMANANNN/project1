"use strict";

const str = "teSt";
//const arr = [1, 2, 4];

//console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());

console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

const logg = "Hello World!";

//console.log(logg.slice(6, 11));-11 буква не включительно а только до нее,если указать ток первую букву то после нее все обрежется
console.log(logg.slice(6));

//console.log(logg.substring(6, 11));
console.log(logg.substr(6, 11));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
//console.log(parseInt(test));
console.log(parseFloat(test));