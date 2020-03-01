/** @format */

import {ParkingBoy} from '../src/parkingBoy'
import {ParkingLot} from '../src/parkingLot'
import {Car} from '../src/car'

describe('parking boy test', () => {
    let boy: ParkingBoy
    let lot1: ParkingLot
    let lot2: ParkingLot

    beforeEach(() => {
        lot1 = new ParkingLot(1)
        lot2 = new ParkingLot(2)
        boy = new ParkingBoy([lot1, lot2])
    })

    it('should park in first lot when given a car', () => {
        const car = new Car('川A 11111')
        const ticket = boy.park(car)
        expect(ticket.ParkingLot).toEqual(lot1.id)
    })

    it('should park in second lot when given one more car', () => {
        const car1 = new Car('川A 11111')
        const car2 = new Car('川A 22222')
        boy.park(car1)

        const ticket = boy.park(car2)

        expect(ticket.ParkingLot).toEqual(lot2.id)
    })
})
