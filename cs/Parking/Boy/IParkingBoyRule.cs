using System.Collections.Generic;

namespace Parking
{
    public interface IParkingBoyRule
    {
        ParkingLot FindOneValidParkingLot(IReadOnlyList<ParkingLot> parkingLots);
    }
}
