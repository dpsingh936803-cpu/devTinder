const express=require("express");
const app=express();
app.use("/user",(req,res,next)=>{
    // res.send("user 1");
    next();

},(req,res,next)=>{
    res.send("user2");
    // next();
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})
