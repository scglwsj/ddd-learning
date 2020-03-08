package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.ParkingLot

interface ParkingBoyService {
    fun findOneValidParkingLot(parkingLots: List<ParkingLot>): ParkingLot?
}
