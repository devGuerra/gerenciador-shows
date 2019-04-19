const express = require('express')
const Event = require('../../models/event/event');


const someSeat = async (id, seats) => {
    const seatsSelled = await Event.findById(id)

    if(seatsSelled.seatsSelled + seats > seatsSelled.seats) return 

    const someSeats = seatsSelled.seatsSelled + seats ;
    
    
    return  await Event.findByIdAndUpdate(id, { seatsSelled: someSeats})

}

module.exports = { someSeat }