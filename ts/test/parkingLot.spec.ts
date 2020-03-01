/** @format */

import {Car} from '../src/car'
import {ParkingLot} from '../src/parkingLot'

describe('parking lot test', () => {
    let lot: ParkingLot
    beforeEach(() => {
        lot = new ParkingLot(2)
    })

    it('should return a ticket when given a car', () => {
        const car = new Car('川A 1B2C3')
        const ticket = lot.park(car)
        expect(ticket).toBeDefined()
    })

    it('should return a car when given a ticket', () => {
        const car = new Car('川A 1B2C3')
        const ticket = lot.park(car)

        const takeCar = lot.take(ticket)

        expect(takeCar).toBe(car)
    })

    it('should throw an error when given too many cars', () => {
        const car1 = new Car('川A 11111')
        const car2 = new Car('川A 22222')
        const car3 = new Car('川A 33333')
        lot.park(car1)
        lot.park(car2)

        expect(() => lot.park(car3)).toThrowError()
    })

    it('should throw an error when given an invalid ticket', () => {
        const car = new Car('川A 1B2C3')
        const ticket = lot.park(car)
        lot.take(ticket)

        expect(() => lot.take(ticket)).toThrowError()
    })
})
