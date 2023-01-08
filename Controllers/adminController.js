const exp = module.exports;
const Colleges = require("../Models/Colleges");
const CounsellingRequest = require("../Models/CounsellingRequest");
const Course = require("../Models/Courses");
const Professions = require("../Models/Professions");
const User = require("../Models/User");

exp.addCourse = async (req, res, next) => {
    // console.log(req.body);
    await Course.find({ name: req.body.name })
        .then(async result => {
            if (result.length > 0) {
                return res.status(409).json({
                    message: "course already exists",
                })
            }
            const course = new Course(req.body);

            // console.log(course);
            await course.save()
                .then(respnse => {
                    return res.status(201).json({
                        message: "Course added"
                    })
                })
                .catch(error => {
                    return res.status(500).json({
                        error,
                        message: "Internal server error"
                    })
                })
        })
        .catch(error => {
            return res.status(500).json({
                error,
                message: "Internal server error"
            })
        })
}

exp.addCollege = async (req, res, next) => {
    console.log(req.body.coursesOffered);
    const courses = req.body.coursesOffered;
    // console.log(courseOffered);
    await Colleges.find({ name: req.body.name })
        .then(async result => {
            if (result.length > 0) {
                return res.status(409).json({
                    message: "College Already Exists"
                })
            }
            const college = new Colleges({
                ...req.body, coursesOffered: courses
            })
            console.log(college);
            await college.save()
                .then(result => {
                    return res.status(201).json({
                        message: "College added"
                    })
                })
                .catch(error => {
                    return res.status(500).json({
                        message: "Internal Server Error",
                        error
                    })
                })
        }).catch(error => {
            return res.status(500).json({
                message: "Internal Server Error",
                error
            })
        })
}

exp.addProfession = async (req, res, next) => {
    console.log(req.body);
    await Professions.find({ name: req.body.name })
        .then(async result => {
            if (result.length > 0) {
                return res.status(409).json({
                    message: "Profession is already added",
                })
            }
            const profession = new Professions({...req.body});
            console.log(profession);
            await profession.save()
                .then(response => {
                    return res.status(201).json({
                        message: "Profession added",
                    })
                })
                .catch(error => {
                    return res.status(500).json({
                        error,
                        message: "Internal server error"
                    })
                })
        })
        .catch(error => {
            return res.status(500).json({
                error,
                message: "Internal server error"
            })
        })
}

exp.getWebDetails=async(req,res,next)=>{
    let data={};
    await Colleges.find({})
        .then(result=>{
            if(result.length<1){
                return res.status(404).json({
                    message:"Colleges not found",
                })
            }
            data.collegeCount=result.length;
        })
        .catch(err=>{
            return res.status(500).json({
                err,
                message:"Internal Server error"
            })
        })
    await Course.find({})
        .then(result=>{
            if(result.length<1){
                return res.status(404).json({
                    message:"Courses not found",
                })
            }
            data.courseCount=result.length;
        })
        .catch(err=>{
            return res.status(500).json({
                err,
                message:"Internal Server error"
            })
        })
        await Professions.find({})
        .then(result=>{
            if(result.length<1){
                return res.status(404).json({
                    message:"Professions not found",
                })
            }
            data.professionCount=result.length;
        })
        .catch(err=>{
            return res.status(500).json({
                err,
                message:"Internal Server error"
            })
        })
        res.status(200).json({
            data
        })
}

exp.getAllRequests=async(req,res,next)=>{
    await CounsellingRequest.find({})
        .then(response=>{
            if(response.length <1){
                return res.status(404).json({
                    message:"No requests found"
                })
            }
            return res.status(200).json({
                response
            })
        })
        .catch(error=>{
            return res.status(500).json({
                message:"Internal server error"
            })
        })
}

exp.acceptRequest=async(req,res,next)=>{
    const {requestId}=req.params;
    // console.log(requestId,req.body);
    const {callLink}=req.body;
    await CounsellingRequest.findByIdAndUpdate(requestId,{callLink})
        .then(response=>{
            return res.status(200).json({
                message:"Link sent"
            })
        })
        .catch(error=>{
            return res.status(500).json({
                message:"Internal Server Error",
            })
        })
}

exp.getUserDetails=async(req,res,next)=>{
    const {userId}=req.params;
    User.findById(userId)
        .then(result=>{
            if(result.length <1){
                return res.status(404).json({
                    message:"User Not found"
                })
            }
            return res.status(200).json({
                result
            })
        })
        .catch(error=>{
            return res.status(500).json({
                message:"Internal server error",
                error
            })
        })
}