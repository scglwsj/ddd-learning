/** @format */

import {ParkingBoyService} from './parkBoyService'
import {ParkingLot} from './parkingLot'

export class OderParkingBoyService implements ParkingBoyService {
    public findOneAviliedParkingLot(parkingLots: ParkingLot[]) {
        return parkingLots.filter(({hasAvailableSpaces}) => hasAvailableSpaces)[0] || null
    }
}
