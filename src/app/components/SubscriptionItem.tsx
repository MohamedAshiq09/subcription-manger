import React from 'react';

type Props = {
  id: string;
  subscriber: string;
  amount: number;
  interval: number;
};

const SubscriptionItem: React.FC<Props> = ({ id, subscriber, amount, interval }) => (
  <div>
    <h3>Subscription {id}</h3>
    <p>
      {subscriber} pays {amount} tokens every {interval} seconds.
    </p>
  </div>
);

export default SubscriptionItem;
