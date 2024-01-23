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
      const res = await httpRequest('codeCountry', countryCode);
      // response.data.data.country;
      // console.log('resp countries', res);
      const countryDetails = res.data.data.country;

      setDetailCountry((prev) => {
        return {
          ...prev,
          [countryCode]: { ...countryDetails },
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
