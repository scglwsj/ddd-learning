/** @format */

import {MostAvailableParkingBoyService} from '../parkingBoy/mostAvailableParkingBoyService'
import {ParkingLot} from './parkingLot'
import {ParkingBoy} from '../parkingBoy/parkingBoy'

export class SeniorParkingBoy extends ParkingBoy {
    public constructor(parkingLots: ParkingLot[]) {
        super(parkingLots, new MostAvailableParkingBoyService())
    }
}
