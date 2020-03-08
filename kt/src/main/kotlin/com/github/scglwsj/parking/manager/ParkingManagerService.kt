package com.github.scglwsj.parking.manager

import com.github.scglwsj.parking.boy.ParkingBoy

interface ParkingManagerService {
    fun findOneValidParkingBoy(parkingBoys: List<ParkingBoy>): ParkingBoy?
}
