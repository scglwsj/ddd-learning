/** @format */

import {ParkingBoy} from '../parkingBoy/parkingBoy'

export class ParkingManager {
    public constructor(private parkingBoys: ParkingBoy[]) {}

    private findOneValidParkingBoy() {
        return (
            this.parkingBoys
                .filter(parkingBoy => parkingBoy.checkAvailableLot())
                .sort(() => Math.floor(Math.random() * this.parkingBoys.length))[0] || null
        )
    }

    public findOneValidParkingLot() {
        const parkingBoy = this.findOneValidParkingBoy()
        return parkingBoy && (parkingBoy.findOneValidParkingLot() || null)
    }
}
