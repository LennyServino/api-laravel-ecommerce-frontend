import axios from 'axios';

export const apiEcommerce = axios.create({
  baseURL: import.meta.env.VITE_API_ECOMMERCE || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPublicProducts = async () => {
  const data = await apiEcommerce.get('/v1/products');
  return data;
};

export const signUp = async (data) => {
  const response = await apiEcommerce.post('/auth/sign_up', data);
  return response.data;
};

export const signIn = async (data) => {
  const response = await apiEcommerce.post('/auth/sign_in', data);
  return response.data;
};

export const testAdmin = async () => {
  const response = await apiEcommerce.get('/v1/admin/say_hello');
  return response.data;
};

export const getMyUser = async () => {
  if (!apiEcommerce.defaults.headers.common['Authorization']) {
    throw new Error('No se ha iniciado sesión.');
  }
  const response = await apiEcommerce.get('/auth/me');
  return response.data;
};
