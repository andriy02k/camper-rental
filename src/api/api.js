import axios from 'axios';

const api = axios.create({
  baseURL: 'https://662125ff3bf790e070b20112.mockapi.io/api/adverts/',
});

export const getAllCampers = async () => {
  const { data } = await api.get('campers');
  return data;
};
