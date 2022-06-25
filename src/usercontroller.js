const userModel = require("./usermodel")
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
let flage=0

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
}

const isValidData2 = function (value) {
    if (typeof (value) === "string" && (value).trim().length === 0) return false
    return true
}


const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}

// ============================================CREATE USER===============================================

const createUser = async function (req, res) {
    try {
        let data = req.body

        if (Object.keys(data) == 0) return res.status(400).send({
            status: false,
            msg: "No input provided"
        })

        if (!isValid(data.usertype)) {
            return res.status(400).send({
                status: false,
                msg: "usertype is required"
            })
        }


        if (!isValid(data.fname)) {
            return res.status(400).send({
                status: false,
                msg: "fname is required"
            })
        }


        if (!isValid(data.lname)) {
            return res.status(400).send({
                status: false,
                msg: "lname is required"
            })
        }

        if (!isValid(data.phone)) {
            return res.status(400).send({
                status: false,
                msg: "phone number is required"
            })
        }

        if (!/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(data.phone)) {
            return res.status(400).send({
                status: false,
                msg: "valid phone number is required"
            })
        }

        let dupliPhone = await userModel.findOne({ phone: data.phone })
        if (dupliPhone) {
            return res.status(400).send({
                status: false,
                msg: "phone number already exits"
            })
        }

        if (!isValid(data.email)) {
            return res.status(400).send({
                status: false,
                msg: "email is required"
            })
        }

        if (!/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/.test(data.email)) {
            return res.status(400).send({
                status: false,
                msg: "valid email is required"
            })
        }

        let dupliEmail = await userModel.findOne({ email: data.email })
        if (dupliEmail) {
            return res.status(400).send({
                status: false,
                msg: "email is already exists"
            })
        }

        if (!isValid(data.password)) {
            return res.status(400).send({
                status: false,
                msg: "password is required"
            })
        }


        if (data.password.length < 8 || data.password.length > 15) {
            return res.status(400).send({
                status: false,
                msg: "passowrd min length is 8 and max length is 15"
            })
        }


        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);


        // ============================================================================================

        let savedData = await userModel.create(data)
        res.status(201).send({
            status: true,
            msg: "user created successfully",
            msg2: savedData
        })


    } catch (error) {
        res.status(500).send({
            status: false,
            msg: error.message
        })
    }
}

// ============================================LOGIN USER===============================================

const loginUser = async function (req, res) {
    try {
        let user = req.body

        if (Object.keys(user) == 0) {
            return res.status(400).send({
                status: false,
                msg: "please provide data"
            })
        }

        let usertype=req.body.usertype
        let email = req.body.email
        let password = req.body.password

        if (!usertype) {
            return res.status(400).send({
                status: false,
                msg: "usertype is required"
            })
        }


        if (!email) {
            return res.status(400).send({
                status: false,
                msg: "email is required"
            })
        }


        if (!password) {
            return res.status(400).send({
                status: false,
                msg: "password is required"
            })
        }


        let userEmailFind = await userModel.findOne({ email: email })
        if (!userEmailFind) {
            return res.status(400).send({
                status: false,
                msg: "email or password are not matching"
            })
        };


        bcrypt.compare(password, userEmailFind.password, function (err, result) {
            if (result) {
                let token = jwt.sign({
                    userId: userEmailFind._id,
                }, "assesment", { expiresIn: "1800s" });
                flage=1
                res.status(200).send({
                    status: true,
                    message: "user login successfully",
                    data: {
                        userId: userEmailFind._id,
                        token: token
                    }
                });
            } else {
                return res.status(401).send({
                    status: true,
                    message: "plz provide correct password"
                })
            }
        })


    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: error.message
        })
    }

}

// ============================================UPDATE USER===============================================

const updateuser = async function (req, res) {
    try {
        if(flage==1){
        const userId = req.params.id
        if (!isValidObjectId(userId)) {
            return res.status(400).send({
                status: false,
                msg: "id is invalid"
            })
        }
        const findUser = await userModel.findById({ _id: userId })
        if (!findUser) {
            return res.status(404).send({
                status: false,
                msg: "user is  not found"
            })
        }



        const updatedData=req.body
        if (Object.keys(updatedData) == 0) return res.status(400).send({
            status: false,
            msg: "No input provided"
        })

        if (!isValidData2(updatedData.fname)) {
            return res.status(400).send({
                status: false,
                Message: "First name is required"
            })
        }




        if (!isValidData2(updatedData.lname)) {
            return res.status(400).send({
                status: false,
                Message: "Last name is required"
            })
        }

        if (updatedData.phone) {
            if (!(/^([+]\d{2})?\d{10}$/.test(updatedData.phone))) return res.status(400).send({
                status: false,
                msg: "please provide a valid phone number"
            })

            const isPhoneUsed = await userModel.findOne({ phone: updatedData.phone })
            if (isPhoneUsed) {
                return res.status(400).send({
                    status: false,
                    msg: "phone number must be unique"
                })
            }
        }


        if (!isValidData2(updatedData.email)) {
            return res.status(400).send({
                status: false,
                Message: "email is required"
            })
        }

        if (updatedData.email) {
            if (!(/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/.test(updatedData.email))) return res.status(400).send({
                status: false,
                msg: "Please provide a valid email"
            });

            const isEmailUsed = await userModel.findOne({ email: updatedData.email })
            if (isEmailUsed) {
                return res.status(400).send({ status: false, msg: "email must be unique" })
            }
        }

        //======================================password validation-====================================

        if (!isValidData2(updatedData.password)) {
            return res.status(400).send({
                status: false,
                Message: "pasword is required"
            })
        }

        if (updatedData.password) {

            if (updatedData.password.length < 8 || updatedData.password.length > 15) {
                return res.status(400).send({
                    status: false,
                    msg: "passowrd min length is 8 and max length is 15"
                })
            }

            const encryptPassword = await bcrypt.hash(updatedData.password, saltRounds)

            updatedData.password = encryptPassword
        }

        const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, updatedData, { new: true })

        return res.status(200).send({ status: true, message: "User profile updated", data: updatedUser });
    }
    else{
        return res.status(400).send({ status:false, message: "please login"});
    }
    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: error.message
        })
    }

}

// ============================================LOGOUT USER===============================================

const logout= function (req,res){
    flage=0
    return res.status(200).send({ status: true, message: "User successfuly logout"});

}
module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.updateuser = updateuser
module.exports.logout = logout



