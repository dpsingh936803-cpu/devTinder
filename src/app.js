const express=require("express");
const connectDB=require("./config/database")
const app=express();
connectDB().then(()=>{
    console.log("database established successfully");
    app.listen(3000,()=>{

    console.log("Server is listening on port 3000");
})
}).catch((err)=>{
    console.log("something went wrong");
})
app.get("/",(req,res)=>{
    res.send("welcome to tinder .com");
})




