package com.github.scglwsj.parking

import java.lang.Exception
import java.util.*

class ParkingLot(totalPosition: Int) {
    val id: ParkingLotID = ParkingLotID(UUID.randomUUID().toString())
    private var capacity = totalPosition
    private val parkedCars = mutableMapOf<Ticket, Car>()

    fun park(car: Car): Ticket {
        if (capacity <= 0)
            throw Exception("capacity is not enough.")

        return Ticket(car.plant, id).also {
            parkedCars[it] = car
            capacity--
        }
    }

    fun take(ticket: Ticket): Car {
        if(!ticket.isValid||!parkedCars.containsKey(ticket))
            throw Exception("Ticket is invalided.")

        return parkedCars[ticket]!!.also {
            ticket.invalidate()
            parkedCars.remove(ticket)
            capacity++
        }
    }
}

class ParkingLotID(id: String) : ValueObject<String>(id)
