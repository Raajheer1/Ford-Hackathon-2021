const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:MongoRox2k23@mdev.kzf7h.mongodb.net/testdb?retryWrites=true&w=majority";

const InitMongoServer = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database.");
    } catch (e) {
        console.log("Error: " + e);
        throw e;
    }
}

module.exports = InitMongoServer;