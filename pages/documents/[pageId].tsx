import * as React from 'react';
import { ExtendedRecordMap } from 'notion-types';
import { NotionAPI } from 'notion-client';
import { NotionPage } from '@components/UI/NotionPage';
import { MacLayout } from '@components/UI/MacLayout';

const notion = new NotionAPI();
const rootNotionPageId = '';

export const getStaticProps = async (context: any) => {
  const pageId = (context.params.pageId as string) || rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  return {
    paths: [] as any[],
    fallback: true,
  };
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <MacLayout>
      <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />
    </MacLayout>
  );
}
