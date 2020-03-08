/** @format */

import {ParkingLot} from '../parkingLot/parkingLot'
import {ParkingBoyService} from './parkBoyService'
import {OderParkingBoyService} from './orderParkingBoyService'

export class ParkingBoy {
    private _parkingBoyService: ParkingBoyService

    public constructor(protected parkingLots: ParkingLot[]) {
        this._parkingBoyService = new OderParkingBoyService()
    }

    protected set parkingBoyService(value: ParkingBoyService) {
        this._parkingBoyService = value
    }

    public get availableSpaces() {
        return this.parkingLots.reduce((result, {availableSpaces}) => result + availableSpaces, 0)
    }

    public get hasAvailableSpaces() {
        return this.parkingLots.some(({hasAvailableSpaces}) => hasAvailableSpaces)
    }

    public findOneValidParkingLot() {
        return this._parkingBoyService.findOneValidParkingLot(this.parkingLots)
    }
}
