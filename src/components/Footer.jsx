import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className='bg-[#0A0A0A] text-white layout-pad pt-8 pb-4'>
      {/* Mobile Design */}
      <div className='block lg:hidden'>
        <div className='font-bold'>
          <h3 className='text-3xl'>Bakhita</h3>
          <h4 className='text-2xl'>Pastoral Center</h4>
        </div>

        <div className='flex gap-4 mt-8'>
          <NavLink to='/'>Home</NavLink>
          <div>About</div>
          <NavLink to='/#services'>Services</NavLink>
          <div>Gallery</div>
        </div>

        <div className='flex text-2xl mt-4 gap-4'>
          <Icon icon='prime:twitter' />
          <Icon icon='devicon-plain:facebook' />
          <Icon icon='mdi:instagram' />
        </div>

        <div className='text-xs mt-48 text-center'>
          Copyright Bakhita Center, All rights reserved
        </div>
      </div>

      {/* Desktop design */}
      <div className='hidden lg:block'>
        <div className='flex justify-between items-center'>
          <div className='font-bold'>
            <h3 className='text-7xl'>Bakhita</h3>
            <h4 className='text-5xl'>Pastoral Center</h4>
          </div>
          <div className='flex gap-4 mt-8'>
            <NavLink to='/'>Home</NavLink>
            <div>About</div>
            <NavLink to='/#services'>Services</NavLink>
            <div>Gallery</div>
          </div>
        </div>

        <div className='flex justify-between items-center mt-36'>
          <div className='flex text-2xl mt-4 gap-4'>
            <Icon icon='prime:twitter' />
            <Icon icon='devicon-plain:facebook' />
            <Icon icon='mdi:instagram' />
          </div>

          <div className='text-xs text-right'>
            Copyright Bakhita Center, All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
