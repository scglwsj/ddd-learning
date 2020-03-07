/** @format */

import {ParkingManager} from '../src/parkingManager/parkingManager'
import {ParkingBoy} from '../src/parkingBoy/parkingBoy'
import {ParkingLot} from '../src/parkingLot/parkingLot'
import {Car} from '../src/parkingLot/car'

describe('parking manager tets.', () => {
    // jest.mock('../src/parkingLot/ParkingBoy')
    // const MockedParkingBoy = <jest.Mocked<typeof ParkingBoy>>ParkingBoy
    let parkingManager: ParkingManager
    let parkingBoy1: ParkingBoy
    let parkingBoy2: ParkingBoy

    beforeEach(() => {
        parkingBoy1 = new ParkingBoy([new ParkingLot(1)])
        parkingBoy2 = new ParkingBoy([new ParkingLot(1)])
        parkingManager = new ParkingManager([parkingBoy1, parkingBoy2])
    })

    it('should return one of the parking boys', () => {
        const parkingBoy = parkingManager.findOneAviliedParkingBoy()!!

        expect([parkingBoy1, parkingBoy2].includes(parkingBoy)).toBeTruthy()
    })

    it('should return another one when parked one car', () => {
        const oneBoy = parkingManager.findOneAviliedParkingBoy()!!
        oneBoy.findOneAviliedParkingLot()!!.park(new Car('川A 11111'))

        const anotherBoy = parkingManager.findOneAviliedParkingBoy()!!

        expect([parkingBoy1, parkingBoy2].includes(anotherBoy)).toBeTruthy()
        expect(anotherBoy).not.toEqual(oneBoy)
    })
})
