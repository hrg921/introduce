import 'react-notion-x/src/styles.css'

import styled from '@emotion/styled';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x';
import { HOME_NOTION_URL } from '../constants';

const notion = new NotionAPI();

type Props = {
  recordMap: ExtendedRecordMap
}

export default function Home({ recordMap }: Props) {
  return (
    <>
      <HitCounterContainer>
        <img src="https://hitcounter.pythonanywhere.com/nocount/tag.svg" alt="Hits" />
      </HitCounterContainer>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} pageHeader={<></>} />
    </>
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

const HitCounterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 20px;
`
