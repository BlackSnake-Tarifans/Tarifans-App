import axios from 'axios';
import apiUrl from './backendAPI';

export const postText = async (obj: any) => {
return axios.post<any>(`${apiUrl}/posts/`, obj);
};

export const postMedia = async (obj: any) => {
return axios.post<any>(`${apiUrl}/posts/media`, obj);
};

export const likePost = async (id: any) => {
return axios.post<any>(`${apiUrl}/api/v1/posts/${id}/likes/`, {});
};

export const loadComments = async (id: any) => {
return axios.post<any>(`${apiUrl}/api/v1/posts/${id}/likes/`, {});
};

