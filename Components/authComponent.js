const User = require("../Models/User");
const jwt = require("jsonwebtoken");
// library import
const bcrypt = require("bcrypt");
//exports 
const exp = module.exports;

exp.Login = async (req, res, next) => {
    // console.log(req.body);
    const { phonenumber, password } = req.body;
    await User.findOne({ phonenumber })
        .then(result => {
            // console.log(result);
            if (!result) {
                return res.status(404).json({
                    message: "User doesn't exist",
                })
            }
            bcrypt.compare(password, result.password, (err, resp) => {
                if (err) {
                    return res.status(401).json({
                        message: "Username or Password is incorrect"
                    })
                }
                if (resp) {
                    let token;
                    // console.log(result);
                    if (result.admin == false) {
                         token = jwt.sign({
                            phonenumber: result.phonenumber,
                            userId: result._id
                        },
                            process.env.JWT_USER_KEY,
                            {
                                expiresIn: "1h",
                            }
                        )
                    }
                    else{
                         token = jwt.sign({
                            phonenumber: result.phonenumber,
                            userId: result._id
                        },
                            process.env.JWT_ADMIN_KEY,
                            {
                                expiresIn: "1h",
                            }
                        )
                    }
                    // console.log(resp._id);
                    return res.status(200).json({
                        message: "Signed In",
                        token,
                        userId: result._id,
                        username: result.username,
                        isAdmin: result.admin
                    })
                }
                return res.status(500).json({
                    message: "Unable to signin try again later",
                })
            })
        })
}


exp.Signup = async (req, res, next) => {
    // console.log(req.body);
    const { username, phonenumber, password } = req.body;
    await User.find({ phonenumber })
        .then(result => {
            if (result.length > 0) {
                return res.status(409).json({
                    message: "User already exists",
                })
            }

            bcrypt.hash(password, 10, async (err, result) => {
                if (err) {
                    return res.status(500).json({
                        error: err,
                    })
                }
                else {
                    const user = new User({
                        username, phonenumber, password: result
                    })
                    await user.save();
                    return res.status(201).json({
                        message: "User created"
                    })
                }
            })

        })
        .catch(error => {
            return res.status(500).json({
                message: "server error",
                error
            })
        })
}