/** @format */

import {ParkingLot} from './parkingLot/parkingLot'
import {ParkingBoyService} from './parkBoyService'
import {OderParkingBoyService} from './parkingBoy/orderParkingBoyService'

export class ParkingBoy {
    protected readonly parkingBoyService: ParkingBoyService

    public constructor(protected parkingLots: ParkingLot[], parkingBoyService?: ParkingBoyService) {
        this.parkingBoyService = parkingBoyService || new OderParkingBoyService()
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
