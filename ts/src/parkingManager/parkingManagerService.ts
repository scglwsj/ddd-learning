/** @format */

import {ParkingBoy} from '../parkingBoy/parkingBoy'

export interface ParkingManagerService {
    findOneValidParkingBoy(parkingLots: ParkingBoy[]): ParkingBoy | null
}
