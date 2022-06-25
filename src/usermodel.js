const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    usertype:{
        type:String,
        required:true,
        enum: ["admin", "customer", "moderator"]
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});
module.exports = mongoose.model("valuenable", userSchema);