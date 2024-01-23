import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export const metadata = {
  title: 'Map V1',
  description: 'Demo using mapbox and leaflet and loading all Data at once',
};

export default function MyMap() {
  const Map = dynamic(() => import('../../../components/map/MapLazy'), {
    loading: () => <p>Loading Map</p>,
    ssr: false,
  });

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <Map />
    </div>
  );
}
