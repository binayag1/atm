import React, { useState } from 'react';
import './ContactUs.css';
import PrivacyContent from '../components/PrivacyContent';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [agreed, setAgreed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      setStatus({ loading: false, success: '', error: 'Please fill in all required fields.' });
      return;
    }

    if (!agreed) {
      setStatus({ loading: false, success: '', error: 'You must agree to the Privacy Policy.' });
      return;
    }

    setStatus({ loading: true, success: '', error: '' });

    try {
      const res = await fetch('https://anytimemovers.com.au/backend/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ loading: false, success: 'Email sent successfully!', error: '' });
        setForm({ name: '', email: '', phone: '', message: '' });
        setAgreed(false);
      } else {
        throw new Error(data.message || 'Email failed to send.');
      }
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message });
    }
  };

  return (
    <div className="contact-us-page">
      <section className="contact-hero">
        <h1>Contact Any Time Movers AU</h1>
        <p>We’re here to help you move anywhere across South Australia – reach out today!</p>
      </section>

      <section className="contact-details">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Phone:</strong> <a href="tel:0469303269">0469 303 269</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@anytimemovers.com.au">info@anytimemovers.com.au</a></p>
          <p><strong>Address:</strong> Munno Para, South Australia</p>
          <p><strong>Hours:</strong> 7 Days a Week · 7:00 AM – 8:00 PM</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name <span className="required">*</span></label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email <span className="required">*</span></label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Your Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Privacy Agreement Checkbox */}
            <div
              className="form-group"
              style={{
                display: '-webkit-inline-box',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
              }}
            >
              <input
                style={{ width: '5%' }}
                type="checkbox"
                id="privacyAgreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="privacyAgreement" style={{ cursor: 'pointer', display: 'block', marginTop: '5px' }}>
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
                </button>
                .
              </label>
            </div>

            {status.error && <p className="error-message" style={{fontSize: '16px' }}>{status.error}</p>}
            {status.success && <p className="success-message" style={{ fontSize: '16px' }}>{status.success}</p>}

            <button type="submit" className="btn-primary" disabled={status.loading}>
              {status.loading ? <span className="spinner" /> : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Where We Are</h2>
        <iframe
          title="Our Location - Salisbury, South Australia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13674.994038579035!2d138.62111565!3d-34.76202425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cfe0e264f3d3%3A0x5033654628ed030!2sSalisbury%20SA%205108!5e0!3m2!1sen!2sau!4v1715917200000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: '#fff',
              maxWidth: '90vw',
              width: '800px',
              height: '80vh',
              borderRadius: '10px',
              overflowY: 'auto',
              position: 'relative',
              padding: '20px',
            }}
          >
            <button
              onClick={() => setShowPrivacy(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#f26c50',
                color: '#fff',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                zIndex: 1,
              }}
            >
              Close
            </button>

            <PrivacyContent />

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <button
                onClick={() => setShowPrivacy(false)}
                style={{
                  backgroundColor: '#103c59',
                  color: '#fff',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
