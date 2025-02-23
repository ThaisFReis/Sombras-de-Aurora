import axios from 'axios';

// export const api = axios.create({
//     baseURL: `${import.meta.env.VITE_PORTAL_API_URL}`,
//   });

export const api = axios.create({
    baseURL: 'http://localhost:5000'
});