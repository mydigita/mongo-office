const router = require("express").Router();
const VehicleRecords = require("../models/vehicle-records.model");

router.route('/register/:username/:userid')
.post((req, res)=>{
    const {username, userid}= req.params;
    const {
        carNumber,   
        carDetails,
        lastMovement,
        movementHistory,
        repairHistory,
        caseHistory,
        accidentHistory
    } = req.body;
    const carRegistration = new VehicleRecords({
        carNumber,
        carDetails,
        lastMovement,
        movementHistory,
        repairHistory,
        caseHistory,
        accidentHistory,
        username,
        userid
    });
    carRegistration.save()
    .then(()=>res.send("Registration successful!"))
    .catch(err=>res.send("Registration failed! Try again later."))

});

router.route("/movement-history/:username/:userid/:carnumber")
.get((req, res)=>{
    const {username, userid, carnumber} = req.params;
    VehicleRecords.findOne({carNumber:carnumber, username, userid}, {carNumber:true, movementHistory:true, lastMovement:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
})


module.exports = router;