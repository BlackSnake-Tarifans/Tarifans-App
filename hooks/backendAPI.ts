import axios from 'axios';
  
const apiUrl="http://1c0a-190-63-213-187.ngrok.io/api";
export const login = async (obj : any) => {
    return axios.post<any>(`${apiUrl}/auth/login`, obj)    
}

export const register = async (obj : any) => {
    return axios.post<any>(`${apiUrl}/auth/register`, obj)    
} 

export const consultarCreadores = async (obj : string, token: string) => {
    return axios.get<any>(`${apiUrl}/content-creators?search=${obj}`, {headers: {'Authorization': 'Token '+token}})    
} 

export const consultainformacioncreador = async (obj : string, token: string) => {
    return await axios.get<any>(`${apiUrl}/content-creators/${obj}`, {headers: {'Authorization': 'Token '+token}})    
} 
  
