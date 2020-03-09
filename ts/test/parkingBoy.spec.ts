/** @format */

import {ParkingLot} from '../src/parkingLot/parkingLot'
import {Car} from '../src/parkingLot/car'
import {ParkingBoy} from '../src/parkingBoy/parkingBoy'
import {OderParkingBoyRule} from '../src/parkingBoy/orderParkingBoyRule'
import {MostAvailableParkingBoyRule} from '../src/parkingBoy/mostAvailableParkingBoyRule'

describe('parking boy test', () => {
    let parkingBoy: ParkingBoy
    let parkingLot1: ParkingLot
    let parkingLot2: ParkingLot

    beforeEach(() => {
        parkingLot1 = new ParkingLot(1)
        parkingLot2 = new ParkingLot(2)
        parkingBoy = new ParkingBoy([parkingLot1, parkingLot2], new OderParkingBoyRule())
    })

    it('should return first lot', () => {
        const parkingLot = parkingBoy.findOneValidParkingLot()!!

        expect(parkingLot.id).toEqual(parkingLot1.id)
    })

    it('should return second lot when parked one car', () => {
        parkingBoy.findOneValidParkingLot()!!.park(new Car('川A 11111'))

        const parkingLot = parkingBoy.findOneValidParkingLot()!!

        expect(parkingLot.id).toEqual(parkingLot2.id)
    })

    it('should return null when parked three cars', () => {
        const car1 = new Car('川A 11111')
        const car2 = new Car('川B 22222')
        const car3 = new Car('川C 33333')
        parkingBoy.findOneValidParkingLot()!!.park(car1)
        parkingBoy.findOneValidParkingLot()!!.park(car2)
        parkingBoy.findOneValidParkingLot()!!.park(car3)

        const parkingLot = parkingBoy.findOneValidParkingLot()

        expect(parkingLot).toBeNull()
    })

    it('should return second lot when parking boy use senior rule', () => {
        parkingBoy = new ParkingBoy([parkingLot1, parkingLot2], new MostAvailableParkingBoyRule())

        const parkingLot = parkingBoy.findOneValidParkingLot()!!

        expect(parkingLot.id).toEqual(parkingLot2.id)
    })
})
