/** @format */

import {ParkingLot, ParkingLotId} from '../domain/parkingLot/parking/parkingLot'
import {ParkingBoy} from '../domain/parkingLot/finder/parkingBoy'
import {OderParkingBoyRule} from '../domain/parkingLot/rule/orderParkingBoyRule'
import {MostAvailableParkingBoyRule} from '../domain/parkingLot/rule/mostAvailableParkingBoyRule'
import {Car} from '../domain/parkingLot/parking/car'
import {ParkingManager} from '../domain/parkingLot/finder/parkingManager'

describe('parking manager tets.', () => {
    let parkingManager: ParkingManager
    let parkingLots: ParkingLot[]

    beforeEach(() => {
        const parkingLot1 = new ParkingLot(new ParkingLotId('1'), 1)
        const parkingLot2 = new ParkingLot(new ParkingLotId('2'), 1)
        parkingLots = [parkingLot1, parkingLot2]
        parkingManager = new ParkingManager([
            new ParkingBoy('1', [parkingLot1], new OderParkingBoyRule()),
            new ParkingBoy('2', [parkingLot2], new MostAvailableParkingBoyRule()),
        ])
    })

    it('should return one of the parking lots', () => {
        const parkingLot = parkingManager.findOneValidParkingLot()!!

        expect(parkingLots).toContain(parkingLot)
    })

    it('should return another one when parked one car', () => {
        const oneLot = parkingManager.findOneValidParkingLot()!!
        oneLot.park(new Car('川A 11111'))

        const anotherLot = parkingManager.findOneValidParkingLot()!!

        expect(parkingLots).toContain(anotherLot)
        expect(anotherLot).not.toEqual(oneLot)
    })
})
