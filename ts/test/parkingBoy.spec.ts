/** @format */

import {ParkingBoy} from '../src/parkingBoy/parkingBoy'
import {ParkingLot} from '../src/parkingLot/parkingLot'
import {Car} from '../src/parkingLot/car'
import { SeniorParkingBoy } from '../src/parkingBoy/seniorParkingBoy'

describe('parking boy test', () => {
    let parkingBoy: ParkingBoy
    let parkingLot1: ParkingLot
    let parkingLot2: ParkingLot

    beforeEach(() => {
        parkingLot1 = new ParkingLot(1)
        parkingLot2 = new ParkingLot(2)
        parkingBoy = new ParkingBoy([parkingLot1, parkingLot2])
    })

    it('should return first lot', () => {
        const parkingLot = parkingBoy.findOneAviliedParkingLot()!!

        expect(parkingLot.id).toEqual(parkingLot1.id)
    })

    it('should return second lot when parked one car', () => {
        const car = new Car('川A 11111')
        parkingBoy.findOneAviliedParkingLot()!!.park(car)

        const parkingLot = parkingBoy.findOneAviliedParkingLot()!!

        expect(parkingLot.id).toEqual(parkingLot2.id)
    })

    it('should return null when parked three cars', () => {
        const car1 = new Car('川A 11111')
        const car2 = new Car('川B 22222')
        const car3 = new Car('川C 33333')
        parkingBoy.findOneAviliedParkingLot()!!.park(car1)
        parkingBoy.findOneAviliedParkingLot()!!.park(car2)
        parkingBoy.findOneAviliedParkingLot()!!.park(car3)

        const parkingLot = parkingBoy.findOneAviliedParkingLot()

        expect(parkingLot).toBeNull()
    })

    it('should return second lot when parking boy is senior', () => {
        parkingBoy = new SeniorParkingBoy([parkingLot1, parkingLot2])

        const parkingLot = parkingBoy.findOneAviliedParkingLot()!!

        expect(parkingLot.id).toEqual(parkingLot2.id)
    })
})
