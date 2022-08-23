import axios from 'axios';
import apiUrl from './backendAPI';

export const postText = async (obj: any) => {
return axios.post<any>(`${apiUrl}/posts/`, obj);
};

export const postMedia = async (obj: any) => {
return axios.post<any>(`${apiUrl}/posts/media`, obj);
};

export const likePost = async (id: any) => {
return axios.post<any>(`${apiUrl}/posts/${id}/likes/`, {});
};

export const dislikePost = async (id: any) => {
    return axios.delete<any>(`${apiUrl}/posts/${id}/likes/`, {});
    };

export const loadComments = async (id: any) => {
return axios.get<any>(`${apiUrl}/posts/${id}/comments/`, {});
};

export const Comments = async (id:any, obj: any) => {
return axios.post<any>(`${apiUrl}/posts/${id}/comments/`, obj);
};

