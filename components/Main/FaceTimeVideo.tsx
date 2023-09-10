import React, { forwardRef } from 'react';
import { Buttons } from '@components/UI/Buttons';

// eslint-disable-next-line react/display-name
const FaceTimeVideo = forwardRef((props: any, ref: any) => {
  return (
    <section
      ref={ref}
      className='absolute flex flex-col bottom-[150px] right-[50px] w-[500px] h-[300px] rounded-lg overflow-hidden styles-text-xs cursor-grab'
    >
      <div className='relative flex justify-between p-1 styles-bar-gradient'>
        <Buttons />
        <p className='w-full font-semibold text-center'>Facetime</p>
      </div>
      <video src='./videos/facetime.mov' autoPlay muted loop />
    </section>
  );
});

export default FaceTimeVideo;
