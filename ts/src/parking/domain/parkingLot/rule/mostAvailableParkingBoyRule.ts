/** @format */

import {ParkingBoyRule} from '../finder/ParkingBoyRule'
import {ParkingLot} from '../parking/parkingLot'

export class MostAvailableParkingBoyRule implements ParkingBoyRule {
    public findOneValidParkingLot(parkingLots: ParkingLot[]) {
        return (
            parkingLots
                .sort(({availableSpaces}) => -availableSpaces)
                .find(({hasAvailableSpaces}) => hasAvailableSpaces) || null
        )
    }
}
