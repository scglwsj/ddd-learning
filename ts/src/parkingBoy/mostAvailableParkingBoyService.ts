/** @format */

import {ParkingBoyService} from './parkBoyService'
import {ParkingLot} from '../parkingLot/parkingLot'

export class MostAvailableParkingBoyService implements ParkingBoyService {
    public findOneValidParkingLot(parkingLots: ParkingLot[]) {
        return (
            parkingLots
                .filter(({hasAvailableSpaces}) => hasAvailableSpaces)
                .sort(({availableSpaces}) => -availableSpaces)[0] || null
        )
    }
}
