import Head from 'next/head';
//import Hero from '../components/hero/hero';
import ImagesDisplay from '../containers/imagesDisplay/imagesDisplay';
import { imageSet1, imageSet2 } from '../shared/imageDisplay';
import Subscribe from '../components/subscribe/subscribe';
import GetStarted from '../components/getStarted/getStarted';
import loadable from '@loadable/component';

const Hero = loadable(() => import('../components/hero/hero'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Skupos</title>
      </Head>
      <Hero />
      <ImagesDisplay imagesInfo={imageSet1} showLoadMore={false} />
      <Subscribe
        title="Skupos is sweeping the c-store nation. Send the latest stories to your
          inbox."
        isYellow={true}
      />
      <ImagesDisplay imagesInfo={imageSet2} showLoadMore={true} />
      <Subscribe
        title="Never miss a captivating success story. Send the latest stories to your inbox."
        isYellow={false}
      />
      <GetStarted />
    </>
  );
}
