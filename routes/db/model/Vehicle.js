const mongoose = require("mongoose");

const VehicleSchema = mongoose.Schema({
    make: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    nickname: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    range: {
        type: Number,
        require: true
    },
    owner: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("vehicle", VehicleSchema);