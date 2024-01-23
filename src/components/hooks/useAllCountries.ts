import { httpRequest } from '@/service/coutries';
import { Country } from '@/types/data';
import { createIndexCountry } from '@/utils/indexCountry';
import { useEffect, useState } from 'react';

export const useAllCountries = (): Country => {
  const [allCountries, setAllCountries] = useState<Country>({});

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const resp = await httpRequest('allCountries');
        const countries = resp.data.data.countries;
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
