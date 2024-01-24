import axios from 'axios';
import { useState } from 'react';
import { Country, PropsCountry } from '@/types/data';
import { httpRequest } from '@/service/coutries';

interface UseHandleMarker {
  detailCoutry: PropsCountry;
  handleMarkerClick: (countryCode: string) => void;
}

export const useHandleMarker = (): UseHandleMarker => {
  const [detailCoutry, setDetailCountry] = useState<Country>({});

  const handleMarkerClick = async (countryCode: string) => {
    try {
      const resp = await axios.post('/api/map', { typeQuery: 'codeCountry', countryCode });
      const { country } = resp.data.data.data;

      setDetailCountry((prev) => {
        return {
          ...prev,
          [countryCode]: { ...country },
        };
      });

      // console.log('detailCoutry', detailCoutry);
    } catch (err) {
      console.error('Error fetching all countries:', err);
      throw new Error('Error fetching all countries');
    }
  };

  return {
    handleMarkerClick,
    detailCoutry,
  };
};
