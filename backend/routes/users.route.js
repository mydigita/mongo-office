const router = require('express').Router();
const Users = require('../models/user.model.js');

router.route('/register') 
.post((req, res)=>{
    const {
        username,
        userEmail,
        password,
        fullName,
    } = req.body;

    var firstIp=req.headers['x-forwarded-for'] || req.connection.remoteAddress;;
    var lastIp=req.headers['x-forwarded-for'] || req.connection.remoteAddress;;
    var ip=req.headers['x-forwarded-for'] || req.connection.remoteAddress;;
    const createdOn = new Date();
    const updatedOn = new Date();
    var updateCount=1;
    var mac="";
    var browser="";
    var history=[{fullName, password, ip, updatedOn, mac, browser}];

    const User = new Users({
        username,
        userEmail,
        password,
        fullName,
        firstIp,
        lastIp,
        createdOn,
        updatedOn,
        updateCount,
        history
    });

    User.save()
    .then(()=>res.send('User Registered'))
    .catch((err)=>res.send('User Registration Failed! Try with a different username / email'))
})


module.exports =  router;