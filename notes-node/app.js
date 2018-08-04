console.log('Starting app')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

let res = notes.addNote()
let sum = notes.add(3, 6)
console.log(res)
console.log(sum)