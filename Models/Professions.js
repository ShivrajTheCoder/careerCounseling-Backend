const { default: mongoose } = require("mongoose");

const Schema=mongoose.Schema;
const professionSchema=new Schema({
    name:{
        type:String,
        minLength:5,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },
    description:{
        type:String,
        minLength:20,
        required:true
    },
    stream:{
        type:String,
        enum:["science","commerce","arts"],
        required:true,
    },
})

module.exports=mongoose.model("Professsion",professionSchema);