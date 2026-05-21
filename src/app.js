const express=require("express");
const app=express();
const {adminAuth}=require("./middlewares/auth");

app.use("/admin",adminAuth)


app.get("/admin/getAllData",(req,res)=>{
    throw new Error("something went wrogng");
    res.send("All Data Send");
    
})
app.delete("/admin/deleteUser",(req,res)=>{
    res.send("user delete sucessfully");
})


app.use("/",(err,req,res,next)=>{
    if(err){
        console.log("Error handler");
        res.status(400).send("something went wrong");
    }
})

app.listen(3000,()=>{

    console.log("Server is listening on port 3000");
})
