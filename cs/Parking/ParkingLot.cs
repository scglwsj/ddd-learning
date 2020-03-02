using System;
using System.Collections.Generic;

namespace parking
{
    public class ParkingLot
    {
        public ParkingLotID ID { get; private set; }
        private int _capacity;
        private readonly IDictionary<Ticket, Car> _parkedCars;

        public ParkingLot(int totalPosition)
        {
            ID = new ParkingLotID(Guid.NewGuid().ToString());
            _capacity = totalPosition;
            _parkedCars = new Dictionary<Ticket, Car>();
        }

        public Ticket Park(Car car)
        {
            if (_capacity <= 0)
            {
                throw new Exception("capacity is not enough.");
            }

            var ticket = new Ticket(car.PlateNumber, ID);
            _parkedCars.Add(ticket, car);
            _capacity--;
            return ticket;
        }

        public Car Take(Ticket ticket)
        {
            if (!ticket.IsValid || !_parkedCars.ContainsKey(ticket))
            {
                throw new Exception("Ticket is invalided.");
            }

            var car = _parkedCars[ticket];
            ticket.Invalidate();
            _parkedCars.Remove(ticket);
            _capacity++;
            return car;
        }
    }

    public class ParkingLotID : ValueObject<string>
    {
        public ParkingLotID(string parkingLotID) : base(parkingLotID) { }
    }
}
