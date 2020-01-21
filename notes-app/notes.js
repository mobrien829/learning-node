const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    //   returns empty array if no data
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green("new note added"));
  } else {
    console.log(chalk.red("note title taken"));
  }

  console.log(notes);
};

const removeNote = title => {
  const notes = loadNotes();
  const newArray = notes.filter(note => !(note.title === title));

  if (newArray.length === notes.length) {
    console.log(chalk.bgKeyword("red")("couldn't find note with that title"));
  } else {
    saveNotes(newArray);
    console.log(chalk.bgKeyword("green")("note removed"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.underline.cyan("Your notes:"));
  notes.forEach(note => console.log(chalk.underline(`${note.title}`)));
};

const readNote = title => {
  const notes = loadNotes();
  const foundNote = notes.find(note => note.title === title);
  if (foundNote) {
    console.log(
      chalk.inverse.cyan(`Title: ${foundNote.title}\nBody: ${foundNote.body}`)
    );
  } else {
    console.log(chalk.red(`No note found with the title "${title}"`));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
