const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true,
        minLenght:10,
        maxLength:10
    },
    password:{
        type:String,
        required:true,
        minLenght:5
    },
    standard:{
        type:Number,
    },
    schoolname:{
        type:String,
        minLenght:5,
    },
    admin:{
        type:Boolean,
        default:false,
        required:true
    },
    hightschoolper:{
        type:Number,
    },
    intermediateper:{
        type:Number,
    },
    stream:{
        type:String,
        enum:["science","commerce","arts"]
    }
})


module.exports=mongoose.model("User",userSchema);