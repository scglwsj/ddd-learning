/** @format */

import {ParkingManager} from '../src/parkingManager/parkingManager'
import {ParkingBoy} from '../src/parkingBoy/parkingBoy'
import {ParkingLot} from '../src/parkingLot/parkingLot'
import {Car} from '../src/parkingLot/car'
import {SeniorParkingBoy} from '../src/parkingBoy/seniorParkingBoy'
import {BaseParkingBoy} from '../src/parkingBoy/baseParkingBoy'

describe('parking manager tets.', () => {
    let parkingManager: ParkingManager
    let parkingBoys: BaseParkingBoy[]

    beforeEach(() => {
        const parkingBoy1 = new ParkingBoy([new ParkingLot(1)])
        const parkingBoy2 = new SeniorParkingBoy([new ParkingLot(1)])
        parkingBoys = [parkingBoy1, parkingBoy2]
        parkingManager = new ParkingManager(parkingBoys)
    })

    it('should return one of the parking boys', () => {
        const parkingBoy = parkingManager.findOneValidParkingBoy()!!

        expect(parkingBoys).toContain(parkingBoy)
    })

    it('should return another one when parked one car', () => {
        const oneBoy = parkingManager.findOneValidParkingBoy()!!
        oneBoy.findOneValidParkingLot()!!.park(new Car('川A 11111'))

        const anotherBoy = parkingManager.findOneValidParkingBoy()!!

        expect(parkingBoys).toContain(anotherBoy)
        expect(anotherBoy).not.toEqual(oneBoy)
    })
})
