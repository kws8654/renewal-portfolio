/* @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';
import tw from 'twin.macro';
import porfoliFile from '@public/images/pf1.png';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { atomClickedPortfolio } from '@/reocil/ClickedPortfolio/atom';

const ABSOLUTE_POSITION = [
  { top: '40px', left: '20px' },
  { top: '160px', left: '8px' },
  { top: '280px', left: '26px' },
  { top: '400px', left: '26px' },
  { top: '40px', left: '140px' },
  { top: '160px', left: '160px' },
];

interface PortfolioProps {
  index: number;
  title: string;
  link: string;
}

export const Portfolio = forwardRef((props: PortfolioProps, ref: ForwardedRef<any>) => {
  Portfolio.displayName = 'Portfolio';
  const { index, title, link } = props;
  const router = useRouter();
  const [clickedPortfolio, setClickedPortfolio] = useRecoilState(atomClickedPortfolio);

  const onClickHandler = (event: any) => {
    event.stopPropagation();
    setClickedPortfolio(title);
  };

  return (
    <div
      ref={ref}
      css={[
        tw`absolute flex flex-col items-center cursor-pointer`,
        { top: ABSOLUTE_POSITION[index].top, left: ABSOLUTE_POSITION[index].left },
      ]}
      onClick={onClickHandler}
      onDoubleClick={() => router.push(link)}
    >
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
