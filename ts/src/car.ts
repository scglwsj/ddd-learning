/** @format */

import {ValueObject} from './valueObject'

export class Car extends ValueObject<Plate> {
    public constructor(plant: String) {
        super(new Plate(plant))
    }

    public get plant() {
        return this.value
    }
}

export class Plate extends ValueObject<String> {}
