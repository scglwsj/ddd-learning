package com.github.scglwsj.parking.lot

import com.github.scglwsj.parking.ValueObject
import java.util.*

class Ticket(private val carPlate: PlateNumber, val parkingLotID: ParkingLotID) :
    ValueObject<TicketID>(
        TicketID(UUID.randomUUID().toString())
    ) {
    var isValid = true
        private set
    val id get() = value
    fun invalidate() {
        isValid = false
    }
}

class TicketID(id: String) : ValueObject<String>(id)
