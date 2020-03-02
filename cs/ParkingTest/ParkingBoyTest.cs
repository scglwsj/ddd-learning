using Parking;
using System.Collections.Generic;
using Xunit;

namespace ParkingTest
{
    public class ParkingBoyTest
    {
        readonly ParkingBoy parkingBoy;
        readonly ParkingLot parkingLot1;
        readonly ParkingLot parkingLot2;

        public ParkingBoyTest()
        {
            parkingLot1 = new ParkingLot(1);
            parkingLot2 = new ParkingLot(2);
            parkingBoy = new ParkingBoy(new List<ParkingLot> { parkingLot1, parkingLot2 });
        }

        [Fact]
        public void Should_park_in_first_lot_when_given_a_car()
        {
            var car = new Car("川A 1B2C3");
            var ticket = parkingBoy.Park(car);
            Assert.Equal(parkingLot1.ID, ticket.ParkingLotID);
        }

        [Fact]
        public void Should_park_in_second_lot_when_given_one_more_car()
        {
            var car1 = new Car("川A 11111");
            var car2 = new Car("川A 22222");
            parkingBoy.Park(car1);

            var ticket = parkingBoy.Park(car2);

            Assert.Equal(parkingLot2.ID, ticket.ParkingLotID);
        }
    }
}
