const mongoose= require("mongoose");
const UserSchema= mongoose.Schema({
    username:{
        type: String,
        required: true,
        },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
});
mongoose.exports= mongoose.model("User",UserSchema);