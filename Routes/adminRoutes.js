const express=require("express");
const router=express.Router();
const Admin=require("../Components/adminComponent");
router.route("/addcourse")
    .post(Admin.addCourse);

router.route("/addcollege")
.post(Admin.addCollege);

router.route("/addprofession")
    .post(Admin.addProfession);
module.exports=router;