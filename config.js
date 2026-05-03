// Configuration for API endpoints
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001' 
    : window.location.hostname.includes('github.io')
    ? 'https://dolph-search-ai.onrender.com'
    : window.location.hostname.includes('vercel.app')
    ? 'https://dolph-search-ai.onrender.com'
    : 'https://dolph-search-ai.onrender.com';

// Export for use in other files
window.API_URL = API_URL;
