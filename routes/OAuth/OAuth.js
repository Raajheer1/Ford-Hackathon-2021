// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

//Inital Capture + Redirect
// router.get("/Ford", (req, res) => {
//     const email = req.query.email;
//
// })

//redirect_uri from OAuth2.0
// router.post("/return", (req, res) => {
//
//     const body = {
//         grant_type: "authorization_code",
//         client_id: "30990062-9618-40e1-a27b-7c6bcb23658a",
//         client_secret:"T_Wk41dx2U9v22R5sQD4Z_E1u-l2B-jXHE",
//         code: res.code,
//         redirect_uri: "https://localhost:3000"
//     }
//     axios.post("https://dah2vb2cprod.b2clogin.com/914d88b1-3523-4bf6-9be4-1b96b4f6f919/oauth2/v2.0/token?p=B2C_1A_signup_signin_common", body, (req, res) => {
//         const headers = {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//             "api-version": "2020-06-01",
//             "Application-Id": "afdc085b-377a-4351-b23e-5e1d35fb3700",
//             "Authorization": `Bearer ${res.body.access_token}`
//         }
//         axios.get("https://api.mps.ford.com/api/fordconnect/vehicles/v1", headers, (req, res) => {
//
//         })
//     })
// })


