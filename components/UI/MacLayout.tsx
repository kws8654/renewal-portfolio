import React, { ForwardedRef, forwardRef } from 'react';
import { TopBar } from '@components/UI/TopBar';
import { DockBar } from '@components/UI/DockBar';
import { useRouter } from 'next/router';
import { useLoading } from '@hooks/useLoading';
import { LoadingSpinner } from '@components/UI/LoadingSpinner';

interface MacLayoutProps {
  children?: React.ReactNode;
}

export const MacLayout = forwardRef((prop?: MacLayoutProps, ref?: ForwardedRef<any>) => {
  MacLayout.displayName = 'MacLayout';
  const { children } = prop;
  const router = useRouter();
  const isLoading = useLoading();

  return (
    <section className='flex justify-center items-center w-full h-screen bg-neutral-900'>
      <div
        ref={ref}
        className='relative flex flex-col w-[1400px] h-[800px] border border-gray-500 rounded-lg overflow-hidden styles-transition bg-black'
      >
        <TopBar />
        {!isLoading ? children : <LoadingSpinner />}
        {router.pathname.includes('main') && !isLoading && <DockBar />}
      </div>
    </section>
  );
});
