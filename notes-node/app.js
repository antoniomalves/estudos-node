console.log('Starting app')

const fs = require('fs')  
const _ = require('lodash')

const notes = require('./notes')

let command = process.argv[2]
console.log('Command: ', command)

if(_.isEqual('add', command)){
  console.log('Adding new note')
}else if(_.isEqual('list', command)){
  console.log('Listing all notes')
}else if(_.isEqual('read', command)){
  console.log('Reading note')
}else if(_.isEqual('remove', command)){
  console.log('Removing note')
}else{
  console.log('Command not found')
}
