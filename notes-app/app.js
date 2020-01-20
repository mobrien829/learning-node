const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

// Add

yargs.command({
  command: "add",
  describe: "adds a new note",
  //   builders are objects that hold options for a command
  builder: {
    title: {
      describe: "title of note",
      demandOption: true,
      type: "string"
      //   demandOption is like :requires in Rails, it determines if option is required for valid input
    },
    body: {
      describe: "contents of note",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => notes.addNote(argv.title, argv.body)
});

// Remove

yargs.command({
  command: "remove",
  describe: "removes a note",
  builder: {
    title: {
      describe: "title of note",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => notes.removeNote(argv.title)
});

// Read

yargs.command({
  command: "read",
  describe: "read a note",
  handler: () => console.log(chalk.blue("Reading the note"))
});

// List

yargs.command({
  command: "list",
  describe: "lists all notes",
  handler: () => console.log(chalk.rgb(10, 250, 200)("Listing all notes"))
});

yargs.parse();
// prints it out without doubling the way console.log(yargs.argv) does

// console.log(yargs.argv);
