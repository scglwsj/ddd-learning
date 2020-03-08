package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.ParkingLot

class OderParkingBoyService : ParkingBoyService {
    override fun findOneValidParkingLot(parkingLots: List<ParkingLot>): ParkingLot? =
        parkingLots.firstOrNull { it.hasAvailableSpaces }
}
