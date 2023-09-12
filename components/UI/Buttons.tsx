import React from 'react';
import Image from 'next/image';
import closeButton from '../../public/images/close-button.png';
import minimizeButton from '../../public/images/minimize-button.png';
import maximizeButton from '../../public/images/maximize-button.png';

export const Buttons = () => {
  return (
    <div className='absolute flex items-center ml-1 mt-0.5 gap-[5px]'>
      <Image src={closeButton} alt={'closeButton'} className='w-[15px] h-[15px]' />
      <Image src={minimizeButton} alt={'minimizeButton'} className='w-[15px] h-[15px]' />
      <Image src={maximizeButton} alt={'maximizeButton'} className='w-[15px] h-[15px]' />
    </div>
  );
};
