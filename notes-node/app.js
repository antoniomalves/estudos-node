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
  notes.addNote(argv.title, argv.body)
}else if(_.isEqual('list', command)){
  //node app.js list
  notes.getAll()
}else if(_.isEqual('read', command)){
  //node app.js read --title "secret"
  notes.getNote(argv.title)
}else if(_.isEqual('remove', command)){
  notes.removeNote(argv.title)
}else{
  console.log('Command not found')
}
