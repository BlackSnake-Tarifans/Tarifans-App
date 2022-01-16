import axios from 'axios';
import { TOKEN_CHANGE } from '../redux/AuthToken';
import { useDispatch, useSelector } from 'react-redux';
  
const apiUrl="http://25ae-190-63-212-143.ngrok.io/api";
export const login = async (obj : any) => {
    return axios.post<any>(`${apiUrl}/auth/login`, obj)    
}

export const register = async (obj : any) => {
    return axios.post<any>(`${apiUrl}/auth/register`, obj)    
} 

  
