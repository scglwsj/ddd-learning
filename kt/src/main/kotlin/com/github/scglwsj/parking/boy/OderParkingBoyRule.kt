package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.ParkingLot

class OderParkingBoyRule : ParkingBoyRule {
    override fun findOneValidParkingLot(parkingLots: List<ParkingLot>): ParkingLot? =
        parkingLots.firstOrNull { it.hasAvailableSpaces }
}
