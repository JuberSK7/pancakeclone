import styled from 'styled-components'

interface RevieseProps {
  reverse: boolean;
}

export const InfoContainer = styled.div`
background-color: #F2F3F4;
font-family: 'Kanit', sans-serif;
padding: 2rem;

`

export const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);

@media screen and (max-width: 780px) {
  grid-template-columns: 1fr;
  `


export const LeftContainer = styled.div<RevieseProps>`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
order: ${({ reverse }) => (reverse ? "1" : "2")};



h1{ 
    color: #280D5F;
    font-size: 40px;
    font-weight: 700;
    align-items: center;
    line-height: 1.1
    
   
    @media screen and (max-width: 780px) {
      font-size: 28px;

   }
   
   @media screen and (max-width: 400px) {
    font-size: 18px;
  
 }
}
p{
    color: #7A6EAA;
    font-size: 16px;
    align-items: center;
}
`


export const RightContainer = styled.div<RevieseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  @media screen and (max-width: 780px) {
  
  }
  
  img {
    width: 400px;
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
@media screen and (max-width: 780px) {
  width: 200px;
}
@media screen and (max-width: 400px) {
  width: 120px;
}
}`

export const DataWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, auto);
align-items: center;
grid-gap: 2rem;


@media screen and (max-width: 780px) {
  
  grid-template-columns: repeat(2, auto);
  
 
}
@media screen and (max-width: 480px) {
  
  grid-template-columns: repeat(1, auto);
  
 
}

h3{
  font-size: 24px;
  color: #280D5F;
  @media screen and (max-width: 780px) {
      font-size: 16px;
    
  }
}
p{
  font-size: 16px;
  color: #7A6EAA;
 
}`


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
    
` 

export const FiDiv = styled.div`


`
export const SeDiv = styled.div`

`

export const TiDiv = styled.div`

`

export const FoDiv = styled.div`

`

