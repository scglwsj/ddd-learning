/** @format */

import {ParkingLotFinder} from './parkingLotFinder'

export interface ParkingLotFinderFactory {
    newParkingManager(): ParkingLotFinder
}
