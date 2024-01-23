import { IoBrowsersOutline, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visualización',
  },

  {
    path: '/dashboard/mapv1',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Map V1',
    subTitle: 'All Data',
  },

  {
    path: '/dashboard/mapv2',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Map V2',
    subTitle: 'Lazy Loading Data',
  },
  {
    path: '/dashboard/mapv3',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Map V3',
    subTitle: 'Data From Server',
  },
  {
    path: '/dashboard/maplocation',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Map Location',
    subTitle: 'Where are you?',
  },
];

export const Sidebar = () => {
  return (
    <div id='menu' style={{ width: '400px' }} className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll'>
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center  text-lg md:text-2xl font-bold text-white'>
          <IoLogoReact className='mr-2' />
          <span> Tots Demo</span>
          <span className='text-blue-500'></span>.
        </h1>
        <p className='text-slate-500 text-sm'>Map Box and Next.js 14</p>
      </div>

      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span></span>
          <span className='text-sm md:text-base font-bold'>Federico von gromann</span>
        </a>
      </div>

      <div id='nav' className='w-full px-6'>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
