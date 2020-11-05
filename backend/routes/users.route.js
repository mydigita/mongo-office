const router = require('express').Router();
const User = require('../models/user.model.js');

router.route('/mongo-office/task-manager/add')
.post((req, res)=>{
    const {
        username,
        user_email,
        password,
        full_name,
    } = req.body;

    var first_ip;
    var last_ip;
    var ip;
    const created_on = new Date();
    const updated_on = new Date();
    var update_count;
    var mac;
    var browser;
})