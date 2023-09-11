import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export const LiveTime = () => {
  return <p className='styles-text-sm '>{dayjs().format('MM월 DD일 (ddd) HH:mm')}</p>;
};
