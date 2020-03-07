/** @format */

import {ParkingLot} from './parkingLot'
import {ParkingBoyService} from './parkBoyService'
import {OderParkingBoyService} from './orderParkingBoyService'

export class ParkingBoy {
    private readonly parkingBoyService: ParkingBoyService
    public constructor(private parkingLots: ParkingLot[]) {
        this.parkingBoyService = new OderParkingBoyService()
    }

    public get availableSpaces() {
        return this.parkingLots.reduce((result, {availableSpaces}) => result + availableSpaces, 0)
    }

    public get hasAvailableSpaces() {
        return this.parkingLots.some(({hasAvailableSpaces}) => hasAvailableSpaces)
    }

    public findOneAviliedParkingLot() {
        return this.parkingBoyService.findOneAviliedParkingLot(this.parkingLots)
    }
}
