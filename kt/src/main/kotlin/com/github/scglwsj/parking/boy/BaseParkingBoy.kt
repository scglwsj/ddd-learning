package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.ParkingLot

abstract class BaseParkingBoy protected constructor(
    private val parkingLots: List<ParkingLot>,
    private val parkingBoyService: ParkingBoyService
) {
    val availableSpaces: Int get() = parkingLots.sumBy { it.availableSpaces }
    val hasAvailableSpaces: Boolean get() = parkingLots.any { it.hasAvailableSpaces }
    fun findOneValidParkingLot(): ParkingLot? = parkingBoyService.findOneValidParkingLot(parkingLots)
}
