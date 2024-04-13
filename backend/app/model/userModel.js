const mongoose = require("mongoose");
const userScheme =  mongoose.Schema({
    firstname: {
        type: String,
        require: [true, "Plase add your first name"]
    },
    lastname: {
        type: String,
        require: [true, "Please add your last name"]
    },
    username: {
        type: String,
        require: [true, "Please add the user name"],
    },
    password: {
        type: String,
        require: [true, "Please add the password"],
    },
    address:{
        type: String,
        require: [true, "Please add your address"],
    },
    phone: {
        type: String,
        require: [true, "Please add your phone"],
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userScheme);