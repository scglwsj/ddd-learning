using System.Collections.Generic;
using System.Linq;

namespace Parking
{
    class OderParkingBoyService : IParkingBoyService
    {
        public ParkingLot FindOneValidParkingLot(IReadOnlyList<ParkingLot> parkingLots) => 
            parkingLots.FirstOrDefault(parkingLot => parkingLot.HasAvailableSpaces);
    }
}
