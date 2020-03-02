using System;
using System.Collections.Generic;

namespace Parking
{
    public class ParkingLot
    {
        public ParkingLotID ID { get; private set; }
        private int capacity;
        private readonly IDictionary<Ticket, Car> parkedCars;

        public ParkingLot(int totalPosition)
        {
            ID = new ParkingLotID(Guid.NewGuid().ToString());
            capacity = totalPosition;
            parkedCars = new Dictionary<Ticket, Car>();
        }

        public Ticket Park(Car car)
        {
            if (capacity <= 0)
            {
                throw new Exception("capacity is not enough.");
            }

            var ticket = new Ticket(car.PlateNumber, ID);
            parkedCars.Add(ticket, car);
            capacity--;
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
            capacity++;
            return car;
        }
    }

    public class ParkingLotID : ValueObject<string>
    {
        public ParkingLotID(string parkingLotID) : base(parkingLotID) { }
    }
}
