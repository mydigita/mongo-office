const router = require('express').Router();
const EventManager = require('../models/event-manager.model');


router.route('/register/:username/:userid')
.post((req, res)=>{
    const {username, userid} = req.params;
    const {
        title,
        details,
        organizer,
        venue,
        eventDate,        
        contactDetails,
        status
    } = req.body;

    const data = new EventManager({title, details, organizer, venue, eventDate, contactDetails, status, username, userid});
    data.save()
    .then(()=>res.send('Event registration successful!'))
    .catch(err=>res.send(err))
});

router.route('/view/:username/:userid')
.post((req, res)=>{
    const {username, userid} = req.params;
    const dataPass = {
        title:true, details:true, organizer:true, venue:true, eventDate:true, contactDetails:true, _id:true
    }
    EventManager.find({username, userid}, dataPass)
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});
router.route('/edit/:eventId')
.get((req, res)=>{
    const {eventId} = req.params;
    EventManager.findOne({_id:eventId})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});

router.route('/edit/save/:eventId')
.post((req, res)=>{
    const {eventId, editPassword} = req.params;
    const {title, details, organizer, eventDate, contactDetails, venue} = req.body;
    EventManager.findOneAndUpdate({_id:eventId, editPassword}, {$set:{title, details, organizer, eventDate, contactDetails, venue}})
    .then(data=>res.send('Task Updated!'))
    .catch(err=>res.send(err))
})

module.exports = router;
