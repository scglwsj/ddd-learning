/** @format */

import {ParkingManagerService} from './parkingManagerService'
import {ParkingBoy} from '../parkingBoy/parkingBoy'

export class RandomParkingManagerService implements ParkingManagerService {
    findOneValidParkingBoy(parkingBoys: ParkingBoy[]): ParkingBoy | null {
        return (
            parkingBoys
                .filter(({hasAvailableSpaces}) => hasAvailableSpaces)
                .sort(() => Math.floor(Math.random() * parkingBoys.length))[0] || null
        )
    }
}
