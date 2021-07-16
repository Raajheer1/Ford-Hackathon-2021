const express = require("express");
const axios = require("axios");
const qs = require('qs');

const router = express.Router();

router.post('/FordToken', (req, res) => {
    const body = {
        "grant_type": req.body["grant_type"],
        client_id: req.body["client_id"],
        client_secret: req.body["client_secret"],
        code: req.body["code"],
        redirect_uri: req.body["redirect_uri"]
    }
    axios.post('https://dah2vb2cprod.b2clogin.com/914d88b1-3523-4bf6-9be4-1b96b4f6f919/oauth2/v2.0/token?p=B2C_1A_signup_signin_common',
        qs.stringify(req.body),
        {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
        )
        .then((response) => {
            res.status(200).json(response);
        }, (error) => {
            res.status(400).send(error.response.data)
        });
})

module.exports = router;