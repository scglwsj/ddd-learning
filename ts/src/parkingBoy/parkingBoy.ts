/** @format */

import {ParkingLot} from '../parkingLot/parkingLot'
import {ParkingBoyRule} from './parkingBoyRule'

export class ParkingBoy {
    public constructor(private parkingLots: ParkingLot[], private parkingBoyRule: ParkingBoyRule) {}

    public checkAvailableLot() {
        return this.parkingLots.some(({hasAvailableSpaces}) => hasAvailableSpaces)
    }

    public findOneValidParkingLot() {
        return this.parkingBoyRule.findOneValidParkingLot(this.parkingLots)
    }
}
