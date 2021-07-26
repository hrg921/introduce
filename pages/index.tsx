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
        <a href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fintroduce-tony.vercel.app&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/>
          </a>
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
