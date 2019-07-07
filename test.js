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
app.listen(9999,()=> console.log('express 9999'))