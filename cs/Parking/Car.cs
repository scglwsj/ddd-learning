namespace parking
{
    public class Car : ValueObject<PlateNumber>
    {
        public Car(string plateNumber) : base(new PlateNumber(plateNumber)) { }

        public PlateNumber PlateNumber => value;
    }

    public class PlateNumber : ValueObject<string>
    {
        public PlateNumber(string plateNumber) : base(plateNumber) { }
    }
}
