/** @format */

import {ParkingLot} from '../parkingLot/parkingLot'
import {OderParkingBoyService} from './orderParkingBoyService'
import {BaseParkingBoy} from './baseParkingBoy'

export class ParkingBoy extends BaseParkingBoy {
    public constructor(parkingLots: ParkingLot[]) {
        super(parkingLots, new OderParkingBoyService())
    }
}
