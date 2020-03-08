package com.github.scglwsj.parking.manager

import com.github.scglwsj.parking.boy.BaseParkingBoy

class ParkingManager(private val parkingBoys:List<BaseParkingBoy>) {
    private val parkingManagerService: ParkingManagerService=RandomParkingManagerService()

    fun findOneValidParkingBoy(): BaseParkingBoy? = parkingManagerService.findOneValidParkingBoy(parkingBoys)
}
