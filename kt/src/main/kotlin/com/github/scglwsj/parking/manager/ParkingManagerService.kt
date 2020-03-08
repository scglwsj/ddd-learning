package com.github.scglwsj.parking.manager

import com.github.scglwsj.parking.boy.BaseParkingBoy

interface ParkingManagerService {
    fun findOneValidParkingBoy(parkingBoys: List<BaseParkingBoy>): BaseParkingBoy?
}
