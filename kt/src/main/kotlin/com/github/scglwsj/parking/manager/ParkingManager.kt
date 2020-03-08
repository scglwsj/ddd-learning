package com.github.scglwsj.parking.manager

import com.github.scglwsj.parking.boy.ParkingBoy

class ParkingManager(private val parkingBoys:List<ParkingBoy>) {
    private val parkingManagerService: ParkingManagerService=RandomParkingManagerService()

    fun findOneValidParkingBoy(): ParkingBoy? = parkingManagerService.findOneValidParkingBoy(parkingBoys)
}
