using System;
using System.Collections.Generic;
using System.Linq;

namespace Parking
{
    class RandomParkingManagerService : IParkingManagerService
    {
        public BaseParkingBoy FindOneValidParkingBoy(IReadOnlyList<BaseParkingBoy> parkingBoys) =>
            parkingBoys
            .OrderBy(_ => new Random().Next(0, parkingBoys.Count))
            .FirstOrDefault(parkingBoy => parkingBoy.HasAvailableSpaces);
    }
}
