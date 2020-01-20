const chalk = require("chalk");
const yargs = require("yargs");

yargs.version = "1.1.0";

// Add

yargs.command({
  command: "add",
  describe: "adds a new note",
  handler: () => console.log(chalk.rgb(150, 50, 200)("Adding new note"))
});

// Remove

yargs.command({
  command: "remove",
  describe: "removes a note",
  handler: () => console.log(chalk.red("Removing a note"))
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

console.log(yargs.argv);
