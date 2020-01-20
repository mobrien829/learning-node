const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => "Your notes...";

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
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
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

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
