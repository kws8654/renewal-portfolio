import React, { forwardRef } from 'react';
import { TopBar } from '@components/UI/TopBar';
import { DockBar } from '@components/UI/DockBar';

// eslint-disable-next-line react/display-name
export const MacLayout = forwardRef((prop: any, ref: any) => {
  const { children } = prop;

  return (
    <section className='flex justify-center items-center w-full h-screen bg-black'>
      <div ref={ref} className='relative flex flex-col w-[80%] h-[80%] rounded-lg overflow-hidden'>
        <TopBar />
        {children}
        <DockBar />
      </div>
    </section>
  );
});
