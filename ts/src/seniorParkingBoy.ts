/** @format */

import {MostAvailableParkingBoyService} from './mostAvailableParkingBoyService'
import {ParkingLot} from './parkingLot'
import {ParkingBoy} from './parkingBoy'

export class SeniorParkingBoy extends ParkingBoy {
    public constructor(parkingLots: ParkingLot[]) {
        super(parkingLots, new MostAvailableParkingBoyService())
    }
}
