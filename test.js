const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res)=>{
    let p = path.join(__dirname, './index.html')
    res.sendFile(p)
})

app.get('/frank',(req,res)=>{
    res.send('hi')
})

app.use('/static',express.static(path.join(__dirname, 'public')))

app.listen(9999,()=> console.log('express 9999'))