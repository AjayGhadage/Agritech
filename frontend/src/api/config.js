const API_BASE_URL = import.meta.env.VITE_API_URL || '${API_BASE_URL}';
const ML_API_URL = import.meta.env.VITE_ML_API_URL || '${ML_API_URL}';

export { API_BASE_URL, ML_API_URL };
export default API_BASE_URL;
