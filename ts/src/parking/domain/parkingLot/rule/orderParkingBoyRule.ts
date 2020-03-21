/** @format */

import {ParkingLotFinder} from './../parking/parkingLotFinder'
/** @format */

import {ParkingBoyRule} from '../finder/ParkingBoyRule'
import {ParkingLot} from '../parking/parkingLot'

export class OderParkingBoyRule implements ParkingBoyRule {
    public findOneValidParkingLot(parkingLots: ParkingLot[]) {
        return parkingLots.find(({hasAvailableSpaces}) => hasAvailableSpaces) || null
    }
}
