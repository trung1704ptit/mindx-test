import axios from 'axios';

const request = axios.create();

request.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

const api = (options = {}) => {
    const config = {
        ...options,
        headers: {
            'x-rapidapi-host': 'world-population.p.rapidapi.com',
            'x-rapidapi-key': '9cf86b8ddcmshee37a1db09431cep1a74e5jsn8b4e82184dc8',
        }
    };

    return request(config);
};

export default api;