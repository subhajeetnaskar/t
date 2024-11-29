const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    status:{
        type:String ,
        default:"Not done",
    },
    user:{
        type:mongoos.Schema.type.ObjectId ,
        ref:"User",
        required:true,
    },
});
module.exports=mongoose.model("Todo",TodoSchemaser);