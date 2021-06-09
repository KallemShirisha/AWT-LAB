var express=require("express")
var path=require("path")
var app=new express()
app.use(express.urlencoded())
app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"demo.html"))

})
app.get("/user/:uname:",(req,res)=>{
    res.send("user"+req.params.uname+"feteched");
   
})
app.post("/signup",(req,res)=>{
    res.send("Welcome"+req.body.uname)
})
app.get("/user",(req,res)=>{
    res.send("get method")
})
app.listen(3009,()=>{
    console.log("sever started!!")
})