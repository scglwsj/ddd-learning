package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.ParkingLot

class MostAvailableParkingBoyRule : ParkingBoyRule {
    override fun findOneValidParkingLot(parkingLots: List<ParkingLot>): ParkingLot? =
        parkingLots.sortedByDescending { it.availableSpaces }.firstOrNull { it.hasAvailableSpaces }
}
