import React, { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { MacLayout } from '@components/UI/MacLayout';
import { Portfolio } from '@components/Main/Portfolio';
import { Folder } from '@components/Main/Folder';
import { ResumeMemo } from '@components/Main/ResumeMemo';
import { FaceTimeVideo } from '@components/Main/FaceTimeVideo';
import { atomClickedPortfolio } from '@/reocil/ClickedPortfolio/atom';
import { Notification } from '@components/Main/Notification';
import { OpenedFolder } from '@components/Main/OpenedFolder';
import { MusicPlayer } from '@components/Main/MusicPlayer';
import { PORTFOLIOS, NOTIFICATIONS } from '@/constants/common';

export const MainPage = () => {
  const containerRef = useRef(null);
  const [componentRefs] = useState(() => Array.from({ length: 11 }, () => createRef<any>()));
  const setClickedPortfolio = useSetRecoilState(atomClickedPortfolio);
  const [onClickFolder, setOnClickFolder] = useState(false);

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
                index={index}
                ref={componentRefs[index]}
                title={portfolio.title}
                link={portfolio.link}
              />
            );
          })}
          <Folder ref={componentRefs[PORTFOLIOS.length]} setOnClickFolder={setOnClickFolder} />
        </div>
        <div className='absolute top-[40px] right-[10px] flex flex-col gap-[10px] md:hidden'>
          {NOTIFICATIONS.map((notification: { title: string; message: string }, index: number) => {
            return (
              <Notification key={index} title={notification.title} message={notification.message} />
            );
          })}
        </div>
        <FaceTimeVideo ref={componentRefs[PORTFOLIOS.length + 1]} />
        <MusicPlayer ref={componentRefs[PORTFOLIOS.length + 2]} />
        <ResumeMemo ref={componentRefs[PORTFOLIOS.length + 3]} />
        <OpenedFolder
          ref={componentRefs[PORTFOLIOS.length + 4]}
          onClickFolder={onClickFolder}
          setOnClickFolder={setOnClickFolder}
        />
      </section>
    </MacLayout>
  );
};
