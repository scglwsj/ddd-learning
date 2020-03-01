package com.github.scglwsj.parking

import org.junit.jupiter.api.Assertions.assertEquals
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
        parkingBoy = ParkingBoy(listOf(parkingLot1, parkingLot2))
    }

    @Test
    fun `should park in first lot when given a car`() {
        val car = Car("'川A 11111")
        val ticket = parkingBoy.park(car)
        assertEquals(parkingLot1.id, ticket.parkingLotID)
    }

    @Test
    fun `should park in second lot when given one more car`() {
        val car1 = Car("川A 11111")
        val car2 = Car("川A 22222")
        parkingBoy.park(car1)

        val ticket = parkingBoy.park(car2)

        assertEquals(parkingLot2.id, ticket.parkingLotID)

    }
}
