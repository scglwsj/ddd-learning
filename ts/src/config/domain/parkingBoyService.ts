/** @format */

import {ParkingLotRepository} from './parkingLotRepository'
import {ParkingLot} from './parkingLot'
import {ParkingBoy} from './parkingBoy'
import {ParkingBoyRepository} from './parkingBoyRepository'

export class ParkingBoyService {
    constructor(
        private readonly parkingBoyRepository: ParkingBoyRepository,
        private readonly parkingLotRepository: ParkingLotRepository,
    ) {}

    public findParkingBoys(): [ParkingBoy, ParkingLot[]][] {
        const parkingBoys = this.parkingBoyRepository.findParkingBoys()
        const parkingLots = this.parkingLotRepository.findParkingLotsByIds(
            parkingBoys.flatMap(({parkingLots}) => parkingLots),
        )

        return parkingBoys.map(parkingBoy => [
            parkingBoy,
            parkingLots.filter(({id}) => parkingBoy.parkingLots.some(parkingLotId => parkingLotId.equals(id))),
        ])
    }
}
