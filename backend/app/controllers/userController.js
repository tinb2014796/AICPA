const ApiError = require("../api-error");
const MongoDB = require("mongoose");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// const ContactService = require("../services/contact.service");

// Create and Save a new Contact
exports.create = async (req, res, next) => {
    console.log(req.body)
    const {firstname, lastname, username, password, address, phone } = req.body;
    if(!username || !password){
        return res.send("All field are madatory");
    }

    const userAvailable = await userModel.findOne({username});

    if(userAvailable){
        res.status(400);
        throw new ApiError("User already sign up");
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = userModel.create({
        firstname,
        lastname,
        username,
        password : hashedPassword,
        address,
        phone
    });
    console.log(`User created ${user}`);

    if(user){
        res.status(201).json({_id: user.id, username: user.username});
    } else {
        res.status(400);
        throw new ApiError("User data is not valid");
    }
}

exports.loginUser = async (req, res, next) => {
    console.log(req.body);
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400);
        throw new ApiError("All fields are madatory");
    }

    const user = await userModel.findOne({ username });

    const  accessTokenSercet = process.env.ACCESS_TOKEN_SECRET || 'defaultSecretValue';

    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                id: user.id
            },
        },
        accessTokenSercet,
        { expiresIn: "1m" }
        );
        res.status(200).json({accessToken});
    } else {
        res.status(401)
        return res.send("email or password")
    }
}
exports.findAll = async (req, res, next) => {
    res.send("hehehehe")
}

exports.currentUser = async(req, res) => {
    res.json(req.user);
};