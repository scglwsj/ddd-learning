/** @format */

import {ValueObject} from './valueObject'
import {v4 as uuid} from 'uuid'
import {Plate} from './car'
import {ParkingLotID} from './parkingLot'

export class Ticket extends ValueObject<TicketID> {
    private valid: Boolean

    public constructor(public readonly car: Plate, public readonly ParkingLot: ParkingLotID) {
        super(new TicketID(uuid()))
        this.valid = true
    }

    public get isValid() {
        return this.valid
    }

    public get id() {
        return this.value
    }

    public invalid() {
        this.valid = false
    }
}

export class TicketID extends ValueObject<String> {}
