import React from 'react';
import Image from 'next/image';
import closeButton from '../../public/images/close-button.png';
import minimizeButton from '../../public/images/minimize-button.png';
import maximizeButton from '../../public/images/maximize-button.png';

export const Buttons = () => {
  return (
    <div className='absolute flex gap-[5px]'>
      <Image src={closeButton} alt={'closeButton'} width={20} />
      <Image src={minimizeButton} alt={'minimizeButton'} width={20} />
      <Image src={maximizeButton} alt={'maximizeButton'} width={20} />
    </div>
  );
};
