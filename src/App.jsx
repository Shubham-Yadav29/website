import { useState } from "react";
import Hero from "./components/Hero";
import LatestWorks from "./components/LatestWorks";
import Approach from "./components/Approach";
import bulb from './images/bulb.png';
import plat from './images/plat.png';
import icon from './images/icon.png';
import robert from './images/robert.png';
import robert2 from './images/robert2.png';
import free from './images/free.png';
import group from './images/group.png';
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Different from "./components/Different";
import Urgent from "./components/Urgent";
import Footer from "./components/Footer";
import Connect from "./components/Connect";
import me from './images/me.png';
import project1 from './images/project1.png';
export default function Page() {

  return (
    <div>
      <Hero bulb={bulb}/>
      <LatestWorks plat={plat} project1={project1}/>
      <Different icon={icon} robert={robert} robert2={robert2} />
      <Approach/>
      <Services/>
      <Testimonials/>
      <Urgent free={free} />
      <Connect group={group} me={me}/>
      <Footer/>
    </div>
  );
}
