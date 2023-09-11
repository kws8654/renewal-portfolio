import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import folder from '@public/images/folder.png';

// eslint-disable-next-line react/display-name
export const Folder = forwardRef((props: any, ref: ForwardedRef<any>) => {
  return (
    <div ref={ref} className='flex flex-col items-center mt-3'>
      <Image src={folder} alt={'folder'} width={75} />
      <p className='mt-2 styles-text-sm text-white'>Click Here!</p>
    </div>
  );
});
