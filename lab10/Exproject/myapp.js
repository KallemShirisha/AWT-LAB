var express=require("express")
var app=new express()
app.get("/",function(req,res){
    console.log("First Get Requests")
    res.write("First get request");
    res.end()
})
app.post("/",function(req,res){
    console.log("First post Requests")
    res.write("First get request");
    res.end()
})
app.put("/",function(req,res){
    console.log("First put Requests")
    res.write("First get request");
    res.end()
})
app.delete("/",function(req,res){
    console.log("First delete Requests")
    res.write("First get request");
    res.end()
})
app.listen(3025,()=>{
    console.log('server started')
})
