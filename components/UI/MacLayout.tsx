import React, { forwardRef } from 'react';
import { TopBar } from '@components/UI/TopBar';
import { DockBar } from '@components/UI/DockBar';
import { useRouter } from 'next/router';

// eslint-disable-next-line react/display-name
export const MacLayout = forwardRef((prop?: any, ref?: any) => {
  const { children } = prop;
  const router = useRouter();

  return (
    <section className='flex justify-center items-center w-full h-screen bg-black'>
      <div
        ref={ref}
        className='relative flex flex-col w-[80%] h-[80%] border border-gray-500 rounded-lg overflow-hidden'
      >
        <TopBar />
        {children}
        {!router.pathname.includes('portfolio') && <DockBar />}
      </div>
    </section>
  );
});
