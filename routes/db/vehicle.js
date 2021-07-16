const express = require("express");
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

const Vehicle = require('./model/Vehicle');

// Create Vehicle
router.post("/create",
    [
        check("vehicleID", "Please enter a valid car make.")
            .not()
            .isEmpty(),
        check("make", "Please enter a valid car make.")
            .not()
            .isEmpty(),
        check("model", "Please enter a valid car model.")
            .not()
            .isEmpty(),
        check("year", "Please enter a valid production year.")
            .not()
            .isEmpty(),
        check("nickname", "Please enter a valid vehicle nickname.")
            .not()
            .isEmpty(),
        check("color", "Please enter a valid color.")
            .not()
            .isEmpty(),
        check("owner", "Please enter a valid owner email")
            .isEmail()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            vehicleId,
            make,
            model,
            year,
            nickname,
            color,
            owner
        } = req.body;
        try {
            let vehicle = await Vehicle.findOne({
                vehicleId
            });
            if(vehicle) {
                return res.status(400).json({
                    msg: "Vehicle already in database."
                });
            }

            vehicle = new Vehicle({
                vehicleId,
                make,
                model,
                year,
                nickname,
                color,
                owner
            });

            await vehicle.save();

            res.status(200).json({
                msg: "Vehicle registered to rental DB."
            });
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in saving to DB.");
        }
    }
);

router.get("/all", (req, res) => {
    //get every document in Vehicle table and send back

})