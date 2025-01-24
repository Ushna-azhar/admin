// /pages/index.tsx
import React from 'react';
import { formatCurrency, generateRandomId, capitalizeFirstLetter } from '../app/shared/lib/utils'; // Correct import

const HomePage = () => {
  const amount = 1200.5;
  const randomId = generateRandomId();
  const text = 'hello world';

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>Formatted amount: {formatCurrency(amount)}</p>
      <p>Generated random ID: {randomId}</p>
      <p>Capitalized text: {capitalizeFirstLetter(text)}</p>
    </div>
  );
};

export default HomePage;
