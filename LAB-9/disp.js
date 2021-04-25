var http=require("http");
var mod= require("./date")
var obj=mod.datedisplay();
console.log(obj.output);
var http=require("http")
var server =http.createServer(function(req,res){
    res.writeHead(200,{contentType:"text/html"})
    res.write("<h1>Current Date:</h1>")
    res.write(obj.output)
    res.write("<h1>Current Time:</h1>")
    res.write(obj.time)
    res.end()
})
server.listen(8038)
console.log("Node.js server started");