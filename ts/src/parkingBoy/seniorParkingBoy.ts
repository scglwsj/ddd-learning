/** @format */

import {MostAvailableParkingBoyService} from './mostAvailableParkingBoyService'
import {ParkingLot} from '../parkingLot/parkingLot'
import {BaseParkingBoy} from './baseParkingBoy'

export class SeniorParkingBoy extends BaseParkingBoy {
    public constructor(parkingLots: ParkingLot[]) {
        super(parkingLots, new MostAvailableParkingBoyService())
    }
}
