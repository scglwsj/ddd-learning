package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.ParkingLot

open class ParkingBoy(parkingLots: List<ParkingLot>) : BaseParkingBoy(parkingLots, OderParkingBoyService())
