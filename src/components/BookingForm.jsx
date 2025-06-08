import React, { useState } from 'react';
import PrivacyContent from './PrivacyContent';

const BookingForm = ({ quote }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    dropoff: '',
    furniture_count: '',
  });

  const [agreed, setAgreed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = email => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = phone => /^[0-9\s+()-]*$/.test(phone);

  const handleBooking = async () => {
    const { name, email, phone, pickup, dropoff, furniture_count } = form;

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

    if (!agreed) {
      setError('You must agree to the Privacy Policy.');
      return;
    }

    setError('');
    setSuccess('');
    setLoading(true);

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
        setAgreed(false);
      } else {
        setError('Booking failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Booking failed. Please check your network or try later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Book Your Move</h2>

      <div className="form-group">
        <label>Name <span style={{ color: 'red' }}>*</span></label>
        <input name="name" type="text" value={form.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Email <span style={{ color: 'red' }}>*</span></label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Phone (optional)</label>
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Pickup Address <span style={{ color: 'red' }}>*</span></label>
        <input name="pickup" type="text" value={form.pickup} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Dropoff Address <span style={{ color: 'red' }}>*</span></label>
        <input name="dropoff" type="text" value={form.dropoff} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Furniture Count (optional)</label>
        <input name="furniture_count" type="number" min="0" value={form.furniture_count} onChange={handleChange} />
      </div>

     <div
        className="form-group"
        style={{
          display: '-webkit-inline-box',
          gap: '8px',
          fontSize: '14px',
          textAlign: 'center',
          flexWrap: 'wrap', // wraps nicely on small screens
        }}
      >
        <div>
          <input
            type="checkbox"
            id="privacyAgreement"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ margin: 0 }}
          />
        </div>

        <div>
          <label htmlFor="privacyAgreement" style={{ margin: 0 }}>
            I have read and agree to the{' '}
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              style={{
                fontSize: '14px',
                color: '#f26c50',
                background: 'none',
                border: 'none',
                padding: 0,
                margin: 0,
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Privacy Policy
            </button>.
          </label>
        </div>
      </div>

      {error && <p style={{ color: 'red', fontSize: '16px' }}>{error}</p>}
      {success && <p style={{ color: 'green', fontSize: '16px' }}>{success}</p>}

      <button style={{ display: 'block' }} className="btn-primary" onClick={handleBooking} disabled={loading}>
        {loading ? 'Sending...' : 'Get Quote'}
      </button>

      {showPrivacy && (
  <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#fff', maxWidth: '90vw', width: '800px', height: '80vh',
        borderRadius: '10px', overflowY: 'auto', position: 'relative'
      }}>
        <button onClick={() => setShowPrivacy(false)} style={{
          position: 'absolute', top: '10px', right: '10px', background: '#f26c50',
          color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', zIndex: 1
        }}>Close</button>

      <PrivacyContent />
        <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>
          <button onClick={() => setShowPrivacy(false)}
            style={{
              backgroundColor: '#103c59',
              color: '#fff',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}>Close</button>
        </div>
      </div>
  </div>
)}

    </div>
  );
};

export default BookingForm;
