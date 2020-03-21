/** @format */

import {ParkingLot} from '../parking/parkingLot'

export interface ParkingBoyRule {
    findOneValidParkingLot(parkingLots: ParkingLot[]): ParkingLot | null
}
