import React, { ForwardedRef, forwardRef, useRef } from 'react';
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
import portfolioFile from '@public/images/pf1.png';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { atomClickedPortfolio } from '@/reocil/ClickedPortfolio/atom';
import { Documents, PlanDocuments } from '@/constants/common';
import { useRouter } from 'next/router';

interface OpenedPlanFolderProps {
  onClickPlanDocFolder: boolean;
  setOnClickPlanDocFolder: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpenedPlanFolder = forwardRef(
  (props: OpenedPlanFolderProps, ref: ForwardedRef<any>) => {
    OpenedPlanFolder.displayName = 'OpenedPlanFolder';
    const { onClickPlanDocFolder, setOnClickPlanDocFolder } = props;
    const [clickedPortfolio, setClickedPortfolio] = useRecoilState(atomClickedPortfolio);
    const router = useRouter();

    const onClickHandler = (event: any, title: string) => {
      event.stopPropagation();
      setClickedPortfolio(title);
    };

    return (
      <div
        ref={ref}
        className={`absolute top-[230px] left-[320px] w-[720px] h-[415px] border rounded-lg bg-neutral-100 styles-text-xs overflow-hidden hover:z-40 ${
          onClickPlanDocFolder ? 'flex' : 'hidden'
        }`}
      >
        <div className='flex flex-col w-1/4 p-2 border-r'>
          <Buttons onClickClose={setOnClickPlanDocFolder} ref={ref} />
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
              <p className='font-semibold styles-text-sm'>플릿튠 기획</p>
            </div>
            <input
              type='text'
              placeholder=' 검색'
              className='w-[140px] rounded-md border bg-gray-100'
            />
          </div>
          <div className='flex justify-start items-start flex-wrap h-[90%] p-4'>
            {PlanDocuments.map((document: { title: string; link: string }, index: number) => {
              return (
                <div key={`document-${index}`} className='flex flex-col items-center'>
                  <Image
                    src={portfolioFile}
                    alt={'portfolioFile'}
                    width={100}
                    className={`${
                      document.title === clickedPortfolio &&
                      'border bg-gray-500 bg-opacity-50 rounded-md'
                    }`}
                    onClick={(e) => onClickHandler(e, document.title)}
                    onDoubleClick={() => router.push(document.link)}
                  />
                  <p>{document.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
);
