/** @format */

import {ParkingBoyRepository} from '../domain/parkingBoyRepository'
import {ParkingLotRepository} from '../domain/parkingLotRepository'
import {ParkingBoy, ParkingRules, ParkingBoyId} from '../domain/parkingBoy'
import {ParkingLotId, ParkingLot} from '../domain/parkingLot'
import {ParkingBoyService} from '../domain/parkingBoyService'

describe('parking boy service', () => {
    let parkingBoyRepository: jest.Mocked<ParkingBoyRepository>
    let parkingLotRepository: jest.Mocked<ParkingLotRepository>
    let parkingBoyService: ParkingBoyService

    beforeEach(() => {
        parkingBoyRepository = {
            findParkingBoys: jest
                .fn()
                .mockImplementation(() => [
                    new ParkingBoy('1', [new ParkingLotId('1'), new ParkingLotId('2')], ParkingRules.ORDER),
                    new ParkingBoy('2', [new ParkingLotId('3'), new ParkingLotId('4')], ParkingRules.MOST_AVAILABLE),
                ]),
        }

        parkingLotRepository = {
            findParkingLotsByIds: jest
                .fn()
                .mockImplementation(() => [
                    new ParkingLot('1', 1),
                    new ParkingLot('2', 2),
                    new ParkingLot('3', 1),
                    new ParkingLot('4', 2),
                ]),
        }

        parkingBoyService = new ParkingBoyService(parkingBoyRepository, parkingLotRepository)
    })

    it('should return triples when findParkingBoys', () => {
        const triples = parkingBoyService.findParkingBoys()

        expect(parkingBoyRepository.findParkingBoys).toBeCalledTimes(1)
        expect(parkingLotRepository.findParkingLotsByIds).toBeCalledTimes(1)
        expect(parkingLotRepository.findParkingLotsByIds.mock.calls[0][0]).toContainEqual(new ParkingLotId('1'))
        expect(parkingLotRepository.findParkingLotsByIds.mock.calls[0][0]).toContainEqual(new ParkingLotId('2'))
        expect(parkingLotRepository.findParkingLotsByIds.mock.calls[0][0]).toContainEqual(new ParkingLotId('3'))
        expect(parkingLotRepository.findParkingLotsByIds.mock.calls[0][0]).toContainEqual(new ParkingLotId('4'))

        expect(triples.length).toBe(2)
        expect(triples[0][0].id).toEqual(new ParkingBoyId('1'))
        expect(triples[0][1].map(({id}) => id)).toContainEqual(new ParkingLotId('1'))
        expect(triples[0][1].map(({id}) => id)).toContainEqual(new ParkingLotId('2'))

        expect(triples[1][0].id).toEqual(new ParkingBoyId('2'))
        expect(triples[1][1].map(({id}) => id)).toContainEqual(new ParkingLotId('3'))
        expect(triples[1][1].map(({id}) => id)).toContainEqual(new ParkingLotId('4'))
    })
})
