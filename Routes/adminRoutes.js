const express=require("express");
const router=express.Router();
const Admin=require("../Components/adminComponent");
router.route("/addcourse")
    .post(Admin.addCourse);

module.exports=router;