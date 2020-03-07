/** @format */

import {ParkingLot} from '../parkingLot/parkingLot'

export interface ParkingBoyService {
    findOneAviliedParkingLot(parkingLots: ParkingLot[]): ParkingLot | null
}
