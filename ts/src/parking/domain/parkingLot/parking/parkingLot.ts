/** @format */

import {Car} from './car'
import {Ticket} from './ticket'
import {ValueObject} from '../../valueObject'

export class ParkingLot {
    private _availableSpaces: number
    private parkedCars: Map<Ticket, Car>
    public readonly id: ParkingLotId

    constructor(id: string, totalSpaces: number) {
        this._availableSpaces = totalSpaces
        this.parkedCars = new Map<Ticket, Car>()
        this.id = new ParkingLotId(id)
    }

    public get availableSpaces() {
        return this._availableSpaces
    }

    public get hasAvailableSpaces() {
        return this._availableSpaces > 0
    }

    public park(car: Car) {
        if (this._availableSpaces <= 0) {
            throw new Error('capacity is not enough.')
        }

        const ticket = new Ticket(car.plant, this.id)
        this.parkedCars.set(ticket, car)
        this._availableSpaces--
        return ticket
    }

    public take(ticket: Ticket) {
        if (!ticket.isValid || !this.parkedCars.has(ticket)) {
            throw new Error('Ticket is invalided.')
        }

        const car = this.parkedCars.get(ticket)
        ticket.invalidate()
        this.parkedCars.delete(ticket)
        this._availableSpaces++
        return car
    }
}

export class ParkingLotId extends ValueObject<String> {
    constructor(parkingLotID: String) {
        super(parkingLotID)
    }
}
