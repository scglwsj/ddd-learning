/** @format */

import {ParkingBoyService} from './parkBoyService'
import {ParkingLot} from '../parkingLot/parkingLot'

export class OderParkingBoyService implements ParkingBoyService {
    public findOneValidParkingLot(parkingLots: ParkingLot[]) {
        return parkingLots.filter(({hasAvailableSpaces}) => hasAvailableSpaces)[0] || null
    }
}
