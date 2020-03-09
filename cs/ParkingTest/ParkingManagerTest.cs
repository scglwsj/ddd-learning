using Parking;
using System.Collections.Generic;
using Xunit;

namespace ParkingTest
{
    public class ParkingManagerTest
    {
        readonly ParkingManager parkingManager;
        readonly IReadOnlyList<ParkingLot> parkingLots;

        public ParkingManagerTest()
        {
            var parkingLot1 = new ParkingLot(1);
            var parkingLot2 = new ParkingLot(1);
            parkingLots = new List<ParkingLot> { parkingLot1, parkingLot2 };
            parkingManager = new ParkingManager(new List<ParkingBoy> {
                new ParkingBoy(new List<ParkingLot> { parkingLot1 }, new OderParkingBoyRule()),
                new ParkingBoy(new List<ParkingLot> { parkingLot2 }, new MostAvailableParkingBoyRule())
            });
        }

        [Fact]
        public void Should_return_one_of_the_parking_lots()
        {
            var parkingLot = parkingManager.FindOneValidParkingLot();

            Assert.Contains(parkingLot, parkingLots);
        }

        [Fact]
        public void Should_return_another_one_when_parked_one_car()
        {
            var oneLot = parkingManager.FindOneValidParkingLot();
            oneLot.Park(new Car("川A 11111"));

            var anotherLot = parkingManager.FindOneValidParkingLot();

            Assert.Contains(anotherLot, parkingLots);
            Assert.NotEqual(oneLot, anotherLot);
        }
    }
}
