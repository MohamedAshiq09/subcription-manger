"use client"
import React, { useState } from 'react';
import axios from 'axios';

const CreateSubscription: React.FC<{ subscriber: string }> = ({ subscriber }) => {
  const [amount, setAmount] = useState('');
  const [interval, setInterval] = useState('');
  const [chain, setChain] = useState('agoric');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/subscriptions', {
        subscriber,
        amount,
        interval,
        chain,
      });

      console.log(response.data.message);
    } catch (error) {
      console.error('Error creating subscription:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Subscriber Address: {subscriber || 'Not connected'}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={interval}
        onChange={(e) => setInterval(e.target.value)}
        placeholder="Interval (in seconds)"
      />
      <select value={chain} onChange={(e) => setChain(e.target.value)}>
        <option value="agoric">Agoric</option>
        <option value="ethereum">Ethereum</option>
        <option value="cosmos">Cosmos</option>
      </select>
      <button type="submit">Create Subscription</button>
    </form>
  );
};

export default CreateSubscription;
