package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.Car
import com.github.scglwsj.parking.lot.ParkingLot
import com.github.scglwsj.parking.lot.Ticket

open class ParkingBoy protected constructor(
    private val parkingLots: List<ParkingLot>,
    private val parkingBoyService: ParkingBoyService
) {
    constructor(parkingLots: List<ParkingLot>) : this(parkingLots, OderParkingBoyService())

    val availableSpaces: Int get() = parkingLots.sumBy { it.availableSpaces }
    val hasAvailableSpaces: Boolean get() = parkingLots.any { it.hasAvailableSpaces }
    fun findOneValidParkingLot(): ParkingLot? = parkingBoyService.findOneValidParkingLot(parkingLots)
}
