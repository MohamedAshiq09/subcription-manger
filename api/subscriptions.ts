import { E } from '@agoric/eventual-send';
import { harden } from '@agoric/swing-store';

const subscribers = new Map<string, any>();

export const addSubscriber = async (subscriber: string, amount: number, interval: string) => {
  if (subscribers.has(subscriber)) {
    throw new Error('Subscriber already exists');
  }

  const timer = setInterval(() => {
    console.log(`Deducting ${amount} tokens from ${subscriber}`);
    // Add Agoric logic to deduct tokens
  }, parseInt(interval) * 1000);

  subscribers.set(subscriber, timer);
  return { subscriber, amount, interval };
};

export const removeSubscriber = async (subscriber: string) => {
  if (!subscribers.has(subscriber)) {
    throw new Error('Subscriber does not exist');
  }

  clearInterval(subscribers.get(subscriber));
  subscribers.delete(subscriber);
};
