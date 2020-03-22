/** @format */

import {ParkingLotId} from './parkingLot'
import {ValueObject} from './valueObject'

export class ParkingBoy {
    public readonly id: ParkingBoyId

    public constructor(
        id: string,
        public readonly parkingLots: ParkingLotId[],
        public readonly parkingRule: ParkingRules,
    ) {
        this.id = new ParkingBoyId(id)
    }
}

export class ParkingBoyId extends ValueObject<String> {
    constructor(parkingBoyID: String) {
        super(parkingBoyID)
    }
}

export enum ParkingRules {
    ORDER,
    MOST_AVAILABLE,
}
