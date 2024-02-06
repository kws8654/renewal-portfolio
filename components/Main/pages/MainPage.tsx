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
import { NOTIFICATIONS, MAIN_ASSETS } from '@/constants/common';
import { Gallery } from '@components/Main/Gallery';
import { ChatRoom } from '@components/Main/ChatRoom';
import { DocFolder } from '@components/Main/DocFolder';
import { OpenedDocFolder } from '@components/Main/OpendDocFolder';
import { MainAsset } from '@components/Main/MainAsset';
import Image from 'next/image';
import macBookBackgroundImage from '../../../public/images/macbook-background.jpeg';

export const MainPage = () => {
  const containerRef = useRef(null);
  const [componentRefs] = useState(() => Array.from({ length: 13 }, () => createRef<any>()));
  const setClickedPortfolio = useSetRecoilState(atomClickedPortfolio);
  const [onClickFolder, setOnClickFolder] = useState(false);
  const [onClickDocFolder, setOnClickDocFolder] = useState(false);

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
        className='relative w-full h-[calc(100%-25px)]'
        onClick={() => setClickedPortfolio(null)}
      >
        <Image src={macBookBackgroundImage} alt='macBookBackgroundImage' fill={true} />
        <div className='grid grid-cols-2 gap-[20px] w-[250px]'>
          {MAIN_ASSETS.map(
            (asset: { type: string; title: string; link: string }, index: number) => {
              const folderSetter =
                asset.type === 'folder'
                  ? MAIN_ASSETS.length - 1 === index
                    ? setOnClickDocFolder
                    : setOnClickFolder
                  : null;

              return (
                <MainAsset
                  key={index}
                  index={index}
                  ref={componentRefs[index]}
                  type={asset.type}
                  title={asset.title}
                  link={asset.link}
                  openFolder={folderSetter}
                />
              );
            },
          )}
        </div>
        <FaceTimeVideo ref={componentRefs[MAIN_ASSETS.length + 1]} />
        <MusicPlayer ref={componentRefs[MAIN_ASSETS.length + 2]} />
        <ResumeMemo ref={componentRefs[MAIN_ASSETS.length + 3]} />
        <OpenedFolder
          ref={componentRefs[MAIN_ASSETS.length + 4]}
          onClickFolder={onClickFolder}
          setOnClickFolder={setOnClickFolder}
        />
        <OpenedDocFolder
          ref={componentRefs[MAIN_ASSETS.length + 5]}
          onClickDocFolder={onClickDocFolder}
          setOnClickDocFolder={setOnClickDocFolder}
        />
        {/*<Gallery ref={componentRefs[MAIN_ASSETS.length + 5]} />*/}
        <ChatRoom ref={componentRefs[MAIN_ASSETS.length + 6]} />
        <div className='absolute top-[40px] right-[10px] flex flex-col gap-[10px] md:hidden'>
          {NOTIFICATIONS.map((notification: { title: string; message: string }, index: number) => {
            return (
              <Notification key={index} title={notification.title} message={notification.message} />
            );
          })}
        </div>
      </section>
    </MacLayout>
  );
};
