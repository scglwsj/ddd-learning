using System.Collections.Generic;

namespace Parking
{
    public interface IParkingBoyService
    {
        ParkingLot FindOneValidParkingLot(IReadOnlyList<ParkingLot> parkingLots);
    }
}
