/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';
import { apiEcommerce, signIn } from '../lib/apiEcommerce';
import { getMyUser } from '../lib/apiEcommerce';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // No se carga desde localStorage de inmediato
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Nuevo estado para el loader

  // Función para iniciar sesión
  const login = async (email, password) => {
    try {
      const response = await signIn({ email, password });

      console.log({ response });
      if (!response?.token) {
        throw new Error('No se recibió un token.');
      }

      const token = response.token;
      setToken(token);
      localStorage.setItem('token', token);
      apiEcommerce.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Obtener datos del usuario autenticado
      const userResponse = await getMyUser();
      setUser(userResponse.user);
      localStorage.setItem('user', JSON.stringify(userResponse.user));

      return { success: true, message: response.message };
    } catch (error) {
      const message =
        error.response?.message || 'There was an unexpected error.';
      const errorMessages = error.response?.error;

      console.log({ errorMessages, error });

      if (errorMessages) {
        return {
          success: false,
          message: Object.values(errorMessages).flat().join(', '),
        };
      }

      return { success: false, message };
    }
  };

  // Cargar el usuario desde `localStorage` al inicio
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      apiEcommerce.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${storedToken}`;
      getMyUser()
        .then((response) => {
          setUser(response.user);
          setToken(storedToken);
          localStorage.setItem('user', JSON.stringify(response.user));
        })
        .catch(() => logout())
        .finally(() => setLoading(false)); // Finaliza el loader después de la validación
    } else {
      setLoading(false);
    }
  }, []);

  // Función para cerrar sesión
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete apiEcommerce.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
