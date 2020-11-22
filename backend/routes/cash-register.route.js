const router = require ('express').Router();
const CashRegister = require('../models/cash-register.model');

router.route('/view/:username/:userid')
.get((req, res)=>{
    CashRegister.find({username, userid}, {date:true, details:true, cashIn:true, cashOut:true, balance:true})
    .then(data=>res.send(data.reverse()))
    .catch(err=>res.send(err))
})


modules.exports = router;