import axios from 'axios';

const authAxios = axios.create();
authAxios.interceptors.request.use((config : any) => {
  const token = localStorage.getItem('token');
  // @ts-ignore
  // eslint-disable-next-line no-param-reassign
  if(token){
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
});

authAxios.interceptors.response.use(
  (res : any) => res,
  (err : any) => {
    if (err.response.status === 401) {
      // place your reentry code
      localStorage.removeItem('token');
      if (typeof window) {
        window.location.reload();
      }
    } else {
      throw new Error(err.response.data.message);
    }
  },
);

export default authAxios;
