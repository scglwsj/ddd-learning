using System.Collections.Generic;
using System.Linq;

namespace Parking
{
    public class OderParkingBoyRule : IParkingBoyRule
    {
        public ParkingLot FindOneValidParkingLot(IReadOnlyList<ParkingLot> parkingLots) =>
            parkingLots.FirstOrDefault(parkingLot => parkingLot.HasAvailableSpaces);
    }
}
