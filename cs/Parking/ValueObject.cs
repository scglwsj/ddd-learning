using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

namespace parking
{
    public abstract class ValueObject<T> : IEquatable<ValueObject<T>>
    {
        protected readonly T value;

        protected ValueObject(T value)
        {
            this.value = value;
        }

        public override bool Equals(object obj) => Equals(obj as ValueObject<T>);

        public bool Equals([AllowNull] ValueObject<T> other) => other != null &&
                   EqualityComparer<T>.Default.Equals(value, other.value);

        public override int GetHashCode() => HashCode.Combine(value);

        public override string ToString() => value.ToString();

        public static bool operator ==(ValueObject<T> left, ValueObject<T> right) => EqualityComparer<ValueObject<T>>.Default.Equals(left, right);

        public static bool operator !=(ValueObject<T> left, ValueObject<T> right) => !(left == right);
    }
}
