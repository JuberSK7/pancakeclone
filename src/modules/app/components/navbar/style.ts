import styled from "styled-components";
import { BsGlobe } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

export const MainContainer = styled.div`
  background-color: rgb(255, 255, 255);
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(231, 227, 235);
  font-family: 'Kanit', sans-serif;
  transform: translate3d(0px, 0px, 0px);

`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-left: 10px;
  img {
    width: 200px;
    cursor: pointer;
  }
  @media screen and (max-width: 780px) {
    margin-left: 12px;
    img {
      width: 160px;
      
    }
  }

  }
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;
export const HoverWrap = styled.div`
position: absolute;
list-style: none;
background: white;
color: rgb(122 110 170);
border-radius: 15px;
border:1px solid lightgrey;
top:50px;
display: none;


}`;

export const NavTab = styled.li`
  align-items: center;
  position: relative;
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  &:hover {
    background: rgb(238 234 244);
    border-radius: 8px;
    cursor: pointer;
   ${HoverWrap}{
      display: block;
      z-index: 1;
    }
  }
`;



export const HoverList = styled.li`
  padding: 20px 50px;
  border-radius: 15px;
  &:hover {
    background: rgb(238 234 244);
  }
`;
export const ThreeDot = styled(BsThreeDots)``;

export const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 44%;
  cursor: pointer;
  color: rgb(122, 110, 170);
  font-weight: 600;
  font-size: 16px;
  img {
    width: 24px;
    height: 24px;
    padding: 12px;
  }

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const ButtonDiv = styled.div`


`;

export const GlobIcon = styled(BsGlobe)`
  color: rgb(122, 110, 170);
  font-size: 20px;
  padding: 12px;
 
`;
export const Setting = styled(AiTwotoneSetting)`
  color: rgb(122, 110, 170);
  font-size: 20px;
  padding: 12px;
`;

export const Button = styled.button`
  align-items: center;
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 32px;
  padding: 0px 16px;
  background-color: rgb(31, 199, 212);
  color: white;

  @media screen and (max-width: 780px) {
    font-size: 12px;
    height: 28px;
    padding: 0px 12px;
  }

  @media screen and (max-width: 400px) {
    font-size: 8px;
    padding: 0px 8px;
  }

  @media screen and (max-width: 220px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 780px) {
    display: block;
    color: black;
    position: absolute;
    cursor: pointer;
    font-size: 1.8rem;

    top: 12px;
    right: 14px;
    transform: translate(-100, 60%);
  }
`;