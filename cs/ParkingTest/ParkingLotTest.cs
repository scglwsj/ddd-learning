using parking;
using System;
using Xunit;

namespace ParkingTest
{
    public class ParkingLotTest
    {
        private readonly ParkingLot _parkingLot;

        public ParkingLotTest()
        {
            _parkingLot = new ParkingLot(2);
        }

        [Fact]
        public void Should_return_a_ticket_when_given_a_car()
        {
            var car = new Car("川A 1B2C3");
            var ticket = _parkingLot.Park(car);
            Assert.NotNull(ticket);
        }

        [Fact]
        public void Should_return_a_car_when_given_a_ticket()
        {
            var car = new Car("川A 1B2C3");
            var ticket = _parkingLot.Park(car);

            var takeCar = _parkingLot.Take(ticket);

            Assert.Equal(car, takeCar);
        }

        [Fact]
        public void Should_throw_an_exception_when_given_too_many_cars()
        {
            var car1 = new Car("川A 11111");
            var car2 = new Car("川A 22222");
            var car3 = new Car("川A 33333");
            _parkingLot.Park(car1);
            _parkingLot.Park(car2);

            Assert.Throws<Exception>(() => _parkingLot.Park(car3));
        }

        [Fact]
        public void Should_throw_an_exception_when_given_an_invalid_ticket()
        {
            var car = new Car("川A 1B2C3");
            var ticket = _parkingLot.Park(car);
            _parkingLot.Take(ticket);

            Assert.Throws<Exception>(() => _parkingLot.Take(ticket));
        }
    }
}
