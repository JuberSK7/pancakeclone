import styled from "styled-components";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BsArrowClockwise } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { GrFormDown } from "react-icons/gr";
import { MdContentCopy } from "react-icons/md";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E5F2FE;
  font-family: 'Kanit', sans-serif;
  height: 100vh;
`;
export const Wrapper = styled.div`
  padding: 2.4rem;
  border-radius: 24px;
  border: 1px solid black;
  background-color: #fff;
`;
export const SwapDiv = styled.div``;
export const SwapLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //padding: 24px;
  border-bottom: 1px solid rgb(231, 227, 235);
  h3 {
    margin-right: 0px 18px 0px 0px;
    font-size: 20px;
  }
`;
export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Form = styled.form`
  display: grid;
  grid-auto-rows: auto;
  //padding: 2rem;
`;
export const Label = styled.label`
  color: rgb(40, 13, 95);
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
  //padding-right: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const InputTag = styled.div``;
export const Input = styled.input`
  border: none;
  padding: 12px 12px 12px 16px;
  border-radius: 16px;
  background-color: rgb(238, 234, 244);
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
`;
export const ArrowButton = styled.div`
  display: flex;
  margin: 1rem;
  box-shadow: rgb(0 0 0 / 10%) 0px -2px 0px inset;
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  border-radius: 16px;
  cursor: pointer;
  justify-content: center;
  font-size: 22px;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  color: rgb(122, 110, 170);
  box-shadow: none;
`;
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  margin-top: 24px;
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  padding: 0px 44px;
  background-color: rgb(31, 199, 212);
  color: white;
  width: 100%;
`;
export const BottomLeble = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 12px;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    padding-left: 2.4rem;
    color: #1FC7D4;
  }
`;
export const ArrowCircle1 = styled(FaArrowCircleDown)`
  fill: rgb(122, 110, 170);
`;
export const SettingIcon = styled(IoSettingsSharp)`
  font-size: 1.4rem;
  fill: rgb(122, 110, 170);
`;
export const Clockwise = styled(BsArrowClockwise)`
  font-size: 1.4rem;
  fill: rgb(122, 110, 170);
`;
export const Clockdown = styled(BsArrowCounterclockwise)`
  font-size: 1.4rem;
  fill: rgb(122, 110, 170);
`;
export const Graph = styled(VscGraph)`
  font-size: 1.4rem;
  fill: rgb(122, 110, 170);
`;
export const DownArr = styled(GrFormDown)`
  fill: rgb(122, 110, 170);
`;
export const CopyIcon = styled(MdContentCopy)`
  fill: rgb(122, 110, 170);
`;