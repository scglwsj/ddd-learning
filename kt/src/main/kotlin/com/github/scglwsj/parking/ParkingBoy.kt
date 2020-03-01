package com.github.scglwsj.parking

class ParkingBoy(val parkingLots: List<ParkingLot>) {
    fun park(car: Car): Ticket {
        for (lot in parkingLots) {
            try {
                return lot.park(car)
            } catch (e: Exception) {
            }
        }

        throw Exception("capacity is not enough.")
    }
}
