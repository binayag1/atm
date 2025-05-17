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
  const [loading, setLoading] = useState(false); // 🔄 Spinner loading state

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = email => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = phone => /^[0-9\s+()-]*$/.test(phone); // Allow empty string

  const handleBooking = async () => {
    const { name, email, phone, pickup, dropoff, furniture_count } = form;

    // Validation
    if (!name || !email || !pickup || !dropoff) {
      setError('Please fill in all required fields correctly.');
      setSuccess('');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (phone && !isValidPhone(phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setError('');
    setSuccess('');
    setLoading(true); // 🔄 Start spinner

    try {
      const res = await fetch('https://anytimemovers.com.au/backend/booking.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          furniture_count: furniture_count ? Number(furniture_count) : 0,
          cost: quote,
        }),
      });

      if (!res.ok) throw new Error('Server error');

      const data = await res.json();

      if (data.success) {
        setSuccess('Email Sent Successfully, We will get in touch shortly!');
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
    } finally {
      setLoading(false); // 🔄 Stop spinner
    }
  };

  return (
    <div className="card">
      <h2>Book Your Move</h2>

      <div className="form-group">
        <label htmlFor="name">Name <span style={{ color: 'red' }}>*</span></label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="pickup">Pickup Address <span style={{ color: 'red' }}>*</span></label>
        <input id="pickup" name="pickup" type="text" value={form.pickup} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="dropoff">Dropoff Address <span style={{ color: 'red' }}>*</span></label>
        <input id="dropoff" name="dropoff" type="text" value={form.dropoff} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="furniture_count">Furniture Count (optional)</label>
        <input id="furniture_count" name="furniture_count" type="number" min="0" value={form.furniture_count} onChange={handleChange} />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <button className="btn-primary" onClick={handleBooking} disabled={loading}>
        {loading ? <span className="spinner">Sending....</span> : 'Get Quote'}
      </button>
    </div>
  );
};

export default BookingForm;
