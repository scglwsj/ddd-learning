package com.github.scglwsj.parking

import com.github.scglwsj.parking.boy.MostAvailableParkingBoyRule
import com.github.scglwsj.parking.boy.OderParkingBoyRule
import com.github.scglwsj.parking.boy.ParkingBoy
import com.github.scglwsj.parking.lot.Car
import com.github.scglwsj.parking.lot.ParkingLot
import com.github.scglwsj.parking.manager.ParkingManager
import org.junit.jupiter.api.Assertions.assertNotEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class ParkingManagerTest {
    private lateinit var parkingManager: ParkingManager
    private lateinit var parkingLots: List<ParkingLot>

    @BeforeEach
    fun setUp() {
        val parkingLot1 = ParkingLot(1)
        val parkingLot2 = ParkingLot(1)
        parkingLots = listOf(parkingLot1, parkingLot2)
        parkingManager = ParkingManager(
            listOf(
                ParkingBoy(listOf(parkingLot1), OderParkingBoyRule()),
                ParkingBoy(listOf(parkingLot2), MostAvailableParkingBoyRule())
            )
        )
    }

    @Test
    fun `should return one of the parking lots`() {
        val parkingLot = parkingManager.findOneValidParkingLot()!!

        assertTrue(parkingLot in parkingLots)
    }

    @Test
    fun `should return another one when parked one car`() {
        val oneLot = parkingManager.findOneValidParkingLot()!!
            .also { it.park(Car("川A 11111")) }

        val anotherLot = parkingManager.findOneValidParkingLot()!!

        assertTrue(anotherLot in parkingLots)
        assertNotEquals(oneLot, anotherLot)
    }
}
