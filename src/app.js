const express=require("express");
const connectDB=require("./config/database")
const User=require("./models/User");
const app=express();
connectDB().then(()=>{
    console.log("database established successfully");
    app.listen(3000,()=>{

    console.log("Server is listening on port 3000");
})
}).catch((err)=>{
    console.log("something went wrong");
})
app.post("/user",async(req,res)=>{
    const userobj={
        firstName:"black",
        lastName:"tiger",
        emailId:"blackTiger143@gmail.com",
        password:"black@1234",
    }
    const user=new User(userobj);
    await user.save();
    res.send("user data saved successfully");
})





