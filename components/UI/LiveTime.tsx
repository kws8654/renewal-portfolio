import React, { useLayoutEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export const LiveTime = () => {
  const [time, setTime] = useState(dayjs().format('MM월 DD일 (ddd) HH:mm'));

  useLayoutEffect(() => {
    setInterval(() => setTime(dayjs().format('MM월 DD일 (ddd) HH:mm')), 1000);
  }, []);

  return <p className='styles-text-sm '>{time}</p>;
};
