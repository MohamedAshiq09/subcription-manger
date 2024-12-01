import { E } from '@agoric/eventual-send';
import { createSubscriptionContract } from '../contracts/subscription';

const deploy = async () => {
  const contractInstance = createSubscriptionContract({});
  console.log('Subscription contract deployed:', contractInstance);
};

deploy().catch((err) => console.error('Deployment failed:', err));
