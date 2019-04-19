const express = require('express')
const router = express.Router();


const Event = require('../../models/event/event');


router.post('/', async (req, res) => {
    if(!req.body) return res.status(400).send({ error: 'Dados invalidos'})

    try {
        const Events = await Event.create(req.body)

        return res.status(201).json(Events)
    }
    catch (err) {
        return res.status(400).send({ error: "Erro ao criar novo evento"})
    }
})

module.exports = router