const User = require("../Models/User");

const exp=module.exports;

exp.UpdateDetails=async (req,res,next)=>{
    const {userId}=req.params;
    console.log(req.body);
    await User.findByIdAndUpdate(userId,req.body)
        .then(result=>{
            if(result.lenght<1){
                return res.status(404).json({
                    message:"User not found",
                })
            }
            console.log(result);
            return res.status(204).json({
                message:"Details Added"
            })
        })
        .catch(error=>{
            return res.status(500).json({
                message:"Internal server error",
                error
            })
        })
}

exp.profileDetails=async(req,res,next)=>{
    const {userId}=req.params;
    await User.findById(userId)
        .then(result=>{
            if(result.length <1){
                return res.status(404).json({
                    message:"User not found",
                })
            }
            return res.status(200).json({
                result,
            })
        })
        .catch(error=>{
            return res.status(500).json({
                error,
                message:"Internal server error"
            })
        })
}