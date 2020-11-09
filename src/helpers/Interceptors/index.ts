import api from '@app/services/Api';

api.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      console.log('Ok');
    }
    if (response.status === 201) {
      console.log('Created');
    }
    console.log(response);
    return response;
  },
  (error) => {
    console.warn('Error status', error.response.status);
  },
);
