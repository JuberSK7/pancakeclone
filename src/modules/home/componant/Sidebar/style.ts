import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'


interface ClickProps {
    isOpen: boolean;
  }

export const SideBarContainer = styled.aside<ClickProps>`
display: grid;
align-items: center;
height: 100%;
width: 100%;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${( { isOpen } ) => (isOpen ? '100%' : '0')};
top: ${( { isOpen } ) => (isOpen ? '0' : '-100%')};
font-family: 'Kanit', sans-serif;
background-color: #DFEFFF;
position: fixed;
z-index: 999;


@media screen and (min-width: 968px) {
  display: none;
}


`
export const CloseIcon = styled(FaTimes)`
color: black;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
outline: none;
cursor: pointer;`

export const SidebarWrapper = styled.div`

  `
export const SideBarMenu = styled.ul`
display: grid;
text-align: center;
grid-template-columns: .9fr;
@media screen and (max-width: 400px) {
    grid-template-rows: repeat(6, 60px);
}
`
export const SideBarLink = styled.div`
font-size: 20px;
font-weight: 600;
color: #7645D9;
padding: 1rem;
cursor: pointer;
text-decoration: none;
line-style: none;
transition: 0.2s ease-in-out;



`
export const SideBarBtnWrap = styled.div`
display: flex;
justify-content: center;
margin: 2rem;`

export const SideBarButton = styled.button`
border-readius: 50px;
background-color: rgb(31, 199, 212);
border: 0px;
border-radius: 16px;
box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
padding: 12px 56px;
white-space: nowrap;
color: #fff;
font-size: 16px;
font-weight: 600;
outline: none;
cursor: pointer;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
   color: #010606;
   background: #fff;

}`
