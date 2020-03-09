/** @format */

import {ParkingBoyRule} from './parkingBoyRule'
import {ParkingLot} from '../parkingLot/parkingLot'

export class OderParkingBoyRule implements ParkingBoyRule {
    public findOneValidParkingLot(parkingLots: ParkingLot[]) {
        return parkingLots.filter(({hasAvailableSpaces}) => hasAvailableSpaces)[0] || null
    }
}
