const mongoose = require('mongoose')

const Event = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        required: true, 
    },
    seatsSelled: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
    },
    estimatedRevue: {
        type: Number,
    },
    place: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Event', Event)