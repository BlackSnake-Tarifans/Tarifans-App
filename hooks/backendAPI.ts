import axios from 'axios';

//const apiUrl = 'https://3b33-190-63-214-62.ngrok.io/api';
const apiUrl = 'https://bb40-190-63-214-62.ngrok.io/api'

export const login = async (obj: any) => {
  console.log(`${apiUrl}/auth/login`);
  return axios.post<any>(`${apiUrl}/auth/login`, obj);
};

export const register = async (obj: any) => {
  return axios.post<any>(`${apiUrl}/auth/register`, obj);
};

export const consultarCreadores = async (obj: string, token: string) => {
  return axios.get<any>(`${apiUrl}/content-creators?search=${obj}`, {
    headers: {
      Authorization: `Token ${token}` /* token */,
    },
  });
};

export const consultainformacioncreador = async (
  obj: string,
  token: string,
) => {
  return await axios.get<any>(`${apiUrl}/content-creators/${obj}`, {
    headers: {
      Authorization:
      `Token ${token}` /* token */,
    },
  });
};

export const resetPassword_p1 = async (obj: any) => {
  return axios.post<any>(`${apiUrl}/auth/reset-password/`, obj);
};

export const resetPassword_p2 = async (obj: any) => {
  return axios.post<any>(`${apiUrl}/auth/reset-password/confirm/`, obj);
};

export const createSubsPlan = async (obj: any) => {
  return axios.post<any>(`${apiUrl}/subscriptions/plan/`, obj);
};

/*export const postText = async (obj: any) => {
  return axios.post<any>(`${apiUrl}/posts/`, obj);
};

export const postMedia = async (obj: any) => {
  return axios.post<any>(`${apiUrl}/posts/media`, obj);
};

export const likePost = async (obj: any) => {
  return axios.post<any>(`${apiUrl}/posts/media`, obj);
};*/


export const getFeed = async () => {
  return axios.get<any>(`${apiUrl}/posts/feed/`);
}
export default apiUrl;