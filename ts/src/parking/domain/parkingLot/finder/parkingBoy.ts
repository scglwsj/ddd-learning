/** @format */

import {ParkingBoyRule} from './ParkingBoyRule'
import {ValueObject} from '../../valueObject'
import {ParkingLot} from '../parking/parkingLot'
import {ParkingLotFinder} from '../parking/parkingLotFinder'

export class ParkingBoy extends ValueObject<ParkingBoyId> implements ParkingLotFinder {
    public constructor(id: String, private parkingLots: ParkingLot[], private parkingBoyRule: ParkingBoyRule) {
        super(new ParkingBoyId(id))
    }

    public get id() {
        return this.value
    }

    public checkAvailableLot() {
        return this.parkingLots.some(({hasAvailableSpaces}) => hasAvailableSpaces)
    }

    public findOneValidParkingLot() {
        return this.parkingBoyRule.findOneValidParkingLot(this.parkingLots)
    }
}

export class ParkingBoyId extends ValueObject<String> {
    constructor(parkingBoyID: String) {
        super(parkingBoyID)
    }
}
