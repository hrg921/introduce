import 'react-notion-x/src/styles.css'

import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x';
import { HOME_NOTION_URL } from '../constants';
import { GetServerSidePropsContext } from 'next';

const notion = new NotionAPI();

type Props = {
  recordMap: ExtendedRecordMap
}

export default function Home({ recordMap }: Props) {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  )
}

export const getServerSideProps = async () => {
  const recordMap = await notion.getPage(HOME_NOTION_URL);

  return {
    props: {
      recordMap
    }
  }
}
