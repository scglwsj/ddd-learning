using System;

namespace parking
{
    public class Ticket : ValueObject<TicketID>
    {
        public bool IsValid { get; private set; }
        public PlateNumber CarPlante { get; private set; }
        public ParkingLotID ParkingLotID { get; private set; }

        public Ticket(PlateNumber carPlante, ParkingLotID parkingLotID)
            : base(new TicketID(Guid.NewGuid().ToString()))
        {
            IsValid = true;
            CarPlante = carPlante;
            ParkingLotID = parkingLotID;
        }

        public TicketID ID => value;

        public void Invalidate()
        {
            IsValid = false;
        }
    }

    public class TicketID : ValueObject<string>
    {
        public TicketID(string ticketID) : base(ticketID) { }
    }
}
