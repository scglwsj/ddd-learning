package com.github.scglwsj.parking

import com.github.scglwsj.parking.boy.ParkingBoy
import com.github.scglwsj.parking.boy.SeniorParkingBoy
import com.github.scglwsj.parking.lot.Car
import com.github.scglwsj.parking.lot.ParkingLot
import com.github.scglwsj.parking.manager.ParkingManager
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertNotEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class ParkingManagerTest {
    private lateinit var parkingManager: ParkingManager
    private lateinit var parkingBoy1: ParkingBoy
    private lateinit var parkingBoy2: ParkingBoy

    @BeforeEach
    fun setUp() {

        parkingBoy1 = ParkingBoy(listOf(ParkingLot(1)))
        parkingBoy2 = SeniorParkingBoy(listOf(ParkingLot(1)))
        parkingManager = ParkingManager(listOf(parkingBoy1, parkingBoy2))
    }

    @Test
    fun `should return one of the parking boys`() {
        val parkingBoy = parkingManager.findOneValidParkingBoy()!!

        assertTrue(listOf(parkingBoy1, parkingBoy2).contains(parkingBoy))
    }

    @Test
    fun `should return another one when parked one car`() {
        val oneBoy = parkingManager.findOneValidParkingBoy()!!
        oneBoy.findOneValidParkingLot()!!.park(Car("川A 11111"))

        val anotherBoy = parkingManager.findOneValidParkingBoy()!!

        assertTrue(listOf(parkingBoy1, parkingBoy2).contains(anotherBoy))
        assertNotEquals(oneBoy, anotherBoy)
    }
}
