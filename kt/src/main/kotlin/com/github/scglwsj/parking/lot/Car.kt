package com.github.scglwsj.parking.lot

import com.github.scglwsj.parking.ValueObject

class Car(plant: String) : ValueObject<PlateNumber>(
    PlateNumber(plant)
) {
    val plant: PlateNumber get() = this.value
}

class PlateNumber(plant: String) : ValueObject<String>(plant)
