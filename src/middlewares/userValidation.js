const mongoose=require("mongoose");
const User=require("../models/User");
const onlyOneUser=async(req,res,next)=>{
    const emailId=req.body.emailId;
    const data=await User.find({emailId:emailId});
    if(data.length>=1){
        res.status(400).send("invalid credentials");
    }else{
        next();
    }
    


}
module.exports =onlyOneUser;