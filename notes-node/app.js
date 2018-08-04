console.log('Starting app')

const fs = require('fs')

//original line
fs.appendFile('greetings.txt', 'Hello world!')

//Option one
fs.appendFile('greetings.txt', 'Hello world!', function err(){
  if(err){
    console.log('Unable to write to file')
  }
})

//option two
fs.appendFileSync('greetings.txt', 'Hello World!')
