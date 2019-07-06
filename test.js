let http = require('http')

let server = http.createServer(function (req,res){
    console.log(req.url)
    res.statusCode = 201
    res.write('hello')
    res.end()
})
server.listen(9999)
console.log('9999')