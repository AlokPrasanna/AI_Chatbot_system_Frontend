import React from 'react';
import { Text } from '../atoms';

const Footer = () => {
  return (
    <footer className='flex w-full h-[50px] items-center justify-end'>
      <div className='mr-5'>
       <Text text=" &copy; All rights reserved"  />
      </div>
    </footer>
  )
}

export default Footer;
