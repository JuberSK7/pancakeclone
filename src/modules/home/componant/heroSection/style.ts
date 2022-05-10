import styled from "styled-components"
//import { imageUrl } from "../../../../shared/utility"



export const InfoMain = styled.section`
background-color: #DFEFFF;
font-family: 'Kanit', sans-serif;
padding: 4rem 2rem;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background: #7645D9;
border-radius: 15px;
padding: 1rem;


@media screen and (max-width: 768px) {
 flex-direction: column;
 
}
@media screen and (max-width: 400px) {

  
 }

`;

export const Box = styled.div`
h2{
  color: #fff;
  font-size: 24px;
  text-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  @media screen and (max-width: 780px) {
    font-size: 18px;
 }
}

  img {
    height: 44px;
    background-repeat: no-repeat;
}

`

export const ClockDiv = styled.div`
width: 100%;

`

export const BoxImg = styled.div`
img{
 height: auto;
 width: 100%;

}`


export const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);


@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  
 
}
`;


export const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
order: 1;

 

  h1 {
    font-size: 54px;
    font-weight: 800;
    color: #7645D9;
    @media screen and (max-width: 400px) {
      font-size: 24px;
    }
  }
  p {
    color: #280D5F;
    font-size: 20px;
  }
`;
export const ColumnRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;

  @media screen and (max-width: 768px) {
   max-height: 40vh;
   
   }

  
  
  img {
      height: 60%;
      -webkit-animation: mover 1s infinite  alternate;
      animation: mover 1s infinite  alternate;
  
  @-webkit-keyframes mover {
      0% { transform: translateY(0); }
      100% { transform: translateY(-10px); }
  }
  @keyframes mover {
      0% { transform: translateY(0); }
      100% { transform: translateY(-10px); }
  }
  
  @media screen and (max-width: 968px) {
    height: 50%;
   
   }
  @media screen and (max-width: 768px) {
   height: 44%;
  
  }

  }

 
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
    height: 48px;
    padding: 0px 24px;
    background-color: rgb(31, 199, 212);
    color: white;
    &:hover{
      background-color: #AED6F1;
    }
    @media screen and (max-width: 400px) {
      font-size: 12px;
      height: 28px;
     }
 
` 