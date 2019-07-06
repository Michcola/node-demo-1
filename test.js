let fs = require('fs')

let data = fs.readFileSync('./test1.txt') //同步的,不需要回调
console.log(data.toString())