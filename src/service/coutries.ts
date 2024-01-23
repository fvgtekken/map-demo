import axios, { AxiosResponse } from 'axios';
import { apiCountries, configQuery } from '@/data/apiData';

// Use configQuery obj to programatically build the graphQL queries as needed
export const httpRequest = async (typeQuery: string = 'allCountries', extraParam: string | undefined = undefined) => {
  try {
    const response = await axios.post(apiCountries, { ...configQuery[typeQuery as keyof typeof configQuery](extraParam) });

    return response;
  } catch (err) {
    console.log('Error to fetch countries');
    throw new Error('Error to fetch countries');
  }
};
