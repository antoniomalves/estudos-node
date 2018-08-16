console.log('Starting notes.js')

const fs = require('fs')

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)  
  } catch (error) {
    return []  
  }
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes)) 
}

let addNote = (title, body) => {
  //console.log('Adding note', title, body)
  let notes = fetchNotes()
  let note = {
    title, 
    body,
  }

  let duplicateNotes = notes.filter((note) => note.title === title); 

  if(duplicateNotes.length === 0){
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

let getAll =() =>{
  console.log('Getting all notes')
}

let getNote = (title) => {
  //console.log('Reading note', title)
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => {
    return note.title === title;
  });
  return filteredNotes[0]
};

let removeNote = (title) => {
  //fetch notes
  var notes = fetchNotes();
  //filter notes, removing the one with title of argument
  var filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
}