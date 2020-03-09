using System.Collections.Generic;
using System.Linq;

namespace Parking
{
    public class MostAvailableParkingBoyRule : IParkingBoyRule
    {
        public ParkingLot FindOneValidParkingLot(IReadOnlyList<ParkingLot> parkingLots) =>
            parkingLots
            .OrderByDescending(parkingLot => parkingLot.AvailableSpaces)
            .FirstOrDefault(parkingLot => parkingLot.HasAvailableSpaces);
    }
}
