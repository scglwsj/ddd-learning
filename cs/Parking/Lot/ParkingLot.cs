using System;
using System.Collections.Generic;

namespace Parking
{
    public class ParkingLot
    {
        public ParkingLotID ID { get; private set; }
        public int AvailableSpaces { get; private set; }
        public bool HasAvailableSpaces => AvailableSpaces > 0;

        private readonly IDictionary<Ticket, Car> parkedCars;

        public ParkingLot(int totalPosition)
        {
            ID = new ParkingLotID(Guid.NewGuid().ToString());
            AvailableSpaces = totalPosition;
            parkedCars = new Dictionary<Ticket, Car>();
        }

        public Ticket Park(Car car)
        {
            if (AvailableSpaces <= 0)
            {
                throw new Exception("capacity is not enough.");
            }

            var ticket = new Ticket(car.PlateNumber, ID);
            parkedCars.Add(ticket, car);
            AvailableSpaces--;
            return ticket;
        }

        public Car Take(Ticket ticket)
        {
            if (!ticket.IsValid || !parkedCars.ContainsKey(ticket))
            {
                throw new Exception("Ticket is invalided.");
            }

            var car = parkedCars[ticket];
            ticket.Invalidate();
            parkedCars.Remove(ticket);
            AvailableSpaces++;
            return car;
        }

    }

    public class ParkingLotID : ValueObject<string>
    {
        public ParkingLotID(string parkingLotID) : base(parkingLotID) { }
    }
}
