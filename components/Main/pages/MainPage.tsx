import React, { createRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MacLayout } from '@components/UI/MacLayout';
import porfoliFile from '../../../public/images/pf1.png';
import folder from '../../../public/images/folder.png';
import { ResumeMemo } from '@components/Main/ResumeMemo';
import { useDnd } from '@hooks/useDnd';
import FaceTimeVideo from '@components/Main/FaceTimeVideo';
import { Folder } from '@components/Main/Folder';

export const MainPage = () => {
  const containerRef = useRef(null);
  const componentRef = useRef(null);
  const [componentRefs] = useState(() => Array.from({ length: 8 }, () => createRef<any>()));
  // const combinedRef = { contatinerRef: containerRef, componentRef };
  // const getUseDnd = useDnd(combinedRef);

  useEffect(() => {
    const { width: containerWidth, height: containerHeight } =
      containerRef.current.getBoundingClientRect();

    componentRefs.forEach((componentRef: any) => {
      const { width: boxWidth, height: boxHeight } = componentRef.current.getBoundingClientRect();

      let isDragging: any = null;
      let originLeft: any = null;
      let originTop: any = null;
      let originX: any = null;
      let originY: any = null;

      componentRef.current.addEventListener('mousedown', (e: any) => {
        e.preventDefault();
        isDragging = true;
        originX = e.clientX;
        originY = e.clientY;
        originLeft = componentRef.current.offsetLeft;
        originTop = componentRef.current.offsetTop;
      });

      document.addEventListener('mouseup', (e: any) => {
        isDragging = false;
      });

      document.addEventListener('mousemove', (e: any) => {
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
    // const { width: containerWidth, height: containerHeight } =
    //   containerRef.current.getBoundingClientRect();
    // const { width: boxWidth, height: boxHeight } = componentRef.current.getBoundingClientRect();
    //
    // let isDragging: any = null;
    // let originLeft: any = null;
    // let originTop: any = null;
    // let originX: any = null;
    // let originY: any = null;
    //
    // componentRef.current.addEventListener('mousedown', (e: any) => {
    //   e.preventDefault();
    //   isDragging = true;
    //   originX = e.clientX;
    //   originY = e.clientY;
    //   originLeft = componentRef.current.offsetLeft;
    //   originTop = componentRef.current.offsetTop;
    // });
    //
    // document.addEventListener('mouseup', (e: any) => {
    //   isDragging = false;
    // });
    //
    // document.addEventListener('mousemove', (e: any) => {
    //   if (isDragging) {
    //     const diffX = e.clientX - originX;
    //     const diffY = e.clientY - originY;
    //     const endOfXPoint = containerWidth - boxWidth;
    //     const endOfYPoint = containerHeight - boxHeight;
    //     componentRef.current.style.left = `${Math.min(
    //       Math.max(0, originLeft + diffX),
    //       endOfXPoint,
    //     )}px`;
    //     componentRef.current.style.top = `${Math.min(
    //       Math.max(0, originTop + diffY),
    //       endOfYPoint,
    //     )}px`;
    //   }
    // });
  }, [containerRef, componentRefs]);

  return (
    <MacLayout ref={containerRef}>
      <section className='p-4 w-full h-[calc(100%-25px)] bg-cover bg-macbookBackgroundImage'>
        <div className='grid grid-cols-2 w-[250px] gap-[20px]'>
          <div ref={componentRefs[0]} className='flex flex-col items-center'>
            {/*<div ref={componentRefs[0]} className='absolute flex flex-col items-center'>*/}
            <Image src={porfoliFile} alt={'porfoliFile'} width={100} />
            <p className='styles-text-sm text-white'>FLROT_fleetune</p>
          </div>
          <div ref={componentRefs[1]} className='flex flex-col items-center'>
            {/*<div ref={componentRefs[1]} className='absolute flex flex-col items-center'>*/}
            <Image src={porfoliFile} alt={'porfoliFile'} width={100} />
            <p className='styles-text-sm text-white'>Dashboard_fleetune</p>
          </div>
          <div ref={componentRefs[2]} className='flex flex-col items-center'>
            {/*<div ref={componentRefs[2]} className='absolute flex flex-col items-center'>*/}
            <Image src={porfoliFile} alt={'porfoliFile'} width={100} />
            <p className='styles-text-sm text-white'>DAT_fleetune</p>
          </div>
          <div ref={componentRefs[3]} className='flex flex-col items-center'>
            {/*<div ref={componentRefs[3]} className='absolute flex flex-col items-center'>*/}
            <Image src={porfoliFile} alt={'porfoliFile'} width={100} />
            <p className='styles-text-sm text-white'>ROT_fleetune</p>
          </div>
          <div ref={componentRefs[4]} className='flex flex-col items-center'>
            {/*<div ref={componentRefs[4]} className='absolute flex flex-col items-center'>*/}
            <Image src={porfoliFile} alt={'porfoliFile'} width={100} />
            <p className='styles-text-sm text-white'>Homepage_fleetune</p>
          </div>
          <div ref={componentRefs[5]} className='flex flex-col items-center'>
            {/*<div ref={componentRefs[5]} className='absolute flex flex-col items-center'>*/}
            <Image src={porfoliFile} alt={'porfoliFile'} width={100} />
            <p className='styles-text-sm text-white'>.etc</p>
          </div>
          <Folder />
        </div>
        <ResumeMemo ref={componentRefs[6]} />
        <FaceTimeVideo ref={componentRefs[7]} />
      </section>
    </MacLayout>
  );
};
