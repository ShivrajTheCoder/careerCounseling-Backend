const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Courses=require('./Courses');
const collegeSchema=new Schema({
    name:{
        type:String,
        required:true,
        minLength:5,
    },
    type:{
        type:String,
        enum:["Public","Private"],
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    official_site:{
        type:String,
    },
    location:{
        type:String,
        required:true
    },
    coursesOffered:[{
        type: Schema.Types.ObjectId,
        ref:"Courses"
    }]
})

module.exports=mongoose.model("College",collegeSchema);