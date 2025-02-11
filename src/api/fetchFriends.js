import { api } from './configAPI.js';

export const fetchFriends = async () => {
  try {
    const { data } = await api.get('/friends');
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
