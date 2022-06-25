const jwt = require("jsonwebtoken")

const authentication = async  function (req, res, next) {
    try {
        const token = req.headers['x-api-key']
        if (!token)
            return res.status(403).send({ status: false, msg: "Missing authentication token request" })

       const decodedToken = await jwt.verify(token, 'assesment')
       if (!decodedToken){
           return res.status(403).send({status:false,msg:"invalid authentication request"})
       }
       if(req.params.id!=decodedToken.userId) return res.status(400).send({status:false,msg:"cannot allow to access another user"})
       next()
    }catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}



module.exports.authentication=authentication