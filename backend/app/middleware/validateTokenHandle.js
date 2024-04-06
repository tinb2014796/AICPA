const Error = require("../api-error");
const jwt = require("jsonwebtoken");

exports.validateToken = async(req, res, next) => {
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
}