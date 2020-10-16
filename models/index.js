// import mongoose from 'mongoose';
var mongoose = require('mongoose');
var weather = require('./weather')
// import weather from './weather';

const connectDb = () =>{
    return mongoose.connect(process.env.DATABASE_URL)
}

const models = { weather, };

export { connectDb };

export default models;