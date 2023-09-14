import * as React from 'react';
import dynamic from 'next/dynamic';
import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection),
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
);
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false,
});
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false,
});

export const NotionPage = ({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) => {
  if (!recordMap) {
    return null;
  }

  return (
    <section className='h-[774px] w-full overflow-y-scroll overflow-x-hidden'>
      <NotionRenderer
        disableHeader
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        rootPageId={rootPageId}
        mapPageUrl={(pageId) => `/portfolio/${pageId}`}
        components={{
          Code,
          Collection,
          Equation,
          Pdf,
          Modal,
        }}
      />
    </section>
  );
};
