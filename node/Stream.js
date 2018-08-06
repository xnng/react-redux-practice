const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/README.md')
const myWriteStream = fs.createWriteStream(__dirname + '/README2.md')

myReadStream.pipe(myWriteStream)