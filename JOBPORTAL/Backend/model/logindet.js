var mongoose = require('mongoose');
var schema = mongoose.Schema({
    Name:String,
    Email:String,
    phoneno:Number,
    qualification:String,
    Password:String,
    Role:String
})
 var LoginModel = mongoose.model("login",schema);
 module.exports=LoginModel;