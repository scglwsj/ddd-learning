/** @format */

import {MostAvailableParkingBoyService} from './mostAvailableParkingBoyService'
import {ParkingLot} from '../parkingLot/parkingLot'
import {ParkingBoy} from './parkingBoy'

export class SeniorParkingBoy extends ParkingBoy {
    public constructor(parkingLots: ParkingLot[]) {
        super(parkingLots)
        this.parkingBoyService = new MostAvailableParkingBoyService()
    }
}
