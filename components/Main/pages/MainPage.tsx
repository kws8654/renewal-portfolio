import React from 'react';
import { MacLayout } from '@components/UI/MacLayout';

export const MainPage = () => {
  return (
    <MacLayout>
      {/*Background-image*/}
      {/*Portfolio-files*/}
      <section className='p-4 w-full h-[calc(100%-25px)] bg-amber-200'>
        <div className='grid grid-cols-2 w-[300px] border border-red-500'>
          <div>파일</div>
          <div>파일</div>
          <div>파일</div>
          <div>파일</div>
          <div>파일</div>
        </div>
      </section>
    </MacLayout>
  );
};
