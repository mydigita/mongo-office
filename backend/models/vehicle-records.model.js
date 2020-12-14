const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const VehicleSchema =  new Schema({
    carNumber:{type:String},
    driverName:{type:String},
    carDetails:[],
    movementDetails:{type:String},    
    repairHistory:[]
});

const VehicleRecords = mongoose.model("VehicleRecords", VehicleSchema);

module.exports = VehicleRecords;