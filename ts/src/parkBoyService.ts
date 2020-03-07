/** @format */

import {ParkingLot} from './parkingLot'

export interface ParkingBoyService {
    findOneAviliedParkingLot(parkingLots: ParkingLot[]): ParkingLot | null
}
