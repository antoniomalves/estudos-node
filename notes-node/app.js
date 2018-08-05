console.log('Starting app')

const fs = require('fs')  
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
//let command = process.argv[2]
let command = argv._[0]
console.log('Command: ', command)
console.log('Yargs', argv)

if(_.isEqual('add', command)){
  //node app.js add --title=secret --body="This is my secret"
  let note = notes.addNote(argv.title, argv.body)
  if(note){
    console.log('Note created')
    console.log('...')
    console.log(`Title : ${note.title}`)
    console.log(`Body  : ${note.body}`)
  }else{
    console.log('Note title taken')
  }
}else if(_.isEqual('list', command)){
  //node app.js list
  notes.getAll()
}else if(_.isEqual('read', command)){
  //node app.js read --title "secret"
  notes.getNote(argv.title)
}else if(_.isEqual('remove', command)){
  //node app.js remove --title "secret"
  notes.removeNote(argv.title)
}else{
  console.log('Command not found')
}
