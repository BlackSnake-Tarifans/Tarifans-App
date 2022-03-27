import axios from 'axios';
  
const apiUrl="https://c5fe-191-99-93-242.ngrok.io/api";
export const login = async (obj : any) => {
    console.log(`${apiUrl}/auth/login`)
    return axios.post<any>(`${apiUrl}/auth/login`, obj)    
}

export const register = async (obj : any) => {
    return axios.post<any>(`${apiUrl}/auth/register`, obj)    
} 

export const consultarCreadores = async (obj : string, token: string) => {
    return axios.get<any>(`${apiUrl}/content-creators?search=${obj}`, {headers: {'Authorization': 'Token '+"17a50a10d95c46779787a69be19c51c0f20579c3"/*token*/}})    
} 

export const consultainformacioncreador = async (obj : string, token: string) => {
    return await axios.get<any>(`${apiUrl}/content-creators/${obj}`, {headers: {'Authorization': 'Token '+"17a50a10d95c46779787a69be19c51c0f20579c3"/*token*/}})    
} 
  
