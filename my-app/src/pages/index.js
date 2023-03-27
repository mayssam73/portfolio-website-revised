import NavBar from './NavBar';
import SideBar from './SideBar';
import HomeMainText from './HomeMainText';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row">
        <SideBar />
        <HomeMainText />
      </div>
    </>
  )
}
