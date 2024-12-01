import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

export const fetchSubscriptions = async () => {
  const response = await axios.get(`${API_BASE_URL}/subscriptions`);
  return response.data;
};

export const createSubscription = async (subscription: any) => {
  const response = await axios.post(`${API_BASE_URL}/subscriptions`, subscription);
  return response.data;
};
