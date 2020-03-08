package com.github.scglwsj.parking

import com.github.scglwsj.parking.boy.BaseParkingBoy
import com.github.scglwsj.parking.boy.ParkingBoy
import com.github.scglwsj.parking.boy.SeniorParkingBoy
import com.github.scglwsj.parking.lot.Car
import com.github.scglwsj.parking.lot.ParkingLot
import com.github.scglwsj.parking.manager.ParkingManager
import org.junit.jupiter.api.Assertions.assertNotEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class ParkingManagerTest {
    private lateinit var parkingManager: ParkingManager
    private lateinit var parkingBoys: List<BaseParkingBoy>

    @BeforeEach
    fun setUp() {
        val parkingBoy1 = ParkingBoy(listOf(ParkingLot(1)))
        val parkingBoy2 = SeniorParkingBoy(listOf(ParkingLot(1)))
        parkingBoys = listOf(parkingBoy1, parkingBoy2)
        parkingManager = ParkingManager(parkingBoys)
    }

    @Test
    fun `should return one of the parking boys`() {
        val parkingBoy = parkingManager.findOneValidParkingBoy()!!

        assertTrue(parkingBoy in parkingBoys)
    }

    @Test
    fun `should return another one when parked one car`() {
        val oneBoy = parkingManager.findOneValidParkingBoy()!!
        oneBoy.findOneValidParkingLot()!!.park(Car("川A 11111"))

        val anotherBoy = parkingManager.findOneValidParkingBoy()!!

        assertTrue(anotherBoy in parkingBoys)
        assertNotEquals(oneBoy, anotherBoy)
    }
}
