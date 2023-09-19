import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import cover from '@public/images/4walls.webp';
import dolbyLogo from '@public/images/dolby-logo.png';
import { Buttons } from '@components/UI/Buttons';

export const MusicPlayer = forwardRef((_: object, ref: ForwardedRef<any>) => {
  MusicPlayer.displayName = 'MusicPlayer';

  return (
    <div
      ref={ref}
      className='absolute top-[100px] right-[340px] flex flex-col w-[301px] border border-gray-300 bg-gray-100 rounded-lg overflow-hidden hover:z-40'
    >
      <div className='relative top-1'>
        <Buttons ref={ref} />
      </div>
      <Image src={cover} alt={'cover'} className='w-full h-[300px]' />
      <div className='flex items-center justify-center pt-1 text-center styles-text-xs bg-gray-100'>
        <Image src={dolbyLogo} alt={'dolbyLogo'} width={20} />
        <span className='font-semibold mr-0.5'>Dolby</span>Atmos
      </div>
      <audio controls>
        <source src='./audios/audio.mp3' />
      </audio>
      <div className='text-center pb-3 bg-gray-100'>
        <p className='styles-text-lg font-semibold'>4walls</p>
        <p className='styles-text-sm'>LDN Noise - 4Walls - Single</p>
      </div>
    </div>
  );
});
