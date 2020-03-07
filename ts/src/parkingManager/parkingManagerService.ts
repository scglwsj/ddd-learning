/** @format */

import {ParkingBoy} from '../parkingBoy/parkingBoy'

export interface ParkingManagerService {
    findOneAviliedParkingBoy(parkingLots: ParkingBoy[]): ParkingBoy | null
}
