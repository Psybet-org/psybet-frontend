import Layout from "../src/components/layout";

import HomeHeader from '../src/components/pages/home/header';
import HomeRoadmap from "../src/components/pages/home/roadmap";
import HomeGames from "../src/components/pages/home/games";
import HomeParty from "../src/components/pages/home/party";
import Head from 'next/head';
import { HOME } from "../src/constants/strings";

export default function Home() {
  return (
    <>
    <Head>
      <title>
        {HOME.WEB_TITLE}
      </title>
    </Head>
    <Layout>
        <div className="flex flex-col">
          <HomeHeader/>
          <HomeRoadmap/>
          <HomeGames/>
          <HomeParty/>
        </div> 
    </Layout>
    </>
  );
}
