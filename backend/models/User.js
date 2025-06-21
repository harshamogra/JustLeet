import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxlength:50
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    leetcodeId:{
        type:String,
    },
    planText:{
        type:String,
    },
}, {timestamps:true});

export default mongoose.model("User", userSchema);
