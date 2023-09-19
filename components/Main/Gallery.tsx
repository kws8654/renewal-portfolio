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

export const Gallery = forwardRef((_: object, ref: ForwardedRef<any>) => {
  Gallery.displayName = 'Gallery';
  const [images, setImages] = useState(null);

  useEffect(() => {
    async function fetchFeed() {
      const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
      const data = await fetch(url);
      const feed = await data.json();

      setImages(feed.data);
    }

    void fetchFeed();
  }, []);

  return (
    // <section
    //   ref={ref}
    //   className='absolute top-[100px] left-[100px] w-[900px] h-[600px] bg-white z-50 overflow-y-scroll'
    // >
    //   <div className='grid grid-cols-5'>
    //     {images &&
    //       images.map((image: any, index: number) => {
    //         if (index >= 18) return <></>;
    //         return (
    //           <div key={index}>
    //             <img
    //               src={image.media_url}
    //               alt='index'
    //               className='w-[200px] h-[200px] object-cover'
    //             />
    //           </div>
    //         );
    //       })}
    //   </div>
    // </section>
    <div
      ref={ref}
      className={`absolute flex top-[200px] left-[350px] w-[720px] h-[415px] rounded-lg bg-neutral-100 styles-text-xs overflow-hidden hover:z-40`}
    >
      <div className='flex flex-col w-1/4 p-2 border-r'>
        <Buttons ref={ref} />
        <div className='flex flex-col gap-[3px] p-2 mt-6'>
          <p className='text-gray-500 font-semibold text-[12px]'>즐겨찾기</p>
          <div className='flex flex-col items-start gap-[3px] px-1'>
            <p>
              <FontAwesomeIcon icon={faPaperPlane} className='mr-1' /> AirDrop
            </p>
            <p>
              <FontAwesomeIcon icon={faDatabase} className='mr-1' /> 응용 프로그램
            </p>
            <p>
              <FontAwesomeIcon icon={faDesktop} className='mr-1' /> 데스크탑
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleDown} className='mr-1' /> 다운로드
            </p>
            <p>
              <FontAwesomeIcon icon={faHouseUser} className='mr-1' /> Wonsub's Portfolio
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-[3px] p-2 mt-2'>
          <p className='text-gray-500 font-semibold text-[12px]'>위치</p>
          <p className='px-1'>
            <FontAwesomeIcon icon={faLaptop} className='mr-1' /> Wonsub's MacBook
          </p>
        </div>
      </div>
      <div className='w-3/4 bg-white'>
        <div className='flex justify-between items-center px-4 h-[10%] border-b'>
          <div className='flex items-center gap-[15px] styles-text-xl'>
            <p className='text-gray-700'>{`<`}</p>
            <p className='text-gray-400'>{`>`}</p>
            <p className='font-semibold styles-text-sm'>Click Here!</p>
          </div>
          <input
            type='text'
            placeholder=' 검색'
            className='w-[140px] rounded-md border bg-gray-100'
          />
        </div>
        <div className='grid grid-cols-5 h-full overflow-y-scroll'>
          {images &&
            images.map((image: any, index: number) => {
              if (index >= 18) return <></>;
              return (
                <div key={index}>
                  <img
                    src={image.media_url}
                    alt='index'
                    className='w-[200px] h-[200px] object-cover'
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
});
