/** @format */

import {Car} from './car'
import {Ticket} from './ticket'
import {ValueObject} from './valueObject'
import {v4 as uuid} from 'uuid'

export class ParkingLot {
    private readonly _id: ParkingLotID
    private _availableSpaces: number
    private parkedCars: Map<Ticket, Car>

    constructor(totalSpaces: number) {
        this._id = new ParkingLotID(uuid())
        this._availableSpaces = totalSpaces
        this.parkedCars = new Map<Ticket, Car>()
    }

    public get id() {
        return this._id
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

        const ticket = new Ticket(car.plant, this._id)
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

export class ParkingLotID extends ValueObject<String> {
    constructor(parkingLotID: String) {
        super(parkingLotID)
    }
}
