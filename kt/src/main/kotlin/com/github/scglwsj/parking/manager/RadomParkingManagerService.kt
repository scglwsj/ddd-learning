package com.github.scglwsj.parking.manager

import com.github.scglwsj.parking.boy.ParkingBoy

class RandomParkingManagerService : ParkingManagerService {
    override fun findOneValidParkingBoy(parkingBoys: List<ParkingBoy>): ParkingBoy? =
        parkingBoys.filter{ it.hasAvailableSpaces }.minBy { (0..parkingBoys.size).random() }
}
