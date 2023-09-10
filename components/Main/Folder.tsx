import React from 'react';
import Image from 'next/image';
import folder from '@public/images/folder.png';

export const Folder = () => {
  return (
    <div className='flex flex-col items-center mt-3'>
      <Image src={folder} alt={'folder'} width={75} />
      <p className='mt-2 styles-text-sm text-white'>Click Here!</p>
    </div>
  );
};
