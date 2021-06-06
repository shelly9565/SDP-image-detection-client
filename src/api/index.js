import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error('An unexpected error occurred.');
  }

  return Promise.reject(error);
});

const url =
  'https://sdpdetectionblobstorage.blob.core.windows.net/images?restype=container&comp=list';

export const fetchPosts = () => axios.get(url);
