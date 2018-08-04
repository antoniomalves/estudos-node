console.log('Starting app')

const fs = require('fs')  
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

console.log(_.isString('Antonio'))

let filteredArray = _.uniq(['Antonio', 1, 'Antonio', 1, 2, 3, 4])
console.log(filteredArray)