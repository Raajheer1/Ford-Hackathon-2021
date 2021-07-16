const mongoose = require("mongoose");

const VehicleSchema = mongoose.Schema({
    vehicleId: {
        type: String,
        require: true
    },
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
    color: {
        type: String,
        require: true
    },
    lat: {
        type: Number,
        require: false
    },
    lon: {
        type: Number,
        require: false
    },
    nickname: {
        type: String,
        require: true
    },
    range: {
        type: Number,
        require: false
    },
    owner: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("vehicle", VehicleSchema);