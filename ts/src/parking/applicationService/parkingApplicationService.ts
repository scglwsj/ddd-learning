/** @format */

import {ParkingLotFinderFactory} from '../domain/parkingLot/parking/parkingLotFinderFactory'
import {Car} from '../domain/parkingLot/parking/car'
import {ParkingManager} from '../domain/parkingLot/finder/parkingManager'

export class ParkingApplicationService {
    private readonly parkingManager: ParkingManager

    constructor(parkingMangerFactory: ParkingLotFinderFactory) {
        this.parkingManager = parkingMangerFactory.newParkingManager() as ParkingManager
    }

    park(car: Car) {
        const parkingLot = this.parkingManager.findOneValidParkingLot()
        return parkingLot?.park(car) ?? null
    }
}
