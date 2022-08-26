import { useState, createContext, useEffect } from 'react';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Create a context
const AuthContext = createContext({});

const configureAxiosHeaders = (token: any) => {
  axios.defaults.headers.common.Authorization = `Token ${token}`;
};

const removeHeaders = () => {
  delete axios.defaults.headers.common["Authorization"];
}


function AuthProvider({ children }: any) {
  const [auth, setAuthState] = useState({});

  // Get current auth state from AsyncStorage
  const getAuthState = async () => {
    try {
      console.log('Getting auth state');
      const authDataString =
        (await AsyncStorage.getItem('auth')) || localStorage.getItem('auth');
      const authData = JSON.parse(authDataString as string) || {};
      // Configure axios headers
      if (Object.keys(authData).length > 0) {
        console.log('inside if');
        console.log(authData);
        configureAxiosHeaders(authData.token);
      }

      setAuthState(authData);
      console.log(`auth: ${auth}`);
    } catch (err) {
      setAuthState({});
    }
  };

  // Update AsyncStorage & context state
  const setAuth = async (auth_data: any) => {
    try {
      console.log('dentro de setAuth');
      console.log(auth_data);
      await AsyncStorage.setItem('auth', JSON.stringify(auth_data));
      localStorage && localStorage.setItem('auth', JSON.stringify(auth_data));
      // Configure axios headers
      configureAxiosHeaders(auth_data.token);
      setAuthState(auth_data);
      console.log(auth);
    } catch (error) {
      Promise.reject(error);
    }
  };

  // on Log Out
  const clearAuth = async () => {
    try {
      await AsyncStorage.clear();
      localStorage && localStorage.removeItem('auth')
      removeHeaders();
    } catch (e) {
      alert('Failed to clear the async storage.');
    } finally {
      alert('Storage successfully cleared!');
      console.log(auth);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
