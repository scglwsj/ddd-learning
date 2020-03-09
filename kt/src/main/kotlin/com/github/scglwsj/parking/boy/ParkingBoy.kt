package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.ParkingLot

class ParkingBoy constructor(
    private val parkingLots: List<ParkingLot>,
    private val parkingBoyRule: ParkingBoyRule
) {
    fun checkAvailableLot(): Boolean = parkingLots.any { it.hasAvailableSpaces }
    fun findOneValidParkingLot(): ParkingLot? = parkingBoyRule.findOneValidParkingLot(parkingLots)
}
