package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.ParkingLot

interface ParkingBoyRule {
    fun findOneValidParkingLot(parkingLots: List<ParkingLot>): ParkingLot?
}
