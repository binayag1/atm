import React, { useState } from 'react';
import QuoteForm from '../components/QuoteForm';
import BookingForm from '../components/BookingForm';

const Quote = () => {
  const [quote, setQuote] = useState(0);

  return (
    <div>
      <h2>Get a Quote</h2>
      <QuoteForm onQuoteCalculated={setQuote} />
      <BookingForm quote={quote} />
    </div>
  );
};

export default Quote;
