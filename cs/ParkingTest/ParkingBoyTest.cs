using Parking;
using System.Collections.Generic;
using Xunit;

namespace ParkingTest
{
    public class ParkingBoyTest
    {
        BaseParkingBoy parkingBoy;
        readonly ParkingLot parkingLot1;
        readonly ParkingLot parkingLot2;

        public ParkingBoyTest()
        {
            parkingLot1 = new ParkingLot(1);
            parkingLot2 = new ParkingLot(2);
            parkingBoy = new ParkingBoy(new List<ParkingLot> { parkingLot1, parkingLot2 });
        }

        [Fact]
        public void Should_return_first_lot()
        {
            var parkingLot = parkingBoy.FindOneValidParkingLot();
            Assert.Equal(parkingLot1.ID, parkingLot.ID);
        }

        [Fact]
        public void Should_return_second_lot_when_parked_one_car()
        {
            parkingBoy.FindOneValidParkingLot()!.Park(new Car("川A 11111"));
          
            var parkingLot = parkingBoy.FindOneValidParkingLot();

            Assert.Equal(parkingLot2.ID, parkingLot.ID);
        }

        [Fact]
        public void Should_return_null_when_parked_three_cars()
        {
            parkingBoy.FindOneValidParkingLot()!.Park(new Car("川A 11111"));
            parkingBoy.FindOneValidParkingLot()!.Park(new Car("川B 22222"));
            parkingBoy.FindOneValidParkingLot()!.Park(new Car("川C 33333"));

            var parkingLot = parkingBoy.FindOneValidParkingLot();

            Assert.Null(parkingLot);
        }

        [Fact]
        public void Should_return_second_lot_when_parking_boy_is_senior()
        {
            parkingBoy = new SeniorParkingBoy(new List<ParkingLot> { parkingLot1, parkingLot2 });
            
            var parkingLot = parkingBoy.FindOneValidParkingLot();

            Assert.Equal(parkingLot2.ID, parkingLot.ID);
        }
    }
}
