const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const streamSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    averageSalary:{
        type:Number,
    },
    description:{
        type:String,
        required:true,
    },
})