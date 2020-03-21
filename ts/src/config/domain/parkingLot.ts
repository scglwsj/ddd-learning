/** @format */

import {ValueObject} from './valueObject'

export class ParkingLot {
    constructor(public readonly id: ParkingLotId, public readonly totalSpaces: number) {}
}

export class ParkingLotId extends ValueObject<String> {
    constructor(parkingLotID: String) {
        super(parkingLotID)
    }
}
