import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';
import folder from '@public/images/folder.png';
import { Buttons } from '@components/UI/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleDown,
  faDatabase,
  faDesktop,
  faHouseUser,
  faLaptop,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';
import { atomOnClickGallery } from '@/reocil/OnClickGallery/atom';

export const Gallery = forwardRef((_: object, ref: ForwardedRef<any>) => {
  Gallery.displayName = 'Gallery';

  const [images, setImages] = useState(null);
  const [onClickGallery, setOnClickGallery] = useRecoilState(atomOnClickGallery);

  useEffect(() => {
    async function fetchFeed() {
      const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
      const data = await fetch(url);
      const feed = await data.json();
      console.log(feed);

      setImages(feed.data);
    }

    void fetchFeed();
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute top-[80px] left-[150px] w-[1120px] h-[715px] rounded-lg bg-neutral-100 styles-text-xs overflow-hidden hover:z-40
      ${onClickGallery ? 'flex' : 'hidden'}`}
    >
      <div className='flex flex-col w-1/4 p-2 border-r'>
        <Buttons ref={ref} onClickClose={setOnClickGallery} />
        <div className='flex flex-col gap-[3px] p-2 mt-6'>
          <p className='text-gray-500 font-semibold text-[12px]'>사진</p>
          <div className='flex flex-col items-start gap-[3px] px-1'>
            <p>
              <FontAwesomeIcon icon={faPaperPlane} className='mr-1' /> 보관함
            </p>
            <p>
              <FontAwesomeIcon icon={faDatabase} className='mr-1' /> 추억
            </p>
            <p>
              <FontAwesomeIcon icon={faDesktop} className='mr-1' /> 사람들
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleDown} className='mr-1' /> 장소
            </p>
            <p>
              <FontAwesomeIcon icon={faHouseUser} className='mr-1' /> 최근 항목
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-[3px] p-2 mt-2'>
          <p className='text-gray-500 font-semibold text-[12px]'>앨범</p>
          <p className='px-1'>
            <FontAwesomeIcon icon={faLaptop} className='mr-1' /> 공유 앨범
          </p>
          <p className='px-1'>
            <FontAwesomeIcon icon={faLaptop} className='mr-1' /> 나의 앨범
          </p>
        </div>
      </div>
      <div className='w-3/4 bg-white'>
        <div className='flex justify-between items-center px-4 h-[7%] border-b'>
          <div className='flex items-center gap-[15px] styles-text-xl'>
            <p className='text-gray-700'>{`<`}</p>
            <p className='text-gray-400'>{`>`}</p>
            <p className='font-semibold styles-text-sm'>Gallery</p>
          </div>
          <input
            type='text'
            placeholder=' 검색'
            className='w-[140px] rounded-md border bg-gray-100'
          />
        </div>
        <div className='h-[93%] p-2 flex flex-col items-center overflow-x-hidden overflow-y-scroll'>
          <p className='w-full font-semibold styles-text-xl text-left'>
            {dayjs().format('YYYY년 MM월 DD일')}
          </p>
          <div className='my-2 grid grid-cols-4 gap-[10px]'>
            {images &&
              images.map((image: any, index: number) => {
                if (index >= 18) return <></>;
                return (
                  <div
                    key={index}
                    className='border border-gray-300 hover:scale-110 hover:z-10 transition'
                  >
                    <img
                      src={image.media_url}
                      alt='index'
                      className='w-[200px] h-[200px] object-cover blur-[2px]'
                    />
                  </div>
                );
              })}
          </div>
          <div className='text-center'>
            <b className='styles-text-md'>18장의 사진</b>
            <p className='text-gray-500'>지금 Instagram과 동기화됨</p>
          </div>
        </div>
      </div>
    </div>
  );
});
