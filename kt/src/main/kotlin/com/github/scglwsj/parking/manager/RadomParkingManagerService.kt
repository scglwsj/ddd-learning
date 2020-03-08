package com.github.scglwsj.parking.manager

import com.github.scglwsj.parking.boy.BaseParkingBoy

class RandomParkingManagerService : ParkingManagerService {
    override fun findOneValidParkingBoy(parkingBoys: List<BaseParkingBoy>): BaseParkingBoy? =
        parkingBoys.filter{ it.hasAvailableSpaces }.minBy { (0..parkingBoys.size).random() }
}
