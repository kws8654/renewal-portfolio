import React, { forwardRef } from 'react';
import Image from 'next/image';
import closeButton from '../../public/images/close-button.png';
import minimizeButton from '../../public/images/minimize-button.png';
import maximizeButton from '../../public/images/maximize-button.png';

interface ButtonsProps {
  onClickClose?: any;
}

export const Buttons = forwardRef((props: ButtonsProps, ref: any) => {
  Buttons.displayName = 'Buttons';
  const { onClickClose } = props;

  const invalidButtonHandler = () => {
    const divRef = ref.current;

    divRef.classList.add('styles-shake-animation');
    setTimeout(() => {
      divRef.classList.remove('styles-shake-animation');
    }, 300);
  };

  return (
    <div className='absolute flex items-center ml-1 mt-0.5 gap-[5px]'>
      <Image
        src={closeButton}
        alt={'closeButton'}
        className='w-[15px] h-[15px] cursor-pointer'
        onClick={() => {
          onClickClose && onClickClose(false);
        }}
      />
      <Image
        src={minimizeButton}
        alt={'minimizeButton'}
        className='w-[15px] h-[15px] cursor-pointer'
        onClick={invalidButtonHandler}
      />
      <Image
        src={maximizeButton}
        alt={'maximizeButton'}
        className='w-[15px] h-[15px] cursor-pointer'
        onClick={invalidButtonHandler}
      />
    </div>
  );
});
