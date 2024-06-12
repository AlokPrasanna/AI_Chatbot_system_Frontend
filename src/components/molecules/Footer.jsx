import React from 'react';
import { Text } from '../atoms';

const Footer = () => {
  return (
    <footer className='flex w-full h-[50px] bg-slate-200 opacity-60 items-center justify-center'>
      &copy;<Text text="All rights reserved" />
    </footer>
  )
}

export default Footer;
