const express = require('express')
const router = express.Router();

const Event = require('../../models/event/event');

router.get('/:id', async (req, res) => {
    const id = req.params.id

    const event = await Event.findById(id)
    return res.json(event)
})

router.post('/:id', async (req, res) => {

    const id = req.params.id
    const seats = req.body.seatsSelled

    const event = await Event.findById(id)

    if (event.seatsSelled + seats > event.seats) return res.send({ message: "Limite do evento excedido"})

    const newEvent = await Event.findByIdAndUpdate(id, { seatsSelled: seats + event.seatsSelled }) ;
    
    
    return res.json(newEvent)


})

module.exports = router