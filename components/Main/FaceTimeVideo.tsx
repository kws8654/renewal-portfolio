import React, { ForwardedRef, forwardRef } from 'react';
import { Buttons } from '@components/UI/Buttons';
import Image from 'next/image';
import facetimeButtons from '../../public/images/facetime-buttons.png';

// eslint-disable-next-line react/display-name
export const FaceTimeVideo = forwardRef((props: any, ref: ForwardedRef<any>) => {
  return (
    <section
      ref={ref}
      className='absolute flex flex-col bottom-[150px] right-[50px] w-[500px] h-[300px] rounded-lg overflow-hidden styles-text-xs cursor-grab md:hidden'
    >
      <div className='relative flex justify-between p-1 styles-bar-gradient'>
        <Buttons />
        <p className='w-full font-semibold text-center'>Facetime</p>
        <Image
          src={facetimeButtons}
          alt={'facetimeButtons'}
          width={140}
          className='styles-x-center top-[50px]'
        />
      </div>
      <video src='./videos/facetime.mov' autoPlay muted loop />
    </section>
  );
});
