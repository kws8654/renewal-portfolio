import React, { ForwardedRef, forwardRef, useState } from 'react';
import Image from 'next/image';
import porfoliFile from '@public/images/pf1.png';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { atomClickedPortfolio } from '@/reocil/ClickedPortfolio/atom';

interface PortfolioProps {
  title: string;
  link: string;
}

// eslint-disable-next-line react/display-name
export const Portfolio = forwardRef((props: PortfolioProps, ref: ForwardedRef<any>) => {
  const { title, link } = props;
  const router = useRouter();
  const [clickedPortfolio, setClickedPortfolio] = useRecoilState(atomClickedPortfolio);

  const onClickHandler = (event: any) => {
    event.stopPropagation();
    setClickedPortfolio(title);
  };

  return (
    <div
      ref={ref}
      className='flex flex-col items-center cursor-pointer'
      onClick={onClickHandler}
      onDoubleClick={() => router.push(link)}
    >
      {/*<div ref={ref} className='absolute flex flex-col items-center'>*/}
      <Image
        src={porfoliFile}
        alt={'porfoliFile'}
        width={100}
        className={`${title === clickedPortfolio && 'border bg-gray-500 bg-opacity-50 rounded-md'}`}
      />
      <p
        className={`px-1 styles-text-sm text-white ${
          title === clickedPortfolio && 'bg-blue-600 rounded-md'
        }`}
      >
        {title}
      </p>
    </div>
  );
});
