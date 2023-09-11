import React from 'react';
import Image from 'next/image';
import appleUdLogo from '../../public/images/apple-ud-logo.png';
import kakaoTalk from '../../public/images/kakaotalk.png';
import network from '../../public/images/internet.png';
import battery from '../../public/images/battery.png';
import wifi from '../../public/images/wifi.png';
import magnifier from '../../public/images/magnifier.png';
import toggle from '../../public/images/toggle.png';
import { LiveTime } from '@components/UI/LiveTime';

export const TopBar = () => {
  return (
    <section className='flex justify-between p-2 h-[26px] styles-bar-gradient border-b'>
      <div className='flex items-center gap-[5px] styles-text-sm'>
        <Image src={appleUdLogo} alt={'appleUdLogo'} width={25} />
        <p className='mx-2 font-semibold'>Wonsub's Portfolio</p>
        <div className='flex gap-[15px]'>
          <p>파일</p>
          <p>편집</p>
          <p>보기</p>
          <p>이동</p>
          <p>도움말</p>
        </div>
      </div>
      <div className='flex items-center gap-[15px]'>
        <Image src={kakaoTalk} alt={'kakaoTalk'} width={15} />
        <Image src={network} alt={'network'} width={15} />
        <Image src={battery} alt={'battery'} width={15} />
        <Image src={wifi} alt={'wifi'} width={15} />
        <Image src={magnifier} alt={'magnifier'} width={15} />
        <Image src={toggle} alt={'toggle'} width={15} />
        <LiveTime />
      </div>
    </section>
  );
};
