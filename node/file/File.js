const fs = require('fs')

// 同步
const read1 = fs.readFileSync('file/README.md', 'utf8');

console.log(read1)

fs.writeFileSync('file/WRITE1.md', read1)

// 异步
fs.readFile('file/README.md', 'utf8', (error, data) => {
    console.log(data);
    fs.writeFile('file/WRITE2.md',data,()=>{
        console.log('Write has finished')
    })
});

fs.unlink('file/WRITE1.md',()=>{
    console.log('delete WRITE1.md')
})

fs.mkdir('file/test',()=>{
    console.log('mkdir file/test')
})

fs.rmdir('file/test',()=>{
    console.log('rm file/test')
})