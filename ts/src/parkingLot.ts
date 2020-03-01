/** @format */

import {Car} from './car'
import {Ticket} from './ticket'
import {ValueObject} from './valueObject'
import {v4 as uuid} from 'uuid'

export class ParkingLot {
    private _id: ParkingLotID
    private capacity: number
    private parkedCars: Map<Ticket, Car>

    constructor(totalPosition: number) {
        this._id = new ParkingLotID(uuid())
        this.capacity = totalPosition
        this.parkedCars = new Map<Ticket, Car>()
    }

    public get id() {
        return this._id
    }

    public park(car: Car) {
        if (this.capacity <= 0) {
            throw new Error('capacity is not enough.')
        }

        const ticket = new Ticket(car.plant, this._id)
        this.parkedCars.set(ticket, car)
        this.capacity--
        return ticket
    }

    public take(ticket: Ticket) {
        if (!ticket.isValid || !this.parkedCars.has(ticket)) {
            throw new Error('Ticket is invalided.')
        }

        const car = this.parkedCars.get(ticket)
        ticket.invalid()
        this.parkedCars.delete(ticket)
        this.capacity++
        return car
    }
}

export class ParkingLotID extends ValueObject<String> {}
