import React from "react";
import { LandingTop, LandingMiddle, LandingBottom} from "./sections";

const Home = (props) => {

const Navbar=props.navbar

return(
    <>
      <LandingTop navbar={Navbar}/> 
      <LandingMiddle />
      <LandingBottom />
    </>)

};

export default Home;
