import React from 'react';
import { FadeLoader } from 'react-spinners';

export const LoadingSpinner = () => {
  return (
    <section className='w-full h-full flex justify-center items-center'>
      <FadeLoader color='#ced4da' />
    </section>
  );
};
