const express = require("express");
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

const Vehicle = require('./model/Vehicle');

// Create Vehcile
router.post("/create",
    [
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
        check("range", "Please enter a valid range")
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
            make,
            model,
            year,
            nickname,
            color,
            range,
            owner
        } = req.body;
        try {
            let vehicle = await Vehicle.findOne({
                nickname
            });
            if(vehicle) {
                return res.status(400).json({
                    msg: "Nickname already in use."
                });
            }

            vehicle = new Vehicle({
                make,
                model,
                year,
                nickname,
                color,
                range,
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