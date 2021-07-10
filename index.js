const express = require('express');
const enforceSSL = require("express-sslify");
const cors = require('cors');
const fs = require('fs');

const app = express();

//SSL Certs || MAYBE REMOVE, Might do NGINX RP
const https = require("https").Server({
    key: fs.readFileSync(`/etc/letsencrypt/live/${process.env.PUBLIC_URL}/privkey.pem`),
    cert: fs.readFileSync(`/etc/letsencypt/live/${process.env.PUBLIC_URL}/fullchain.pem`)
}, app);


// Middleware
app.use(express.json());
app.use(enforceSSL.HTTPS());
app.use(cors()); // Again, maybe remove if running NRP

//Routes


//Start server
const listener = https.listen(process.env.PORT || 8080, () => {
    console.log("Ford running on " + listener.address().port);
});

