import axios from 'axios';
import { httpRequest } from '@/service/coutries';
import { Country } from '@/types/data';
import { createIndexCountry } from '@/utils/indexCountry';
import { useEffect, useState } from 'react';

export const useAllCountries = (): Country => {
  const [allCountries, setAllCountries] = useState<Country>({});

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const resp = await axios.post('/api/map', { typeQuery: 'allCountries' });
        const { countries } = resp.data.data.data;
        const countriesIndexed: Country = createIndexCountry(countries);
        //console.log('aqui estan', countriesIndexed);
        setAllCountries(countriesIndexed);
      } catch (err) {
        console.error('Error fetching country details:', err);
        throw new Error('Error to fetch countries');
      }
    };
    getAllCountries();
  }, []);

  return {
    allCountries,
  };
};
