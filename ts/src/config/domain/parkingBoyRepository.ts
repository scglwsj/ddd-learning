/** @format */

import {ParkingBoy} from './parkingBoy'

export interface ParkingBoyRepository {
    findParkingBoys(): ParkingBoy[]
}
