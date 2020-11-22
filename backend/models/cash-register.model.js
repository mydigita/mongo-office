const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CashBookSchema = new Schema({
    trxDate:{type:String},    
    trxDetails:{type:String},
    trxAmountIn:{type:Number},
    trxAmountOut:{type:Number},
    cashBalance:{type:Number},
    username:{type:String}, 
    userid:{type:String},
}, {timestamps:true});


const CashRegister = mongoose.model('CashRegister', CashBookSchema);
module.exports = CashRegister;