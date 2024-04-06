const mongoose = require("mongoose");
const userScheme =  mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please add the user name"],
    },
    password: {
        type: String,
        require: [true, "Please add the password"],
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userScheme);