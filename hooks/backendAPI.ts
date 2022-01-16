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

export const consultarCreadores = async (obj : string) => {
    return axios.get<any>(`${apiUrl}/content-creators?search=${obj}`, {headers: {'Authorization': 'Token d21314078a1cfe75216adcb97da4a881b55d8874'}})    
} 

export const consultainformacioncreador = (obj : string) => {
    return axios.get<any>(`${apiUrl}/content-creators/${obj}`, {headers: {'Authorization': 'Token d21314078a1cfe75216adcb97da4a881b55d8874'}})    
} 
  
