/** @format */

import {ParkingLot} from '../parkingLot/parkingLot'

export interface ParkingBoyRule {
    findOneValidParkingLot(parkingLots: ParkingLot[]): ParkingLot | null
}
