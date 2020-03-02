using System;
using System.Collections.Generic;

namespace Parking
{
    public class ParkingBoy
    {
        public IReadOnlyList<ParkingLot> ParkingLots;

        public ParkingBoy(IReadOnlyList<ParkingLot> parkingLots)
        {
            ParkingLots = parkingLots;
        }

        public Ticket Park(Car car)
        {
            foreach (var parkingLot in ParkingLots)
            {
                try
                {
                    return parkingLot.Park(car);
                }
                catch { }
            }
            throw new Exception("capacity is not enough.");
        }
    }
}
