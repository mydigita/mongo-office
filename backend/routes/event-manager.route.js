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
        date,
        time,
        contactDetails
    } = req.body;

    const data = new EventManager({title, details, organizer, venue, date, time, contactDetails, username, userid});
    data.save()
    .then(()=>res.send('Event registration successful!'))
    .catch(err=>res.send(err))
});

module.exports = router;
