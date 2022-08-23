const api_key = '81e9583d002dfb3d4921cf5b833268c5';
const baseURL = 'https://api.themoviedb.org/3';
const isProduction = process.env.NODE_ENV === 'production';

export { isProduction, api_key, baseURL };
