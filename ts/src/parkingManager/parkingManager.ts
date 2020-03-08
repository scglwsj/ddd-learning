/** @format */

import {ParkingBoy} from '../parkingBoy/parkingBoy'
import {ParkingManagerService} from './parkingManagerService'
import { RandomParkingManagerService } from './radomParkingManagerService'

export class ParkingManager {
    private parkingManagerService: ParkingManagerService

    public constructor(private parkingBoys: ParkingBoy[]) {
        this.parkingManagerService = new RandomParkingManagerService()
    }

    public findOneValidParkingBoy(): ParkingBoy | null {
        return this.parkingManagerService.findOneValidParkingBoy(this.parkingBoys)
    }
}
