import axios from "axios";
export const BaseURL = 'http://localhost:4000'
export const playerURL = '/player';
export const gamemasterURL = '/gamemaster';
export const tournamentURL = '/tournament';
export const adminURL = '/admin';

const ApiCall = axios.create({
    baseURL: BaseURL + "/api"
});

ApiCall.interceptors.request.use(config => {
    let token =''
    if (config.url.startsWith('/admin')) {
        token = localStorage.getItem('admintoken');
    } else if (config.url.startsWith('/player')) {
        token = localStorage.getItem('playerToken');
    }else if (config.url.startsWith('/gamemaster')) {
        token = localStorage.getItem('gamemasterToken');
    }
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const cancelTokenSource = axios.CancelToken.source();

ApiCall.interceptors.request.use(config => {
    config.cancelToken = cancelTokenSource.token;
    return config;
});

export { ApiCall, }; // cancelTokenSource