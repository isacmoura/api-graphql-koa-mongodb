const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://isacmoura:${process.env.PASSWORD}@cluster0-t7ta3.mongodb.net/koa-app`;
const initDB = () => {
    mongoose.connect(
        uri,
        { useNewUrlParser: true }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to the database');
    });
}

module.exports = initDB;