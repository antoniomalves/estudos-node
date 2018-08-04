console.log('Starting app')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

let res = notes.addNote()

console.log(res)