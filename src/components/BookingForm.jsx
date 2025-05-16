import React, { useState } from 'react';

const BookingForm = ({ quote }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    dropoff: '',
    furniture_count: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = email => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = phone => /^[0-9\s+()-]+$/.test(phone);

  const handleBooking = async () => {
    const { name, email, phone, pickup, dropoff, furniture_count } = form;

    // Validation
    if (!name || !email || !phone || !pickup || !dropoff || furniture_count <= 0) {
      setError('Please fill in all fields correctly.');
      setSuccess('');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!isValidPhone(phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setError('');
    setSuccess('');

    try {
      const res = await fetch('https://yourdomain.com/backend/booking.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, furniture_count: Number(furniture_count), cost: quote }),
      });

      if (!res.ok) throw new Error('Server error');

      const data = await res.json();

      if (data.success) {
        setSuccess('Booking Successful!');
        setForm({
          name: '',
          email: '',
          phone: '',
          pickup: '',
          dropoff: '',
          furniture_count: '',
        });
      } else {
        setError('Booking failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Booking failed. Please check your network or try later.');
    }
  };

  return (
    <div className="card">
      <h2>Book Your Move</h2>

     <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="pickup">Pickup Address</label>
      <input
        id="pickup"
        name="pickup"
        type="text"
        value={form.pickup}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="dropoff">Dropoff Address</label>
      <input
        id="dropoff"
        name="dropoff"
        type="text"
        value={form.dropoff}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="furniture_count">Furniture Count</label>
      <input
        id="furniture_count"
        name="furniture_count"
        type="number"
        min="1"
        value={form.furniture_count}
        onChange={handleChange}
        required
      />
    </div>



      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <button className="btn-primary" onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingForm;
