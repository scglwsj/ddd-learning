package com.github.scglwsj.parking

import com.github.scglwsj.parking.boy.MostAvailableParkingBoyRule
import com.github.scglwsj.parking.boy.OderParkingBoyRule
import com.github.scglwsj.parking.boy.ParkingBoy
import com.github.scglwsj.parking.lot.Car
import com.github.scglwsj.parking.lot.ParkingLot
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertNull
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class ParkingBoyTest {
    private lateinit var parkingBoy: ParkingBoy
    private lateinit var parkingLot1: ParkingLot
    private lateinit var parkingLot2: ParkingLot

    @BeforeEach
    fun setUp() {
        parkingLot1 = ParkingLot(1)
        parkingLot2 = ParkingLot(2)
        parkingBoy = ParkingBoy(listOf(parkingLot1, parkingLot2), OderParkingBoyRule())
    }

    @Test
    fun `should return first lot`() {
        val parkingLot = parkingBoy.findOneValidParkingLot()!!
        assertEquals(parkingLot1.id, parkingLot.id)
    }

    @Test
    fun `should return second lot when parked one car`() {
        parkingBoy.findOneValidParkingLot()!!.park(Car("川A 11111"))

        val parkingLot = parkingBoy.findOneValidParkingLot()!!

        assertEquals(parkingLot2.id, parkingLot.id)
    }

    @Test
    fun `should return null when parked three cars`() {
        parkingBoy.findOneValidParkingLot()!!.park(Car("川A 11111"))
        parkingBoy.findOneValidParkingLot()!!.park(Car("川B 22222"))
        parkingBoy.findOneValidParkingLot()!!.park(Car("川C 33333"))

        val parkingLot = parkingBoy.findOneValidParkingLot()

        assertNull(parkingLot)
    }

    @Test
    fun `should return second lot when parking boy use senior rule`() {
        parkingBoy = ParkingBoy(listOf(parkingLot1, parkingLot2), MostAvailableParkingBoyRule())

        val parkingLot = parkingBoy.findOneValidParkingLot()!!

        assertEquals(parkingLot2.id, parkingLot.id)
    }
}
