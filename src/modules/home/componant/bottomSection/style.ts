import styled from 'styled-components'


export const BottomContainer = styled.div`
font-family: 'Kanit', sans-serif;
background-color: #9a6aff;
`

export const Wrapper = styled.div`
z-index: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 4rem;

`

export const Heading = styled.div`

h1{
    font-size: 40px;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 780px) {
        font-size: 32px;
        font-weight: 400;
        
      }
}
`

export const Paragrap = styled.div`
p{
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    align-items: center;
    @media screen and (max-width: 780px) {
        font-size: 12px;
        font-weight: bold;
        
      } 
}

`

export const Paragrap2 = styled.div`
p{
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    align-items: center;
}

`

export const Deadline = styled.div`
color: #6F00FF;
font-weight: bold;
align-items: center;
margin-bottom: 24px;`
