const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const courseSchema=new Schema({
    name:{
        type:String,
        required:true,
        minLength:5,
    },
    stream:{
        type:String,
        enum:["science","commerce","arts"],
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true,
    }
})

module.exports=mongoose.model("Course",courseSchema);