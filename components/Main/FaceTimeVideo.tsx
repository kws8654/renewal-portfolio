import React, { ForwardedRef, forwardRef } from 'react';
import { Buttons } from '@components/UI/Buttons';
import Image from 'next/image';
import facetimeButtons from '../../public/images/facetime-buttons.png';

export const FaceTimeVideo = forwardRef((_: object, ref: ForwardedRef<any>) => {
  FaceTimeVideo.displayName = 'FaceTimeVideo';

  return (
    <section
      ref={ref}
      className='absolute flex flex-col bottom-[150px] right-[50px] w-[400px] h-[250px] rounded-lg overflow-hidden styles-text-xs cursor-grab hover:z-40 md:hidden'
    >
      <div className='relative flex justify-between p-1 styles-bar-gradient'>
        <Buttons ref={ref} />
        <p className='w-full font-semibold text-center'>Facetime</p>
        <Image
          src={facetimeButtons}
          alt={'facetimeButtons'}
          width={140}
          className='styles-x-center top-0'
        />
      </div>
      <video className='px-8 bg-black' src='./videos/facetime.webm' autoPlay muted loop />
    </section>
  );
});
