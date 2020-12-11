const router = require('express').Router();
const MongoTest = require('../models/mongo-test.model');


router.route('/mongo-office/mongo-test/get/:id')
.get((req, res)=>{
    MongoTest.findOne({_id:id})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
})