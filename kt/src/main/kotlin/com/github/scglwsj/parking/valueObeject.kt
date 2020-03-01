package com.github.scglwsj.parking

abstract class ValueObject<T>(protected val value: T) {
    override fun toString(): String = value.toString()

    override fun equals(other: Any?): Boolean =
            other?.javaClass == this.javaClass && (other as ValueObject<*>).value == value

    override fun hashCode(): Int {
        return value?.hashCode() ?: 0
    }

}
