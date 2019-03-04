const mongoose = require('mongoose');

const initDB = () => {
    mongoose.connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to the database');
    });
}

module.exports = initDB;