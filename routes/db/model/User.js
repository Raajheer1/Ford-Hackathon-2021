const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    access_token: {
        type: String,
        require: false
    },
    refresh_token: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model("user", UserSchema);