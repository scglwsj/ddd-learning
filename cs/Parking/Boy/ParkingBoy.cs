using System.Collections.Generic;
using System.Linq;

namespace Parking
{
    public class ParkingBoy
    {
        private readonly IParkingBoyRule parkingBoyRule;
        private readonly IReadOnlyList<ParkingLot> parkingLots;

        public ParkingBoy(IReadOnlyList<ParkingLot> parkingLots, IParkingBoyRule parkingBoyRule)
        {
            this.parkingLots = parkingLots;
            this.parkingBoyRule = parkingBoyRule;
        }

        public bool CheckAvailableLot() => parkingLots.Any(parkingLot => parkingLot.HasAvailableSpaces);

        public ParkingLot FindOneValidParkingLot() => parkingBoyRule.FindOneValidParkingLot(parkingLots);
    }
}
