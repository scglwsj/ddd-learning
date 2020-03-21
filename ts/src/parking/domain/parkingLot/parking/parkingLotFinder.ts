/** @format */

import {ParkingLot} from './parkingLot'

export interface ParkingLotFinder {
    findOneValidParkingLot(): ParkingLot | null
}
