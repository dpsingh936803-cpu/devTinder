const express=require("express");
const connectDB=require("./config/database")
const User=require("./models/User");
const onlyOneUser=require("./middlewares/userValidation");
const app=express();
app.use(express.json());
connectDB().then(()=>{
    console.log("database established successfully");
    app.listen(3000,()=>{

    console.log("Server is listening on port 3000");
})
}).catch((err)=>{
    console.log("something went wrong");
})

//post api
app.post("/user",onlyOneUser,async(req,res)=>{
    // const userobj={
    //     firstName:"black",
    //     lastName:"tiger",
    //     emailId:"blackTiger143@gmail.com",
    //     password:"black@1234",
    // }
    // const userobj=req.body;
    try{
const user=new User(req.body);

    await user.save();
    res.send("user data saved successfully");
    }catch(err){
        console.log(err);
        res.send("something went wrong");
    }
    
})
//get api
//find by email
app.get("/user",async(req,res)=>{
    const email=req.body.emailId;
    try{
//   const data=await User.find({emailId:email});
const data=await User.findOne({emailId:email});
    // if(data.length===0){
    //     res.send("no user found");
    // }
    if(!data){
        res.send("no user found")
    }
    else{
        
        res.send(data);
    }
    }catch(err){
        console.log("something went wrong");
    }
  
})

// feed all the users
app.get("/feed",async(req,res)=>{
    try{
        const data=await User.find({});
        res.send(data);

    }catch(err){
        console.log("Error:".err.message);
    }
})

// find user by id 
app.get("/user/id",async(req,res)=>{
    try{
        const userId=req.body._id;
        const user=await User.findById({_id:userId});
        res.send(user);
        

    }catch(err){
        console.log("something went wrong",err.message);
    }
})
// delete api
app.delete("/user",async(req,res)=>{
    try{
        const user=await User.findById(req.body._id);
        if(!user){
            res.status(400).send("no user exixts with this id");
        }
        const deletedUser=await User.deleteOne(user);
        console.log(deletedUser);
        res.send(deletedUser);
        console.log("user deleted successfully");
    }catch(err){
console.log("something went wrong");
    }
})
app.patch("/user",async(req,res)=>{
    const data=req.body;
    const userId=req.body.userId;
    try{
        const user=await User.findOneAndUpdate({_id:userId},data,{
            returnDocument:"after"
        });
        console.log(user);
        res.send("data upated successfully");
    }catch(err){
        console.log("something went wrong",err.message);
    }
})






