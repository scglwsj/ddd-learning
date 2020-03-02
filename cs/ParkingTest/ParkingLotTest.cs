using Parking;
using System;
using Xunit;

namespace ParkingTest
{
    public class ParkingLotTest
    {
        private readonly ParkingLot parkingLot;

        public ParkingLotTest()
        {
            parkingLot = new ParkingLot(2);
        }

        [Fact]
        public void Should_return_a_ticket_when_given_a_car()
        {
            var car = new Car("川A 1B2C3");
            var ticket = parkingLot.Park(car);
            Assert.NotNull(ticket);
        }

        [Fact]
        public void Should_return_a_car_when_given_a_ticket()
        {
            var car = new Car("川A 1B2C3");
            var ticket = parkingLot.Park(car);

            var takeCar = parkingLot.Take(ticket);

            Assert.Equal(car, takeCar);
        }

        [Fact]
        public void Should_throw_an_exception_when_given_too_many_cars()
        {
            var car1 = new Car("川A 11111");
            var car2 = new Car("川A 22222");
            var car3 = new Car("川A 33333");
            parkingLot.Park(car1);
            parkingLot.Park(car2);

            Assert.Throws<Exception>(() => parkingLot.Park(car3));
        }

        [Fact]
        public void Should_throw_an_exception_when_given_an_invalid_ticket()
        {
            var car = new Car("川A 1B2C3");
            var ticket = parkingLot.Park(car);
            parkingLot.Take(ticket);

            Assert.Throws<Exception>(() => parkingLot.Take(ticket));
        }
    }
}
