const getBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  if (window.location.hostname.includes('vercel.app')) {
     return `https://agritech-node-backend.onrender.com`; 
  }
  return 'http://localhost:5001';
};

const getMlUrl = () => {
  if (import.meta.env.VITE_ML_API_URL) return import.meta.env.VITE_ML_API_URL;
  return 'https://agritech-5.onrender.com'; // Known live ML URL from .env
};

const API_BASE_URL = getBaseUrl();
const ML_API_URL = getMlUrl();

export { API_BASE_URL, ML_API_URL };
export default API_BASE_URL;
