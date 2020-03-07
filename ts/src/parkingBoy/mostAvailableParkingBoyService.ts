/** @format */

import {ParkingBoyService} from './parkBoyService'
import {ParkingLot} from '../parkingLot/parkingLot'

export class MostAvailableParkingBoyService implements ParkingBoyService {
    public findOneAviliedParkingLot(parkingLots: ParkingLot[]) {
        return (
            parkingLots
                .filter(({hasAvailableSpaces}) => hasAvailableSpaces)
                .sort(({availableSpaces}) => -availableSpaces)[0] || null
        )
    }
}
