const router = require('express').Router();
const Users = require('../models/user.model.js');

router.route('/mongo-office/accounts/register')
.post((req, res)=>{
    const {
        username,
        user_email,
        password,
        full_name,
    } = req.body;

    var first_ip="";
    var last_ip="";
    var ip="";
    const created_on = new Date();
    const updated_on = new Date();
    var update_count=1;
    var mac="";
    var browser="";
    var history=[{full_name, password, ip, updated_on, mac, browser}];

    const User = new Users({
        username,
        user_email,
        password,
        full_name,
        first_ip,
        last_ip,
        created_on,
        updated_on,
        update_count,
        history
    });

    User.save()
    .then(()=>res.send('User Registered'))
    .catch((err)=>res.send('User Registration Failed! Try with a different username / email'))
})


module.exports =  router;