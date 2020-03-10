package com.github.scglwsj.parking.lot

import java.lang.Exception
import java.util.*

class ParkingLot(totalPosition: Int) {
    val id: ParkingLotID =
        ParkingLotID(UUID.randomUUID().toString())
    var availableSpaces = totalPosition
        private set
    private val parkedCars = mutableMapOf<Ticket, Car>()

    fun park(car: Car): Ticket {
        if (availableSpaces <= 0)
            throw Exception("capacity is not enough.")

        return Ticket(car.plant, id).also {
            parkedCars[it] = car
            availableSpaces--
        }
    }

    fun take(ticket: Ticket): Car {
        if (!ticket.isValid || !parkedCars.containsKey(ticket))
            throw Exception("Ticket is invalided.")

        return parkedCars[ticket]!!.also {
            ticket.invalidate()
            parkedCars.remove(ticket)
            availableSpaces++
        }
    }

    val hasAvailableSpaces: Boolean get() = availableSpaces > 0
}

data class ParkingLotID(val id: String)
