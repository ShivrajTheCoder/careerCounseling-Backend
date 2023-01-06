const jwt=require("jsonwebtoken");

module.exports=(req,res,next)=>{
    // console.log("Heee");
    key=process.env.JWT_ADMIN_KEY;
    try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, key)
        // console.log(decoded);
        req.userData = decoded;
        next();
    }
    catch (e) {
        return res.status(401).json({
            message: "You are not authorized",
        })
    }
}