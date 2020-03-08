package com.github.scglwsj.parking.lot

import com.github.scglwsj.parking.ValueObject
import java.util.*

class Ticket(private val carPlate: PlateNumber, val parkingLotID: ParkingLotID) :
    ValueObject<TicketID>(
        TicketID(UUID.randomUUID().toString())
    ) {
    var valid = true
    val isValid get() = valid
    val id get() = value
    fun invalidate() {
        valid = false
    }
}

class TicketID(id: String) : ValueObject<String>(id)
