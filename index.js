const express = require('express');
const InitateMongoServer = require('./routes/db/db')

InitateMongoServer();

const app = express();

// Middleware
app.use(express.json());

//Routes
const user = require('./routes/db/user');
app.use('/db/user', user);

app.get('/', (req, res) => {
    res.json({ message: "API Working" });
})


//Start server
app.listen(process.env.PORT || 8080, () => {
    console.log("App started");
});
