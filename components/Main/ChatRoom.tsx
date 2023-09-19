import React, { ForwardedRef, forwardRef } from 'react';
import { Buttons } from '@components/UI/Buttons';
import Image from 'next/image';
import profile from '../../public/images/profile2.png';

interface ButtonsProps {
  onClickClose?: any;
}

export const ChatRoom = forwardRef((props: ButtonsProps, ref: ForwardedRef<any>) => {
  ChatRoom.displayName = 'ChatRoom';

  return (
    <div
      ref={ref}
      className='absolute bottom-[-250px] flex flex-col w-[340px] h-[500px] bg-sky-100 rounded-md overflow-hidden'
    >
      <Buttons />
      <div className='flex py-1 mt-4 border-b h-[12%]'>
        <Image src={profile} alt={'profile'} width={50} />
        <div>
          <p>Ray</p>
          <p>👥 2</p>
        </div>
      </div>
      <div className='h-[68%] border-b overflow-y-scroll'>{/*채팅 기록*/}</div>
      <div className='h-[20%]'>
        <input autoFocus type='text' className='w-full h-[70%]' />
        <div className='h-[30%] bg-white'></div>
      </div>
    </div>
  );
});
