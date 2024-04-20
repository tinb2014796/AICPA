const express = require("express");
const user = require("../controllers/userController.js");
const jwt = require("jsonwebtoken");

const validateToken = require("../middleware/validateTokenHandle.js")

const router = express.Router();

router.route("/signup")
    .post(user.create)

router.route("/login")
    .post(user.loginUser)
    .get(user.findAll)

router.get('/current', function (req, res, next) {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        const accessTokenSercet = process.env.ACCESS_TOKEN_SECRET || 'defaultSecretValue';
        jwt.verify(token, accessTokenSercet,(err, decoded)=> {
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decoded.user;
        });

        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
})

module.exports = router;
