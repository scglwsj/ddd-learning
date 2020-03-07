/** @format */

import {ParkingManagerService} from './parkingManagerService'
import {ParkingBoy} from '../parkingBoy/parkingBoy'

export class RadomParkingManagerService implements ParkingManagerService {
    findOneAviliedParkingBoy(parkingBoys: ParkingBoy[]): ParkingBoy | null {
        return (
            parkingBoys
                .filter(({hasAvailableSpaces}) => hasAvailableSpaces)
                .sort(() => Math.floor(Math.random() * parkingBoys.length))[0] || null
        )
    }
}
