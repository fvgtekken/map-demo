import { httpRequest } from '@/service/coutries';
import { Country } from '@/types/data';
import { createIndexCountry } from '@/utils/indexCountry';
import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Map V3',
  description: 'Demo using mapbox and leaflet and loading all Data at once',
};

// In this version the data is passed to the front end component
const MyMap = async () => {
  // console.log('call for server', resData);

  const resp = await httpRequest('allCountries');
  const countries = resp.data.data.countries;
  const countriesIndexed: Country = createIndexCountry(countries);

  const Map = dynamic(() => import('../../../components/map/MapServer'), {
    loading: () => <p>Loading Map</p>,
    ssr: false,
  });

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <Map countries={countriesIndexed} />
    </div>
  );
};
export default MyMap;
