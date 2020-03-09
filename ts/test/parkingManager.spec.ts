/** @format */

import {ParkingManager} from '../src/parkingManager/parkingManager'
import {ParkingBoy} from '../src/parkingBoy/parkingBoy'
import {ParkingLot} from '../src/parkingLot/parkingLot'
import {Car} from '../src/parkingLot/car'
import {OderParkingBoyRule} from '../src/parkingBoy/orderParkingBoyRule'
import {MostAvailableParkingBoyRule} from '../src/parkingBoy/mostAvailableParkingBoyRule'

describe('parking manager tets.', () => {
    let parkingManager: ParkingManager
    let parkingLots: ParkingLot[]

    beforeEach(() => {
        const parkingLot1 = new ParkingLot(1)
        const parkingLot2 = new ParkingLot(1)
        parkingLots = [parkingLot1, parkingLot2]
        parkingManager = new ParkingManager([
            new ParkingBoy([parkingLot1], new OderParkingBoyRule()),
            new ParkingBoy([parkingLot2], new MostAvailableParkingBoyRule()),
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
