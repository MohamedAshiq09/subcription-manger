"use client"
import React, { useState } from 'react';

const WalletConnect: React.FC<{ onConnect: (address: string) => void }> = ({ onConnect }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnect = () => {
    // Simulate wallet connection (use real wallet API here)
    const address = '0x1234567890abcdef'; // Replace with actual wallet address from wallet connection
    setWalletAddress(address);
    onConnect(address); // Pass address to parent component
  };

  return (
    <div>
      <button onClick={handleConnect}>
        {walletAddress ? `Connected: ${walletAddress}` : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default WalletConnect;
