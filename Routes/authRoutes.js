const express=require('express');
const router=express.Router();
const Auth=require("../Controllers/authController");

router.route("/signup")
    .post(Auth.Signup)
router.route("/login")
    .post(Auth.Login)


module.exports=router;