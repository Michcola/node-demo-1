let http = require('http')

let server = http.createServer(function (req,res){
    console.log(req.url)
    
})
server.listen(9999)
console.log('9999')