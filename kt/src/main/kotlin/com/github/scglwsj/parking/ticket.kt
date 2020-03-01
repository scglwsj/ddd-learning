package com.github.scglwsj.parking

import java.util.*

class Ticket(private val carPlate: PlateNumber, val parkingLotID: ParkingLotID) :
    ValueObject<TicketId>(TicketId(UUID.randomUUID().toString())) {
    var valid = true
    val isValid get() = valid
    val id get() = value
    fun invalidate() {
        valid = false
    }
}

class TicketId(id: String) : ValueObject<String>(id)
