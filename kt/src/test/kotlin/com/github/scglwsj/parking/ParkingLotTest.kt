package com.github.scglwsj.parking

import com.github.scglwsj.parking.lot.Car
import com.github.scglwsj.parking.lot.ParkingLot
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows


internal class ParkingLotTest {
    private lateinit var parkingLot: ParkingLot

    @BeforeEach
    fun setUp() {
        parkingLot = ParkingLot(2)
    }

    @Test
    fun `should return ticket when given a car`() {
        val car = Car("川A 1B2C3")
        val ticket = parkingLot.park(car)
        assertNotNull(ticket)
    }

    @Test
    fun `should return a car when given a ticket`() {
        val car = Car("川A 1B2C3")
        val takeCar = parkingLot.park(car)
            .let { parkingLot.take(it) }
        assertEquals(car, takeCar)
    }

    @Test
    fun `should throw an exception when given too many cars`() {
        val car1 = Car("川A 11111")
        val car2 = Car("川A 22222")
        val car3 = Car("川A 33333")
        parkingLot.park(car1)
        parkingLot.park(car2)

        assertThrows<Exception> {
            parkingLot.park(car3)
        }
    }

    @Test
    fun `should throw an exception when given an invalid ticket`() {
        val car = Car("川A 1B2C3")
        val ticket = parkingLot.park(car)
        parkingLot.take(ticket)

        assertThrows<Exception> {
            parkingLot.take(ticket)
        }
    }
}
