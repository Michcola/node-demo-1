let fs = require('fs')

fs.readFile('./test1.txt',(err,data)=>{

    console.log(err)
    console.log(data.toString())
})