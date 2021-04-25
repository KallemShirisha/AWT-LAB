var fs = require('fs');
var data = fs.readFileSync('greet.txt');
console.log(data.toString());
var http=require("http");
var server =http.createServer(function(req,res){
    res.writeHead(200,{contentType:"text/html"})
    res.write(data.toString());
   
      res.end()
})
server.listen(8039);
console.log("Node.js server started");