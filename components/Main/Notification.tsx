import React, { useState } from 'react';

interface NotificationProps {
  title: string;
  message: string;
}

export const Notification = ({ title, message }: NotificationProps) => {
  const [isClickedClose, setIsClickedClose] = useState(false);

  return (
    <>
      {!isClickedClose ? (
        <div className='flex flex-col justify-center w-[300px] h-[70px] p-4 rounded-2xl bg-gray-200 styles-notification-animation'>
          <div className='flex justify-between items-center'>
            <p className='font-semibold'>{title}</p>
            <button onClick={() => setIsClickedClose(true)} className='text-gray-500'>
              x
            </button>
          </div>
          <p>{message}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
