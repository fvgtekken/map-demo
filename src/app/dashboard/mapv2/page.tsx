import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Map V2',
  description: 'Demo using mapbox and leaflet and lazy laoding',
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
