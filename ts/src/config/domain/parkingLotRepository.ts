/** @format */

import {ParkingLot, ParkingLotId} from './parkingLot'

export interface ParkingLotRepository {
    findParkingLotsByIds(ids: ParkingLotId[]): ParkingLot[]
}
