// const fs = require("fs");
// fs.writeFileSync("notes.txt", "This file was created by Node.js!");
// note: first arg is the name of the file, second, is the contents. if file doesn't exist,
// then it will be created. if file exists, it'll be overwritten

// fs.appendFileSync("notes.txt", "\nHi I am the appended info!!!!");

// ********************************

// const utils =
// const add = require("./utils.js");

// const name = "Michael";

// console.log(add);

// const sum = add(1, 2);

// console.log(sum);

// ****************************
const chalk = require("chalk");

const validator = require("validator");
// import validator from "validator";
const getNotes = require("./notes.js");
const msg = getNotes();

console.log(msg);
console.log(validator.isEmail("mobrien@lol.edu"));
console.log(validator.isURL("twitch.tv"));
console.log(chalk.bgRgb(15, 100, 50).bold.underline.inverse("Success!!"));
