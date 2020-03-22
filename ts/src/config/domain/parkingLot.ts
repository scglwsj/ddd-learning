/** @format */

import {ValueObject} from './valueObject'

export class ParkingLot {
    public readonly id: ParkingLotId

    constructor(id: string, public readonly totalSpaces: number) {
        this.id = new ParkingLotId(id)
    }
}

export class ParkingLotId extends ValueObject<String> {
    constructor(parkingLotID: String) {
        super(parkingLotID)
    }
}
