/* let obj = {
  name : 'Antonio'
}

let stringObj = JSON.stringify(obj)
console.log(typeof stringObj)
console.log(stringObj) */



/* let personString = '{"name": "Antonio", "age": 38}'
let person = JSON.parse(personString)
console.log(typeof person)
console.log(person) */


const fs = require('fs')

let originalNote = {
  title: 'Some title',
  body: 'Some body'
}
//original NoteString
let originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

let notestring = fs.readFileSync('notes.json')
// note
let note = JSON.parse(notestring) 
console.log(typeof note)
console.log(note.title)