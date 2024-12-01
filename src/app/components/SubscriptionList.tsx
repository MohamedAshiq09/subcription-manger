import React from 'react';

const SubscriptionList: React.FC<{ subscriptions: any[] }> = ({ subscriptions }) => {
  return (
    <div>
      <h2>Your Subscriptions</h2>
      {subscriptions.length === 0 ? (
        <p>No subscriptions found.</p>
      ) : (
        <ul>
          {subscriptions.map((sub, index) => (
            <li key={index}>{`Subscription: ${sub.name} | Amount: ${sub.amount} | Chain: ${sub.chain}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubscriptionList;
