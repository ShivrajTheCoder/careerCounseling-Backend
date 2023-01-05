const Colleges = require("../Models/Colleges");
const Courses = require("../Models/Courses");
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

exp.getAllColleges=async (req,res,next)=>{
    await Colleges.find({})
    .then(result=>{
        // console.log(result);
        if(result.length>0){
            return res.status(200).json({
                result
            })
        }
        return res.status(204).json({
            message:"No college Found"
        })
    })
    .catch(error=>{
        return res.status(500).json({
            message:"Internal Server Error",
            error
        })
    })
 
}
exp.getAllCourses=async (req,res,next)=>{
    await Courses.find({})
    .then(result=>{
        // console.log(result);
        if(result.length>0){
            return res.status(200).json({
                result
            })
        }
        return res.status(204).json({
            message:"No college Found"
        })
    })
    .catch(error=>{
        return res.status(500).json({
            message:"Internal Server Error",
            error
        })
    })
 
}

exp.getCollege=async(req,res,next)=>{
    const {id}=req.params;
    await Colleges.findById(id)
        .then(response=>{
            if(response.lenght<1){
                return res.status(404).json({
                    message:"No college found"
                })
            }
            return res.status(200).json({
                response
            })
        })
        .catch(error=>{
            return res.status(500).json({
                message:"Internal Server Error"
            })
        })
}
exp.getCourse=async(req,res,next)=>{
    const {id}=req.params;
    await Courses.findById(id)
        .then(response=>{
            if(response.lenght<1){
                return res.status(404).json({
                    message:"No college found"
                })
            }
            return res.status(200).json({
                response
            })
        })
        .catch(error=>{
            return res.status(500).json({
                message:"Internal Server Error"
            })
        })
}