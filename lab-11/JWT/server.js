var express=require("express")
var jwt = require("jsonwebtoken")
var app=new express()
var secret="cvr college"
var students=[
    {
        id:1,
        name:"shirisha"
    },
    {
        id:2,
        name:"snigggy"
    }
]
app.get("/students",verifyToken,(req,res)=>{
    res.send(students)
})
app.post("/login",(req,res)=>{
   const user={
       username:"cvr",
       password:"itdept"
   }
jwt.sign({user:user},secret,(err,token)=>{
    res.send({token:token});
})
})
app.get("/",(req,res)=>{
    res.send("This is home page")
})
function verifyToken(req,res,next){
    let token=req.headers['authorization'];
    token=token.split(' ')[1]
    if(token){
        jwt.verify(token,secret,(err,decoded)=>{
            if(err){
                return res.json({
                    success:false,
                    message:'Token is not valid'
                });
            }
            else{
                next();
            }
        })
    }
    
}
app.listen(3000,()=>{
    console.log("server started")
})
