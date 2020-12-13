const router = require('express').Router();
const MongoTest = require('../models/mongo-test.model');


router.route('/get/:id')
.get((req, res)=>{
    const {id}=req.params;
    MongoTest.findOne({"details.posts._id":id}, {"details.posts._id.$":true})
    // .then(data=>res.send(data.details[0].posts.filter(e=>e._id===id)[0]))
    .then(data=>data?res.send({
        groupId:data.details[0]._id, 
        groupName:data.details[0].name, 
        post:data.details[0].posts.filter(e=>e._id===id)[0]}): res.send("Not found!"))
        
    .catch(err=>res.send(err))
})

router.route('/post/:username/:userid')
.post((req, res)=>{
    const {username, userid}=req.params;
    const {details}= req.body;

    const proData = new MongoTest({
        username, userid, details
    });
    proData.save()
    .then(data=>res.send('posted!'))
    .catch(err=>res.send(err))

})

router.route('/update/:id')
.put((req, res)=>{
    const {id}=req.params;
    const {dataToUpdate}=req.body;
    //{returnOriginal:false} will return the updated data immediately
    // {returnOriginal:true} is default, it will return the old data after update operation
    MongoTest.findOneAndUpdate({_id:id}, {$set:{"details.$[e].name":dataToUpdate}}, {arrayFilters:[{"e.name":{$gte:4}}], returnOriginal:false})
    .then((data)=>res.send(data))
    .catch(err=>res.send(err))
})


module.exports = router;