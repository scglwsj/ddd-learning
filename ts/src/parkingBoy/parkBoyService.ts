/** @format */

import {ParkingLot} from '../parkingLot/parkingLot'

export interface ParkingBoyService {
    findOneValidParkingLot(parkingLots: ParkingLot[]): ParkingLot | null
}
