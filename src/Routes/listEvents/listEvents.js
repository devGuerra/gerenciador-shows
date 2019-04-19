const express = require('express')
const router = express.Router();


const Event = require('../../models/event/event');


router.get('/', async (req, res) => {
    const allEvents = await Event.find({})
    return res.json(allEvents)
})



module.exports = router