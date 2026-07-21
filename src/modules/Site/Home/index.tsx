import { getVisibleProjects } from '@/lib/firebase/repositories/projects';
import GetInTouch from './components/GetInTouch';
import HomeHeader from './components/HomeHeader';
import Introduction from './components/Introduction';
import LatestProject from './components/LatestProject';
import Technologies from './components/Technologies';

export default async function Home() {
  const projects = await getVisibleProjects();

  return (
    <>
      <HomeHeader />
      <Introduction />
      <LatestProject projects={projects} />
      <Technologies />
      <GetInTouch />
    </>
  );
}
