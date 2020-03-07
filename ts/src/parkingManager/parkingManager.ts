/** @format */

import {ParkingBoy} from '../parkingBoy/parkingBoy'
import {ParkingManagerService} from './parkingManagerService'
import {RadomParkingManagerService} from './radomParkingManagerService'

export class ParkingManager {
    private parkingManagerService: ParkingManagerService

    public constructor(private parkingBoys: ParkingBoy[]) {
        this.parkingManagerService = new RadomParkingManagerService()
    }

    public findOneAviliedParkingBoy(): ParkingBoy | null {
        return this.parkingManagerService.findOneAviliedParkingBoy(this.parkingBoys)
    }
}
