using Parking;
using System.Collections.Generic;
using Xunit;

namespace ParkingTest
{
    public class ParkingManagerTest
    {
        readonly ParkingManager parkingManager;
        readonly IReadOnlyList<BaseParkingBoy> parkingBoys;

        public ParkingManagerTest()
        {
            var parkingBoy1 = new ParkingBoy(new List<ParkingLot> { new ParkingLot(1) });
            var parkingBoy2 = new SeniorParkingBoy(new List<ParkingLot> { new ParkingLot(1) });
            parkingBoys = new List<BaseParkingBoy> { parkingBoy1, parkingBoy2 };
            parkingManager = new ParkingManager(parkingBoys);
        }

        [Fact]
        public void Should_return_one_of_the_parking_boys()
        {
            var parkingBoy = parkingManager.FindOneValidParkingBoy();

            Assert.Contains(parkingBoy, parkingBoys);
        }

        [Fact]
        public void Should_return_another_one_when_parked_one_car()
        {
            var oneBoy = parkingManager.FindOneValidParkingBoy();
            oneBoy.FindOneValidParkingLot().Park(new Car("川A 11111"));

            var anotherBoy = parkingManager.FindOneValidParkingBoy();

            Assert.Contains(anotherBoy, parkingBoys);
            Assert.NotEqual(oneBoy, anotherBoy);
        }
    }
}
