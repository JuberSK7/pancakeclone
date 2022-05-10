import React from "react";
import { GiSpain } from "react-icons/gi";
import about from '../../../../assets/image/about.png'


import {
    AboutContainer,
    AboutLogo,
    AboutWrapper,
    CartWrapper,
    AboutCart,
    AboutIcon1,
    AboutIcon2,
    AboutIcon3
} from './style'

interface Props {}

const About = (props: Props) => {
  return (
    <div>
      <AboutContainer>
        <AboutLogo><img src={about} alt='about'/></AboutLogo>
        <AboutWrapper>
          <h1>Used by millions.</h1>
          <h1>Trusted with billions.</h1>
          <p>
            PancakeSwap has the most users of any decentralized platform, ever.<br></br>
          
            
            And those users are now entrusting the platform with over $6 billion
            in funds.
          </p>
        </AboutWrapper>
        <CartWrapper>
          <AboutCart>
          <AboutIcon1 />
     
            <h2>3.1 million <br></br><span style={{color:"rgb(118, 69, 217)"}}>users</span></h2>
            <p>
             
              in the last 30 days

            </p>
          </AboutCart>

          <AboutCart>
          <AboutIcon2 />
            
            <h2>40 million <br></br><span  style={{color:"rgb(31, 199, 212)"}}>trades</span></h2>
            <p>
             
              made in the last 30 days
            </p>
          </AboutCart>

          <AboutCart>
            <AboutIcon3 />
          
            <h2>$6 billion <br></br><span style={{color:"rgb(237, 75, 158)"}}>staked</span></h2>
            <p>
              
              Total Value Locked
            </p>
          </AboutCart>
        </CartWrapper>
      </AboutContainer>
    </div>
  );
};

export default About