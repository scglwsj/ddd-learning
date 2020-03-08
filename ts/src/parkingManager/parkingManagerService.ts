/** @format */

import { BaseParkingBoy } from '../parkingBoy/baseParkingBoy';

export interface ParkingManagerService {
    findOneValidParkingBoy(parkingBoys: BaseParkingBoy[]): BaseParkingBoy | null
}
