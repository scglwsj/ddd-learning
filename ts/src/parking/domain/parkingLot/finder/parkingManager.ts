/** @format */

import {ParkingBoy} from './parkingBoy'
import {ParkingLotFinder} from '../parking/parkingLotFinder'

export class ParkingManager implements ParkingLotFinder {
    public constructor(private parkingBoys: ParkingBoy[]) {}

    private findOneValidParkingBoy() {
        return this.parkingBoys
            .sort(() => Math.floor(Math.random() * this.parkingBoys.length))
            .find(parkingBoy => parkingBoy.checkAvailableLot())
    }

    public findOneValidParkingLot() {
        const parkingBoy = this.findOneValidParkingBoy()
        return parkingBoy?.findOneValidParkingLot() ?? null
    }
}
