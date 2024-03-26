import * as React from 'react';
import dynamic from 'next/dynamic';
import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import Image from 'next/image';
import profile from '../../public/images/profile2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faChevronUp,
  faCirclePlus,
  faClock,
  faFileImport,
  faGear,
  faMagnifyingGlass,
  faPeopleGroup,
  faShapes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection),
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
);
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false,
});
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false,
});

export const NotionPage = ({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) => {
  const pathname = useRouter().pathname;

  if (!recordMap) {
    return null;
  }

  return (
    <section className='flex w-full w-[1450px] styles-text-sm overflow-x-hidden'>
      <div className='flex flex-col gap-[10px] w-[15%] h-full p-3 bg-neutral-900 text-neutral-500'>
        <div className='flex items-center gap-[10px]'>
          <Image src={profile} alt={'profile'} width={40} />
          <div>
            <b>Wonsub Ray Kim</b>
            <p className='styles-text-xs'>raykim.dev@gamil.com</p>
          </div>
        </div>
        <div className='flex flex-col gap-[5px] p-2 font-bold'>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-1' /> 검색
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className='mr-1' /> 업데이트
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} className='mr-1' /> 설정과 멤버
          </div>
          <div>
            <FontAwesomeIcon icon={faCirclePlus} className='mr-1' /> 새 페이지
          </div>
        </div>
        <div className='flex flex-col gap-[5px] p-2'>
          <p className='font-bold'>개인 페이지</p>
          {!pathname.includes('documents') ? <PortfolioMenu /> : <DocumentMenu />}
        </div>
        <div className='flex flex-col items-start gap-[5px] p-2 font-bold'>
          <div>
            <FontAwesomeIcon icon={faPeopleGroup} /> 팀스페이스 생성
          </div>
          <div>
            <FontAwesomeIcon icon={faShapes} className='mr-1' /> 템플릿
          </div>
          <div>
            <FontAwesomeIcon icon={faFileImport} className='mr-1' /> 가져오기
          </div>
          <div>
            <FontAwesomeIcon icon={faTrash} className='mr-2.5' />
            휴지통
          </div>
        </div>
      </div>
      <div className='w-[85%] h-full overflow-y-scroll overflow-x-hidden'>
        <NotionRenderer
          disableHeader
          recordMap={recordMap}
          fullPage={true}
          darkMode={true}
          rootPageId={rootPageId}
          mapPageUrl={(pageId) => `/portfolio/${pageId}`}
          components={{
            Code,
            Collection,
            Equation,
            Pdf,
            Modal,
            nextImage: Image,
          }}
        />
      </div>
    </section>
  );
};

const PortfolioMenu = () => {
  return (
    <div className='px-2 font-bold'>
      <FontAwesomeIcon icon={faChevronUp} className='mr-2' />
      📌 Portfolios
      <div className='flex flex-col gap-[5px] mt-1 ml-3'>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          porfolio 1
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          porfolio 2
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          porfolio 3
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          porfolio 4
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          porfolio 5
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          porfolio 6
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          porfolio 7
        </div>
      </div>
    </div>
  );
};

const DocumentMenu = () => {
  return (
    <div className='px-2 font-bold'>
      <FontAwesomeIcon icon={faChevronUp} className='mr-2' />
      📌 Documents
      <div className='flex flex-col gap-[5px] mt-1 ml-3'>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          Resume_ko
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          Resume_en
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          Career Desc_kr
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} className='mr-2' />
          Career Desc_en
        </div>
      </div>
    </div>
  );
};
