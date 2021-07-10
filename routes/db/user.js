const express = require("express");
const { MongoClient } = require('mongodb');
const router = express.Router();

const url = 'mongodb+srv://admin:MongoRox2k23@mdev.kzf7h.mongodb.net/testdb?retryWrites=true&w=majority'
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Authenticate

app.get("login", (req, res) => {
    try{
        //Setup Connection
        await client.connect();
        const database = client.db();
        const users = await db.collection('users');

        //Query the DB
        const query = { email: 'raaj.patel229@gmail.com'}
        const user = await users.findOne(query);

        res.send(user)
    }catch(err){
        console.log("Error: " + err);
        res.status(500);
        res.send(err);
    }finally {
        await client.close();
    }
})

module.exports = router;