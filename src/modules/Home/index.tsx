import GetInTouch from './components/GetInTouch';
import HomeHeader from './components/HomeHeader';
import Introduction from './components/Introduction';
import LatestProject from './components/LatestProject';
import Technologies from './components/Technologies';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Introduction />
      <LatestProject />
      <Technologies />
      <GetInTouch />
    </>
  );
}
