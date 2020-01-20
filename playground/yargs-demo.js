const chalk = require("chalk");
const yargs = require("yargs");

yargs.version = "1.1.0";

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
  handler: argv =>
    console.log(
      chalk.rgb(
        150,
        50,
        200
      )(`Title: ${argv.title} \n${chalk.red(`Body: ${argv.body}`)}`)
    )
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

yargs.parse();
// prints it out without doubling the way console.log(yargs.argv) does

// console.log(yargs.argv);
