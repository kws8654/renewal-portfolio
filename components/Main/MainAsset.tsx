/* @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { atomClickedPortfolio } from '@/reocil/ClickedPortfolio/atom';

const ABSOLUTE_POSITION = [
  { top: '40px', left: '25px' },
  { top: '160px', left: '8px' },
  { top: '280px', left: '26px' },
  { top: '400px', left: '6px' },
  { top: '520px', left: '6px' },
  { top: '40px', left: '140px' },
  { top: '160px', left: '160px' },
  { top: '310px', left: '170px' },
  { top: '430px', left: '170px' },
];

interface MainAssetProps {
  type: string;
  index: number;
  title: string;
  link: string;
  openFolder?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainAsset = forwardRef((props: MainAssetProps, ref: ForwardedRef<any>) => {
  MainAsset.displayName = 'MainAsset';
  const { type, index, title, link, openFolder } = props;
  const router = useRouter();
  const [clickedPortfolio, setClickedPortfolio] = useRecoilState(atomClickedPortfolio);

  const onClickHandler = (event: any) => {
    event.stopPropagation();
    setClickedPortfolio(title);
  };

  const onDoubleClickHandler = () => {
    type === 'file' ? router.push(link) : openFolder(true);
  };

  return (
    <div
      ref={ref}
      css={[
        tw`absolute flex flex-col items-center cursor-pointer`,
        { top: ABSOLUTE_POSITION[index].top, left: ABSOLUTE_POSITION[index].left },
      ]}
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
    >
      <Image
        src={`/images/${type}.png`}
        alt={`${type}-${index}`}
        width={type === 'file' ? 100 : 80}
        height={type === 'file' ? 100 : 80}
        className={`${
          title === clickedPortfolio && 'border bg-gray-500 bg-opacity-50 rounded-md'
        } ${type === 'folder' && 'mb-3'}`}
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
