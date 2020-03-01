/** @format */

export abstract class ValueObject<T> {
    public constructor(protected readonly value: T) {}

    public toString(): string {
        return `${this.value}`
    }

    public equals(other: ValueObject<any>) {
        return other.constructor.name === this.constructor.name && other.value === this.value
    }
}
