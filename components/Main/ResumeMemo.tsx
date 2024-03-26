import React, { ForwardedRef, forwardRef } from 'react';
import { Buttons } from '@components/UI/Buttons';

export const ResumeMemo = forwardRef((_: object, ref: ForwardedRef<any>) => {
  ResumeMemo.displayName = 'ResumeMemo';

  return (
    <section
      ref={ref}
      className='absolute flex flex-col top-[170px] right-[600px] w-[500px] h-[440px] rounded-lg styles-text-xs
      overflow-hidden cursor-grab hover:z-40 md:hidden'
    >
      <div className='relative flex justify-between p-1 styles-bar-gradient'>
        <Buttons ref={ref} />
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
          Sangmyung University _ Scenography (2015.03 - 2021.02)
          <br />
          Hanyang University _ Architecture (2013.03 - 2013.07)
        </p>
        <br />
        <p>
          Fleetune _ Frontend Engineer (2022.10 - 2024.02)
          <br />
          Team Tiger _ Frontend Engineer (2021.03 - 2022.06)
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
