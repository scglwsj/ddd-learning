package com.github.scglwsj.parking.boy

import com.github.scglwsj.parking.lot.ParkingLot

class SeniorParkingBoy(parkingLots: List<ParkingLot>) : BaseParkingBoy(parkingLots, MostAvailableParkingBoyService())
