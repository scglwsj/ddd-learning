using System;
using System.Collections.Generic;
using System.Linq;

namespace Parking
{
    public class ParkingManager
    {
        private readonly IReadOnlyList<ParkingBoy> parkingBoys;

        public ParkingManager(IReadOnlyList<ParkingBoy> parkingBoys)
        {
            this.parkingBoys = parkingBoys;
        }

        private ParkingBoy FindOneValidParkingBoy() =>
        parkingBoys
        .OrderBy(_ => new Random().Next(0, parkingBoys.Count))
        .FirstOrDefault(parkingBoy => parkingBoy.CheckAvailableLot());

        public ParkingLot FindOneValidParkingLot() =>
            FindOneValidParkingBoy()?.FindOneValidParkingLot();
    }
}
