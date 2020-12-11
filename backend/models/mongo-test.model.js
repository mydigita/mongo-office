const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MongoTestSchema = new Schema({
    username:{type:String},
    userid:{type:String},
    details:[]
}, {timestamps:true});

const MongoTest = mongoose.model("MongoTest", MongoTestSchema);

module.exports = MongoTest;