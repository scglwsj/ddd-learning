/** @format */

import {ParkingLotId} from './parkingLot'
import {ValueObject} from './valueObject'

export class ParkingBoy {
    public constructor(
        public readonly id: ParkingBoyId,
        public readonly parkingLots: ParkingLotId[],
        public readonly parkingRule: ParkingRules,
    ) {}
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
