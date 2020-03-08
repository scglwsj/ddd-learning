using System.Collections.Generic;
using System.Linq;

namespace Parking
{
    class MostAvailableParkingBoyService : IParkingBoyService
    {
        public ParkingLot FindOneValidParkingLot(IReadOnlyList<ParkingLot> parkingLots) =>
            parkingLots
            .OrderByDescending(parkingLot => parkingLot.AvailableSpaces)
            .FirstOrDefault(parkingLot => parkingLot.HasAvailableSpaces);
    }
}
