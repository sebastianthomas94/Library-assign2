var mongoose=require("mongoose");
var schema= mongoose.Schema;

var idschema=new schema({
    "ID":String,
    "password":String,
    "Email":String,
    "Name":String,
    "Role":String

});
var idmodel=mongoose.model("User", idschema,"User");

module.exports=idmodel;