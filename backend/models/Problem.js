import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
        unique:true,
    },
    difficulty:{
        type:String,
        required: true,
        enum: ["Easy", "Medium", "Hard"],
    },
    status:{
        type:String,
        required:true,
        enum: ["Solved", "In Progress", "Need Revision"],
    },
    tags:{
        type:[String],
        required:true,
    },
    notes:{
        type:String,
        default:""
    },
    markedForReview:{
        type:Boolean,
        default:false,
    },
},
 {
    timestamps: true,
})

export default mongoose.model("Problem", problemSchema);