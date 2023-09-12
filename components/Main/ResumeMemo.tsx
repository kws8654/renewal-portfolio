import React, { ForwardedRef, forwardRef } from 'react';
import { Buttons } from '@components/UI/Buttons';

// eslint-disable-next-line react/display-name
export const ResumeMemo = forwardRef((prop: any, ref: ForwardedRef<any>) => {
  return (
    <section
      ref={ref}
      className='absolute flex flex-col top-[150px] right-[400px] w-[500px] h-[440px] rounded-lg styles-text-xs overflow-hidden cursor-grab z-30'
    >
      <div className='relative flex justify-between p-1 styles-bar-gradient'>
        <Buttons />
        <p className='w-full font-semibold text-center'>Resume</p>
      </div>
      <div className='p-4 bg-yellow-200'>
        <b className='styles-text-lg'> Wonsub Kim, 김원섭 </b>
        <br />
        <br />
        📞 010-6816-8***
        <br />
        📧{' '}
        <a href='mailto: raykim.dev@gmail.com?subject=We want to contact with you, RAY!'>
          raykim.dev@gmail.com
        </a>
        <br />
        <br />
        <p>
          Hanyang University _ Architecture (2013.03 - 2013.07)
          <br />
          Sangmyung University _ Scenography (2015.03 - 2021.02)
        </p>
        <br />
        <p>
          Team Tiger _ Frontend Engineer (2021.03 - 2022.06)
          <br />
          Fleetune _ Frontend Engineer (2022.10 - )
        </p>
        <br />
        <p>
          ✔️ HTML / CSS / Sass / Less / Styled-Components / Emotion.js / Tailwind
          <br />
          ✔️ JavaScript(~ES7) / TypeScript / HTML5 / JavaScript API
          <br />
          ✔️ React.js / Next.js / Recoil / React-Query
          <br />
          ✔️ Mapbox GL / React Map GL / MapLibre GL / Turf.js
          <br />
          ✔️ Git (Github, Bitbucket, Gitlab)
        </p>
        <br />
        <p>
          ✅ TOEIC 905 <br />
          ✅ TOEIC SPEAKING Lv.6 <br />
          ✅ OPIC IH <br />✅ 정보처리기사
        </p>
      </div>
    </section>
  );
});
