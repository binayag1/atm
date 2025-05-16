import React, { useState } from 'react';

const QuoteForm = ({ onQuoteCalculated }) => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [furnitureCount, setFurnitureCount] = useState('');
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState('');

  const handleQuote = async () => {
    // Basic validation
    if (!pickup.trim() || !dropoff.trim() || !furnitureCount || furnitureCount <= 0) {
      setError('Please fill in all fields correctly.');
      return;
    }

    setError(''); // Clear any previous error
    try {
      const res = await fetch('http://localhost:8888/backend/quote.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pickup, dropoff, furnitureCount: Number(furnitureCount) }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setQuote(data.cost);
      onQuoteCalculated(data.cost);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch quote. Please try again later.');
    }
  };

  return (
    <div className="card">
      <h2>Get an Instant Quote</h2>

      <input
        type="text"
        placeholder="Pickup Address"
        value={pickup}
        onChange={e => setPickup(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Dropoff Address"
        value={dropoff}
        onChange={e => setDropoff(e.target.value)}
        required
      />
      <input
        type="number"
        min="1"
        placeholder="Number of Furniture Items"
        value={furnitureCount}
        onChange={e => setFurnitureCount(e.target.value)}
        required
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button className="btn-primary" onClick={handleQuote}>Calculate Quote</button>

      {quote && <p>Estimated Cost: <strong>${quote}</strong></p>}
    </div>
  );
};

export default QuoteForm;
