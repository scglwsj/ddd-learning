/** @format */

export abstract class ValueObject<T> {
    protected constructor(protected readonly value: T) {}

    public toString() {
        return `${this.value}`
    }

    public equals(other: any) {
        return other.constructor.name === this.constructor.name && other.value === this.value
    }
}
