const fs = require("fs");

fs.writeFileSync("notes.txt", "This file was created by Node.js!");

// note: first arg is the name of the file, second, is the contents. if file doesn't exist,
// then it will be created. if file exists, it'll be overwritten

fs.appendFileSync("notes.txt", "\nHi I am the appended info!!!!");
