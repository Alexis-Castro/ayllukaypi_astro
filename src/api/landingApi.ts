
import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables';

const { PUBLIC_API_URL } = getEnvVariables()

export const landingApi = axios.create({
   baseURL: PUBLIC_API_URL
});

// Todo: 
