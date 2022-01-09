const  getFlagsValue = require('./file1')

console.log(`Oi ${getFlagsValue('--name')}! ${getFlagsValue('--greeting')}`);