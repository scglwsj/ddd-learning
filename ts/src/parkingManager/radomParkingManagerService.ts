/** @format */

import {ParkingManagerService} from './parkingManagerService'
import { BaseParkingBoy } from '../parkingBoy/baseParkingBoy'

export class RandomParkingManagerService implements ParkingManagerService {
    findOneValidParkingBoy(parkingBoys: BaseParkingBoy[]): BaseParkingBoy | null {
        return (
            parkingBoys
                .filter(({hasAvailableSpaces}) => hasAvailableSpaces)
                .sort(() => Math.floor(Math.random() * parkingBoys.length))[0] || null
        )
    }
}
