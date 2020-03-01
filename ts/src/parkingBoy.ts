/** @format */

import {ParkingLot} from './parkingLot'
import {Car} from './car'

export class ParkingBoy {
    public constructor(public parkingLots: ParkingLot[]) {}

    public park(car: Car) {
        for (const parkingLot of this.parkingLots) {
            try {
                return parkingLot.park(car)
            } catch {}
        }

        throw new Error('capacity is not enough.')
    }
}
