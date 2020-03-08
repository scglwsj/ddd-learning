using System.Collections.Generic;

namespace Parking
{
    public class ParkingManager
    {
        private readonly IParkingManagerService parkingManagerService;
        private readonly IReadOnlyList<BaseParkingBoy> parkingBoys;

        public ParkingManager(IReadOnlyList<BaseParkingBoy> parkingBoys)
        {
            this.parkingBoys = parkingBoys;
            parkingManagerService = new RandomParkingManagerService();
        }

        public BaseParkingBoy FindOneValidParkingBoy() =>
            parkingManagerService.FindOneValidParkingBoy(parkingBoys);
    }
}
