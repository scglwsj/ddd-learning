/** @format */

import {ParkingBoy} from '../src/parkingBoy'
import {ParkingLot} from '../src/parkingLot'
import {Car} from '../src/car'

describe('parking boy test', () => {
    let parkingBoy: ParkingBoy
    let parkingLot1: ParkingLot
    let parkingLot2: ParkingLot

    beforeEach(() => {
        parkingLot1 = new ParkingLot(1)
        parkingLot2 = new ParkingLot(2)
        parkingBoy = new ParkingBoy([parkingLot1, parkingLot2])
    })

    it('should park in first lot when given a car', () => {
        const car = new Car('川A 11111')
        const ticket = parkingBoy.park(car)
        expect(ticket.ParkingLot).toEqual(parkingLot1.id)
    })

    it('should park in second lot when given one more car', () => {
        const car1 = new Car('川A 11111')
        const car2 = new Car('川A 22222')
        parkingBoy.park(car1)

        const ticket = parkingBoy.park(car2)

        expect(ticket.ParkingLot).toEqual(parkingLot2.id)
    })
})
