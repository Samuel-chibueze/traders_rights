import React from "react";
import Slideshow from "../components/slideshow";
import Membership from "../components/membership";
import Aim from "../components/aim";
import Aboutcomp from "../components/aboutcomp";
import Ourteam from '../components/ourteam';
import News from '../components/news';


const Home=()=>{
    return(
        <div>
      <Slideshow/> 
      <Aboutcomp/>
      <News/>
      <Aim/>
      <Ourteam/>
      <Membership/>


        </div>
    );
};

export default Home;