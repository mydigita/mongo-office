const router = require ('express').Router();
const CashRegister = require('../models/cash-register.model');

router.route('/view/:username/:userid')
.get((req, res)=>{
    const {username, userid} = req.params;
    CashRegister.find({username, userid}, {date:true, details:true, cashIn:true, cashOut:true, balance:true})
    .then(data=>res.send(data.reverse()))
    .catch(err=>res.send(err))
});

router.route('/record-trx/:username/:userid')
.post((req, res)=>{
    const {username, userid} = req.params;
    const {date, details, cashIn, cashOut, balance, reference}= req.body;
    const data = new CashRegister({date, details, cashIn, cashOut, balance, reference, username, userid});

    data.save()
    .then(data=>res.send('Posted Successfully!'))
    .catch(err=>res.send(err))
})


module.exports = router;