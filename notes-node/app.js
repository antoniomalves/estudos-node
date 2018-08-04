console.log('Starting app')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

let user = os.userInfo()

fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}\n`)