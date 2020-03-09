/** @format */

import {ParkingBoyRule} from './parkingBoyRule'
import {ParkingLot} from '../parkingLot/parkingLot'

export class MostAvailableParkingBoyRule implements ParkingBoyRule {
    public findOneValidParkingLot(parkingLots: ParkingLot[]) {
        return (
            parkingLots
                .filter(({hasAvailableSpaces}) => hasAvailableSpaces)
                .sort(({availableSpaces}) => -availableSpaces)[0] || null
        )
    }
}
