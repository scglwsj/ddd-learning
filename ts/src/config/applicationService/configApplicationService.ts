/** @format */

import {ParkingBoyService} from '../domain/parkingBoyService'

export class ConfigApplicationService {
    constructor(private readonly parkingBoyService: ParkingBoyService) {}

    public findParkingBoys() {
        return this.parkingBoyService.findParkingBoys()
    }
}
