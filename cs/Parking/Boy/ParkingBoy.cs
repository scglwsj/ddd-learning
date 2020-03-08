using System.Collections.Generic;

namespace Parking
{
    public class ParkingBoy : BaseParkingBoy
    {
        public ParkingBoy(IReadOnlyList<ParkingLot> parkingLots) : base(parkingLots, new OderParkingBoyService()) { }
    }
}
