using System.Collections.Generic;

namespace Parking
{
    interface IParkingManagerService
    {
        BaseParkingBoy FindOneValidParkingBoy(IReadOnlyList<BaseParkingBoy> parkingBoys);
    }
}
