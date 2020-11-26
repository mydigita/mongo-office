const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CashBookSchema = new Schema({
    date:{type:String},    
    details:{type:String},
    cashIn:{type:Number},
    cashOut:{type:Number},
    balance:{type:Number},
    authorizedBy:{type:String},
    carriedOutBy:{type:String},
    username:{type:String}, 
    userid:{type:String},
}, {timestamps:true});


const CashRegister = mongoose.model('CashRegister', CashBookSchema);
module.exports = CashRegister;