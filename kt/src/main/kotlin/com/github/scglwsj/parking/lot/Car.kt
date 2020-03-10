package com.github.scglwsj.parking.lot

data class Car(private val plantString: String) {
    val plant = PlateNumber(plantString)
}

data class PlateNumber(val plant: String)
