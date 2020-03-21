/** @format */

import {ValueObject} from '../../valueObject'

export class Car extends ValueObject<PlateNumber> {
    public constructor(plant: String) {
        super(new PlateNumber(plant))
    }

    public get plant() {
        return this.value
    }
}

export class PlateNumber extends ValueObject<String> {}
