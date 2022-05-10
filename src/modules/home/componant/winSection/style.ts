import styled from 'styled-components';


export const CartContainer = styled.div`
background: linear-gradient(to top, rgb(255, 255, 255) 44%, rgb(215, 202, 236) 100%);
font-family: 'Kanit', sans-serif;
display: flex;
justify-content: center;
align-items: center;
height: 100%;`


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background: rgba(255, 255, 255, 0.6);
padding: 2rem;
margin: 2rem;
border: 1px solid rgb(231, 227, 235);
box-sizing: border-box;
backdrop-filter: blur(12px);
border-radius: 72px;

@media screen and (max-width: 780px) {
  
}
@media screen and (max-width: 400px) {
 
 

}

`

    

export const SubContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    font-size: 40px;
    font-weight: 800;
    color: #280D5F;
    margin-bottom: 24px;
    
    @media screen and (max-width: 780px) {
      font-size: 28px;
   }
   @media screen and (max-width: 400px) {
    font-size: 18px;
   
 }
    span{
        color: #7645D9;
    }
}

p{
    color: rgb(122, 110, 170);
    font-weight: 400;
    margin-bottom: 10px;
    font-size: 16px;
}

`

export const CartComponent = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 28px;
align-items: center;


@media screen and (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Cart1 = styled.div`
display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgb(255, 178, 55);
  transform: rotateZ(-4deg);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  
@media screen and (max-width: 780px) {
  
    transform: rotateZ(0deg);
  }
  
  h2{

    font-weight: 800; 
}

p{
   
    font-weight: bold;
}`


  export const Cart2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #7645D9;
  transform: rotateZ(4deg);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 780px) {
  
    transform: rotateZ(0deg);
  }
  
  h2{
      color: rgb(255, 178, 55);
      font-weight: 800; 
  }
  
  p{
      color: #fff;
      font-weight: bold;
  }`
  