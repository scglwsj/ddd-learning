/** @format */

import {ParkingApplicationService} from '../parking/applicationService/parkingApplicationService'
import {ConfigClient} from '../parking/adpter/configClient'
import {ConfigApplicationService} from '../config/applicationService/configApplicationService'
import {ParkingBoyService} from '../config/domain/parkingBoyService'
import {ParkingLot, ParkingLotId} from '../config/domain/parkingLot'
import {ParkingBoy, ParkingRules} from '../config/domain/parkingBoy'
import {Car} from '../parking/domain/parkingLot/parking/car'

describe('integration', () => {
    let parkingApplicationService: ParkingApplicationService

    beforeEach(() => {
        const parkingBoyRepository = {
            findParkingBoys: jest
                .fn()
                .mockImplementation(() => [new ParkingBoy('1', [new ParkingLotId('1')], ParkingRules.ORDER)]),
        }

        const parkingLotRepository = {
            findParkingLotsByIds: jest.fn().mockImplementation(() => [new ParkingLot('1', 1)]),
        }
        const parkingBoyService = new ParkingBoyService(parkingBoyRepository, parkingLotRepository)
        const configApplicationService = new ConfigApplicationService(parkingBoyService)
        const parkingMangerFactory = new ConfigClient(configApplicationService)
        parkingApplicationService = new ParkingApplicationService(parkingMangerFactory)
    })

    it('should return a ticket when park a car', () => {
        const ticket = parkingApplicationService.park(new Car('川A 11111'))

        expect(ticket).not.toBeNull()
    })

    it('should return null when park another car', () => {
        parkingApplicationService.park(new Car('川A 11111'))
        const ticket = parkingApplicationService.park(new Car('川A 22222'))

        expect(ticket).toBeNull()
    })
})
