const exp = module.exports;
const Colleges = require("../Models/Colleges");
const Course = require("../Models/Courses");

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
                    return res.status(202).json({
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