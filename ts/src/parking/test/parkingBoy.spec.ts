/** @format */

import {ParkingBoy} from '../domain/parkingLot/finder/parkingBoy'
import {ParkingLot} from '../domain/parkingLot/parking/parkingLot'
import {OderParkingBoyRule} from '../domain/parkingLot/rule/orderParkingBoyRule'
import {Car} from '../domain/parkingLot/parking/car'
import {MostAvailableParkingBoyRule} from '../domain/parkingLot/rule/mostAvailableParkingBoyRule'

describe('parking boy test', () => {
    let parkingBoy: ParkingBoy
    let parkingLot1: ParkingLot
    let parkingLot2: ParkingLot

    beforeEach(() => {
        parkingLot1 = new ParkingLot('1', 1)
        parkingLot2 = new ParkingLot('2', 2)
        parkingBoy = new ParkingBoy('1', [parkingLot1, parkingLot2], new OderParkingBoyRule())
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
        parkingBoy = new ParkingBoy('2', [parkingLot1, parkingLot2], new MostAvailableParkingBoyRule())

        const parkingLot = parkingBoy.findOneValidParkingLot()!!

        expect(parkingLot.id).toEqual(parkingLot2.id)
    })
})
