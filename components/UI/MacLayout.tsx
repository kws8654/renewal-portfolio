import React from 'react';
import { TopBar } from '@components/UI/TopBar';
import { DockBar } from '@components/UI/DockBar';

export const MacLayout = ({ children }: any) => {
  return (
    <section className='flex justify-center items-center w-full h-screen bg-black'>
      <section className='relative flex flex-col w-[80%] h-[80%] border-2 rounded-lg'>
        <TopBar />
        {children}
        <DockBar />
      </section>
    </section>
  );
};
