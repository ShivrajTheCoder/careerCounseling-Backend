const mongoose=require("mongoose");
const Schema =mongoose.Schema;
const User=require("./User");
const counsellingSchema=new Schema({
    requestee:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    callLink:{
        tyep:String,
    }
})

module.exports=mongoose.model("CounsellingRequest",counsellingSchema);