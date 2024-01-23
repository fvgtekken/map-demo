import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Map Your Location',
  description: 'Where are you?',
};

export default function MyMap() {
  const Map = dynamic(() => import('../../../components/map/MapLocation'), {
    loading: () => <p>Loading Map Location</p>,
    ssr: false,
  });

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <Map />
    </div>
  );
}
