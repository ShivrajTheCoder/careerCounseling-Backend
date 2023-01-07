const express=require('express');
const router=express.Router();
const User=require("../Controllers/userController.js");
router.route("/:userId/updateprofile")
    .post(User.UpdateDetails);

router.route("/:userId/getuserdetails")
    .get(User.profileDetails);

router.route("/getallcolleges")
    .get(User.getAllColleges)

router.route("/getallcourses")
    .get(User.getAllCourses);
router.route("/getallprofessions")
    .get(User.getAllProfessions);

router.route("/getcollege/:id")
    .get(User.getCollege);

router.route("/getcourse/:id")
    .get(User.getCourse);

router.route("/counsellingrequest/:id")
    .post(User.counsellingRequest)
    .get(User.requestStatus);

module.exports=router;