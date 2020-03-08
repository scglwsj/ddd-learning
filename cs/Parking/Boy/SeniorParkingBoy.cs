using System.Collections.Generic;

namespace Parking
{
    public class SeniorParkingBoy : BaseParkingBoy
    {
        public SeniorParkingBoy(IReadOnlyList<ParkingLot> parkingLots) : base(parkingLots, new MostAvailableParkingBoyService()) { }
    }
}
