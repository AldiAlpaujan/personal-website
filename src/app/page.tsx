import GetInTouch from '@/components/Home/GetInTouch';
import HomeHeader from '@/components/Home/HomeHeader';
import Introduction from '@/components/Home/Introduction';
import LatestProject from '@/components/Home/LatestProject';
import Technologies from '@/components/Home/Technologies';

export default function Page() {
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
