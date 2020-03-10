package com.github.scglwsj.parking.lot

import java.util.*

data class Ticket(private val carPlate: PlateNumber, val parkingLotID: ParkingLotID) {
    val id = TicketID(UUID.randomUUID().toString())
    var isValid = true
        private set

    fun invalidate() {
        isValid = false
    }
}

data class TicketID(val id: String)
