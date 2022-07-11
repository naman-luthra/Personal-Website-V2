import NavBar from './components/NavBar';
import SideLineLinks from './components/SideLineLinks';
import AboutSection from './components/AboutSection';
import MySkills from './components/MySkills';
import Leetcode from './components/Leetcode';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Footer from './components/Footer';
import { useRef } from 'react';
function App() {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const handleClick = (ref) => {
    console.log(ref.current);
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className="App relative pt-20 pl-16">
      <NavBar about={about} skills={skills} projects={projects} handleClick={handleClick} />
      <img src="./icons/peakingRecangle.svg" className="w-2/3 absolute right-0 top-0 -z-40" alt="" />
      <SideLineLinks />
      <AboutSection setRef={about}/>
      <MySkills setRef={skills}/>
      <Leetcode />
      <Projects setRef={projects}/>
      <OtherProjects />
      <Footer />
    </div>
  );
}

export default App;
