/** @format */

import {ParkingLot} from '../parkingLot/parkingLot'
import {ParkingBoyService} from './parkBoyService'

export abstract class BaseParkingBoy {
    protected constructor(private parkingLots: ParkingLot[], private parkingBoyService: ParkingBoyService) {}

    public get availableSpaces() {
        return this.parkingLots.reduce((result, {availableSpaces}) => result + availableSpaces, 0)
    }

    public get hasAvailableSpaces() {
        return this.parkingLots.some(({hasAvailableSpaces}) => hasAvailableSpaces)
    }

    public findOneValidParkingLot() {
        return this.parkingBoyService.findOneValidParkingLot(this.parkingLots)
    }
}
