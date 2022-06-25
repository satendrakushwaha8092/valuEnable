const express = require('express');
const router = express.Router();
const usercontroller = require("./usercontroller")
const authentication = require("./auth")

router.post("/register", usercontroller.createUser)

router.post("/login", usercontroller.loginUser)

router.put("/update/:id",authentication.authentication, usercontroller.updateuser)

router.get("/logout",usercontroller.logout)


module.exports = router;