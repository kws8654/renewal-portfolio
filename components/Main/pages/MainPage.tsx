import React, { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { MacLayout } from '@components/UI/MacLayout';
import { Portfolio } from '@components/Main/Portfolio';
import { Folder } from '@components/Main/Folder';
import { ResumeMemo } from '@components/Main/ResumeMemo';
import { FaceTimeVideo } from '@components/Main/FaceTimeVideo';
import { atomClickedPortfolio } from '@/reocil/ClickedPortfolio/atom';
import { Notification } from '@components/Main/Notification';
import { notification } from 'antd';

const PORTFOLIOS = [
  {
    title: 'FLORT_fleetune',
    link: '/portfolio/Portfolio_1-fc5adbff93f345fd8f2dc87d4ae26622?pvs=4',
  },
  {
    title: 'Dashboard_fleetune',
    link: '/portfolio/Portfolio_2-c58739c484b4454fb2f67f034e5d150f?pvs=4',
  },
  {
    title: 'DAT_fleetune',
    link: '/portfolio/Portfolio_3-8f020c4d504648148b3926d81adef840?pvs=4',
  },
  {
    title: 'ROT_fleetune',
    link: '/portfolio/Portfolio_4-2ecb5cab47af4a388f9b6b0b040af322?pvs=4',
  },
  {
    title: 'Homepage_fleetune',
    link: '/portfolio/Portfolio_5-ba388755979e420388052c60234112af?pvs=4',
  },
  { title: '.etc', link: '/portfolio/Portfolio_6-a1f9ba0778ec413ea46acb98810d7248?pvs=4' },
];

const NOTIFICATIONS = [
  {
    title: '알림',
    message: 'Nice to meet you, Stranger',
  },
  {
    title: '중요 알림',
    message: 'You can drag and move something',
  },
];

export const MainPage = () => {
  const containerRef = useRef(null);
  const [componentRefs] = useState(() => Array.from({ length: 10 }, () => createRef<any>()));
  const setClickedPortfolio = useSetRecoilState(atomClickedPortfolio);

  useEffect(() => {
    const { width: containerWidth, height: containerHeight } =
      containerRef.current.getBoundingClientRect();

    componentRefs.forEach((componentRef: RefObject<any>) => {
      if (!componentRef.current) return;

      const { width: boxWidth, height: boxHeight } = componentRef.current.getBoundingClientRect();

      let isDragging: boolean = null;
      let originLeft: number = null;
      let originTop: number = null;
      let originX: number = null;
      let originY: number = null;

      componentRef.current.addEventListener('mousedown', (e: MouseEvent) => {
        e.preventDefault();
        isDragging = true;
        originX = e.clientX;
        originY = e.clientY;
        originLeft = componentRef.current.offsetLeft;
        originTop = componentRef.current.offsetTop;
      });

      document.addEventListener('mouseup', (e: MouseEvent) => {
        isDragging = false;
      });

      document.addEventListener('mousemove', (e: MouseEvent) => {
        if (isDragging) {
          const diffX = e.clientX - originX;
          const diffY = e.clientY - originY;
          const endOfXPoint = containerWidth - boxWidth;
          const endOfYPoint = containerHeight - boxHeight;
          componentRef.current.style.left = `${Math.min(
            Math.max(0, originLeft + diffX),
            endOfXPoint,
          )}px`;
          componentRef.current.style.top = `${Math.min(
            Math.max(0, originTop + diffY),
            endOfYPoint,
          )}px`;
        }
      });
    });
  }, [containerRef, componentRefs]);

  return (
    <MacLayout ref={containerRef}>
      <section
        className='p-4 w-full h-[calc(100%-25px)] bg-cover bg-macbookBackgroundImage'
        onClick={() => setClickedPortfolio(null)}
      >
        <div className='grid grid-cols-2 gap-[20px] w-[250px]'>
          {PORTFOLIOS.map((portfolio: { title: string; link: string }, index: number) => {
            return (
              <Portfolio
                key={index}
                ref={componentRefs[index]}
                title={portfolio.title}
                link={portfolio.link}
              />
            );
          })}
          <Folder ref={componentRefs[PORTFOLIOS.length]} />
        </div>
        <div className='absolute top-[40px] right-[10px] flex flex-col gap-[10px]'>
          {NOTIFICATIONS.map((notification: { title: string; message: string }, index: number) => {
            return (
              <Notification key={index} title={notification.title} message={notification.message} />
            );
          })}
        </div>
        <ResumeMemo ref={componentRefs[PORTFOLIOS.length + 1]} />
        <FaceTimeVideo ref={componentRefs[PORTFOLIOS.length + 2]} />
      </section>
    </MacLayout>
  );
};
