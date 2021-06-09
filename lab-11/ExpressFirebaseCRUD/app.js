var express=require("express")
var firebase=require("firebase")
var app=express();
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(express.urlencoded())
const firebaseConfig = {
    apiKey: "AIzaSyAsqjreo74U2_G1BaDJgo8mcjcHn_-U-W0",
    authDomain: "myapp-87545.firebaseapp.com",
    databaseURL: "https://myapp-87545-default-rtdb.firebaseio.com",
    projectId: "myapp-87545",
    storageBucket: "myapp-87545.appspot.com",
    messagingSenderId: "781148574413",
    appId: "1:781148574413:web:3f281a82cbd4038992cf84"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var dbRef=firebase.database().ref().child("student")

    app.get("/student",(req,res)=>{
        dbRef.once("value",(snap)=>{
            res.send(snap.val())
        })
    })
    app.get("/student/:id",(req,res)=>{
      var id=req.params.id
      dbRef.child(id).once("value",(snap)=>{
          res.send(snap.val())
      })
    })
    app.post("/addStudent",(req,res)=>{

        id=req.body.id
        dbRef.child(id).set({
            id:req.body.id,
            name:req.body.name,
            email:req.body.email
        })
        res.send("Inserted Successfully")
    })
    app.delete("/deleteStudent/:id",(req,res)=>{
        var id=req.params.id
        console.log(id);
        dbRef.child(id).remove()
        res.send("Deleted successfully")
    })
    app.put("/updateStudent/:id",(req,res)=>{
        var id=req.params.id
        console.log(id);
        dbRef.child(id).update({
            name:"sniggy",
            email:"depts@gmail.com"
        })
        res.send("Updated successfully!!")
    })
    app.listen(2022,()=>{
      console.log("Server Started.......")
    })