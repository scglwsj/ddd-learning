/** @format */

import {ParkingManagerService} from './parkingManagerService'
import {RandomParkingManagerService} from './radomParkingManagerService'
import {BaseParkingBoy} from '../parkingBoy/baseParkingBoy'

export class ParkingManager {
    private parkingManagerService: ParkingManagerService

    public constructor(private parkingBoys: BaseParkingBoy[]) {
        this.parkingManagerService = new RandomParkingManagerService()
    }

    public findOneValidParkingBoy(): BaseParkingBoy | null {
        return this.parkingManagerService.findOneValidParkingBoy(this.parkingBoys)
    }
}
