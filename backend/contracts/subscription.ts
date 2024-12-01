import { E } from '@agoric/eventual-send';

const subscribers = new Map<string, NodeJS.Timer>();

export const addSubscriber = async (subscriber: string, amount: number, interval: string) => {
  if (subscribers.has(subscriber)) {
    throw new Error('Subscriber already exists');
  }

  const parsedInterval = parseInt(interval);
  if (isNaN(parsedInterval)) {
    throw new Error('Invalid interval');
  }

  const timer = setInterval(() => {
    console.log(`Deducting ${amount} tokens from ${subscriber}`);
    // Add Agoric logic to deduct tokens here
  }, parsedInterval * 1000);

  subscribers.set(subscriber, timer);
  return { subscriber, amount, interval };
};

export const removeSubscriber = async (subscriber: string) => {
  if (!subscribers.has(subscriber)) {
    throw new Error('Subscriber does not exist');
  }

  const timer = subscribers.get(subscriber);
  if (timer) {
    clearInterval(timer as unknown as number); // Casting to number to fix the type error
    subscribers.delete(subscriber);
  }
};
