import React from "react";
import About  from "./componant/aboutSection/Index";
import { Bottom } from "./componant/bottomSection/Index";
import { Hero } from "./componant/heroSection/Index";
import { Info } from "./componant/infoSection/Index";
import { InfoDataOne, InfoDataTwo } from "./componant/infoSection/Info";
import { Trade } from "./componant/tradesection/Index";
import { WinCart } from "./componant/winSection/Index";

const Home = () => {
  return(
    <>
    <Hero/>
    <About/>
    <Trade/>
    <Info {...InfoDataOne}/>
    <WinCart/>
    <Info {...InfoDataTwo}/>
    <Bottom/>
    </>
  )

};

export default Home;
