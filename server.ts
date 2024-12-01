import express from 'express';
import { addSubscriber, removeSubscriber } from './contracts/subscription';
import { Web3Provider } from 'ethers'; // For Ethereum
import { CosmosClient } from '@cosmos-client/core'; // For Cosmos-based chains

const app = express();
const port = 5000;

app.use(express.json());

const web3 = new Web3Provider('<ETHEREUM_RPC_URL>');

const cosmosClient = new CosmosClient('<COSMOS_RPC_URL>');

app.post('/api/subscriptions', async (req, res) => {
  const { subscriber, amount, interval, chainId } = req.body;
  
  try {
    if (chainId === 'agoric') {
      const result = await addSubscriber(subscriber, amount, interval);
      res.status(201).json({ message: 'Subscription created on Agoric', result });
    } else if (chainId === 'ethereum') {
      
      const result = await createEthereumSubscription(subscriber, amount, interval);
      res.status(201).json({ message: 'Subscription created on Ethereum', result });
    } else if (chainId === 'cosmos') {
      /
      const result = await createCosmosSubscription(subscriber, amount, interval);
      res.status(201).json({ message: 'Subscription created on Cosmos', result });
    } else {
      throw new Error('Unsupported chain');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API to delete a subscription
app.delete('/api/subscriptions/:subscriber', async (req, res) => {
  const { subscriber, chainId } = req.params;

  try {
    if (chainId === 'agoric') {
      await removeSubscriber(subscriber);
      res.json({ message: 'Subscription deleted on Agoric' });
    } else if (chainId === 'ethereum') {
      await removeEthereumSubscription(subscriber);
      res.json({ message: 'Subscription deleted on Ethereum' });
    } else if (chainId === 'cosmos') {
      await removeCosmosSubscription(subscriber);
      res.json({ message: 'Subscription deleted on Cosmos' });
    } else {
      throw new Error('Unsupported chain');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const createEthereumSubscription = async (subscriber: string, amount: number, interval: string) => {
 
};


const createCosmosSubscription = async (subscriber: string, amount: number, interval: string) => {
  
};


const removeEthereumSubscription = async (subscriber: string) => {
  
};


const removeCosmosSubscription = async (subscriber: string) => {
 
};

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
