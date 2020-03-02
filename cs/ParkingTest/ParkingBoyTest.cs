using parking;
using System.Collections.Generic;
using Xunit;

namespace ParkingTest
{
    public class ParkingBoyTest
    {
        readonly ParkingBoy _parkingBoy;
        readonly ParkingLot _parkingLot1;
        readonly ParkingLot _parkingLot2;

        public ParkingBoyTest()
        {
            _parkingLot1 = new ParkingLot(1);
            _parkingLot2 = new ParkingLot(2);
            _parkingBoy = new ParkingBoy(new List<ParkingLot> { _parkingLot1, _parkingLot2 });
        }

        [Fact]
        public void Should_park_in_first_lot_when_given_a_car()
        {
            var car = new Car("川A 1B2C3");
            var ticket = _parkingBoy.Park(car);
            Assert.Equal(_parkingLot1.ID, ticket.ParkingLotID);
        }

        [Fact]
        public void Should_park_in_second_lot_when_given_one_more_car()
        {
            var car1 = new Car("川A 11111");
            var car2 = new Car("川A 22222");
            _parkingBoy.Park(car1);

            var ticket = _parkingBoy.Park(car2);

            Assert.Equal(_parkingLot2.ID, ticket.ParkingLotID);
        }
    }
}
