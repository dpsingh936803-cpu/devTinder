const adminAuth=(req,res,next)=>{
    const token="xyz";
    if(token!=="xyz"){
        res.send("you are not a valid user");
    }else{
        next();
    }
}
module.exports={
    adminAuth
}