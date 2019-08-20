var express=require("express");
const router2=express.Router();


module.exports=router2;


var bodyparser=require('body-parser');
router2.use(bodyparser.urlencoded({extended:true}));



var mongoose = require('mongoose');
var url = "mongodb://localhost/Library";
var user = require("../model/users");
mongoose.connect(url,function(err,res){
    if(err) 
    throw err;
    else
    console.log("database connected to User Details..");



});



router2.post("/signup", function(req,res){
    var u1=new user();
    console.log("new User");
    u1.ID=req.body.uname;
    u1.Name=req.body.name;
    u1.password=req.body.password;
    u1.Email=req.body.Email;
    u1.Roll=req.body.Roll;
    u1.save(function(err){
        if(err)
            throw err
        else
        res.redirect("/");
    });
  
});


router2.post("/login",function(req,res){


    user.find({ID:req.body.username,password:req.body.password},function(err,result){
        if(err) throw err
        else if(result.length==0)
        {
            res.redirect("/")
        }
        else{
            res.redirect("/books")
        }
      
    });
    
});


router2.get("/",function(req,res){
    res.render("login");
});