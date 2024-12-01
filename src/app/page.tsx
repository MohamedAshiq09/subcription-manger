// "use client"
// import React, { useState, useEffect } from 'react';
// import WalletConnect from './components/WalletConnect';
// import SubscriptionList from './components/SubscriptionList';

// const Home: React.FC = () => {
//   const [subscriberAddress, setSubscriberAddress] = useState<string>('');
//   const [subscriptions, setSubscriptions] = useState<any[]>([]);

//   const handleWalletConnect = async (address: string) => {
//     setSubscriberAddress(address);
//     // Fetch subscriptions across chains using wallet address
//     const data = await fetchSubscriptions(address); // Implement cross-chain fetch logic
//     setSubscriptions(data);
//   };

//   return (
//     <div>
//       <h1>Subscription Manager</h1>
//       <WalletConnect onConnect={handleWalletConnect} />
//       {subscriberAddress && <SubscriptionList subscriptions={subscriptions} />}
//     </div>
//   );
// };

// export default Home;

"use client"
import React, { useState, useEffect } from 'react';
import WalletConnect from './components/WalletConnect';
import SubscriptionList from './components/SubscriptionList';
import './styles/global.css';  // Add custom styles here

const Home: React.FC = () => {
  const [subscriberAddress, setSubscriberAddress] = useState<string>('');
  const [subscriptions, setSubscriptions] = useState<any[]>([]);

  const handleWalletConnect = async (address: string) => {
    setSubscriberAddress(address);
    const data = await fetchSubscriptions(address); // Implement cross-chain fetch logic
    setSubscriptions(data);
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Subscription Manager</h1>
      </header>
      <div className="wallet-section">
        <WalletConnect onConnect={handleWalletConnect} />
      </div>
      {subscriberAddress && (
        <div className="subscriptions-section">
          <h2 className="subtitle">Your Subscriptions</h2>
          <SubscriptionList subscriptions={subscriptions} />
        </div>
      )}
    </div>
  );
};

export default Home;

