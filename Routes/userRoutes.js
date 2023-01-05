const express=require('express');
const router=express.Router();
const User=require("../Components/userComponent");
router.route("/:userId/updateprofile")
    .post(User.UpdateDetails);

router.route("/:userId/getuserdetails")
    .get(User.profileDetails);

    
module.exports=router;