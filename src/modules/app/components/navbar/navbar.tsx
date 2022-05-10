import React from "react";
import { useHistory } from "react-router-dom";
import {
  MainContainer,
  LogoContainer,
  HeaderItem,
  HeaderAction,
  LeftContainer,
  GlobIcon,
  Setting,
  ThreeDot,
  NavTab,
  HoverWrap,
  HoverList,
  MobileIcon,
  ButtonDiv,
  Button

} from "./style";
import { FaBars } from "react-icons/fa";
import Logo from './../../../../assets/image/Logo.png';
import about from '../../../../assets/image/about.png';
 

interface Props {
  mytoggle: any;
}

export const Navbar = (props: Props) => {
 const {mytoggle} = props;
  const history = useHistory();


  console.log(mytoggle)
  return (
    <>
      <MainContainer>
        <LeftContainer>
          <LogoContainer>
            <img src={Logo} alt="panswap" />
          </LogoContainer>
          <MobileIcon onClick={mytoggle} >
          
            <FaBars />
          </MobileIcon>
          <HeaderItem>
            <NavTab onClick={() => history.push('/swap')}>Trade
            <HoverWrap>
              <HoverList>Swap</HoverList>
              <HoverList>Remove</HoverList>
              <HoverList>Liquidity</HoverList>
              <HoverList>Prepactual</HoverList>
              </HoverWrap></NavTab>
            <NavTab>Earn
            <HoverWrap>
              <HoverList>Farms</HoverList>
              <HoverList>Pools</HoverList>
              </HoverWrap>
            </NavTab>
            <NavTab>Win
            <HoverWrap>
              <HoverList>Trending Compitaion</HoverList>
              <HoverList>Predicyion(BETA)</HoverList>
              <HoverList>Lottory</HoverList>
              </HoverWrap>
            </NavTab>
            <NavTab>NFT
            <HoverWrap>
              <HoverList>Overviwe</HoverList>
              <HoverList>Collection</HoverList>
              <HoverList>Activity</HoverList>
              </HoverWrap>
            </NavTab>
            <NavTab><ThreeDot/>
            <HoverWrap>
              <HoverList>Info</HoverList>
              <HoverList>IFO</HoverList>
              <HoverList>Voteing</HoverList>
              <HoverList>LeaderBoard</HoverList>
              </HoverWrap></NavTab>
          </HeaderItem>
        </LeftContainer>

        <HeaderAction>
        <img src={about} alt='token'/>
          <p>$7.673</p>
          <GlobIcon/>
          <Setting />
          <Button>Connect Wallet</Button>
        </HeaderAction>
       
        {/*<ButtonDiv>
          <Button>Connect Wallet</Button>
  </ButtonDiv>*/}
      </MainContainer>
    </>
  );
};

