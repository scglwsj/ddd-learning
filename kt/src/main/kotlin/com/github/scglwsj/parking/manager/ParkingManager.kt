package com.github.scglwsj.parking.manager

import com.github.scglwsj.parking.boy.ParkingBoy
import com.github.scglwsj.parking.lot.ParkingLot

class ParkingManager(private val parkingBoys: List<ParkingBoy>) {
    private fun findOneValidParkingBoy(): ParkingBoy? =
        parkingBoys.filter { it.checkAvailableLot() }.minBy { (0..parkingBoys.size).random() }

    fun findOneValidParkingLot(): ParkingLot? = findOneValidParkingBoy()?.findOneValidParkingLot()
}
