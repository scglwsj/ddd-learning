package com.github.scglwsj.parking

class Car(plant: String) : ValueObject<PlateNumber>(PlateNumber(plant)) {
    val plant:PlateNumber get() = this.value
}

class PlateNumber(plant: String) : ValueObject<String>(plant)
