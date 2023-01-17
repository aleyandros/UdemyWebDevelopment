//jshint esversion:6

//https://www.npmjs.com
const fs = require("fs");

fs.copyFileSync("file1-origin.txt", "file2-dest.txt");

var superheroes = require("superheroes");
var mySuperHeroeName = superheroes.random();

console.log(mySuperHeroeName);

var supervillains = require("supervillains");
var mySuperVillainName = supervillains.random();

console.log(mySuperVillainName);
