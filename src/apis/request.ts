import axios from 'axios';

const instance = axios.create({
  timeout: 30 * 1000,
});

instance.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        ...(config.headers || {}),
      },
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
