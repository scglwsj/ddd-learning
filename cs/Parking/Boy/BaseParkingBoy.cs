using System.Collections.Generic;
using System.Linq;

namespace Parking
{
    public abstract class BaseParkingBoy
    {
        private readonly IParkingBoyService parkingBoyService;
        private readonly IReadOnlyList<ParkingLot> parkingLots;

        protected BaseParkingBoy(IReadOnlyList<ParkingLot> parkingLots, IParkingBoyService parkingBoyService)
        {
            this.parkingLots = parkingLots;
            this.parkingBoyService = parkingBoyService;
        }

        public int AvailableSpaces => parkingLots.Sum(parkingLot => parkingLot.AvailableSpaces);
        public bool HasAvailableSpaces => parkingLots.Any(parkingLot => parkingLot.HasAvailableSpaces);

        public ParkingLot FindOneValidParkingLot() => parkingBoyService.FindOneValidParkingLot(parkingLots);
    }
}
