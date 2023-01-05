const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const College=require("./Colleges");
const User=require("./User");
const applicationSchema=new Schema({
    applicant:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    college:{
        type:Schema.Types.ObjectId,
        ref:"College",
        required:true
    }
})

module.exports=mongoose.model("Application",applicationSchema);
