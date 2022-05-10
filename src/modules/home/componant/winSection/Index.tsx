import React from 'react'
import { Button } from '../heroSection/style'
import {
    CartContainer,
    Wrapper,
    SubContainer,
    CartComponent, Cart1, Cart2
} from './style'

interface Props {
    
}

export const WinCart = (props: Props) => {
    return (
        <div>
            <CartContainer>
                <Wrapper>
               <SubContainer>
                   <h1> <span>Win</span> millions in prizes</h1>
                   <p>Provably fair, on-chain games. Win big with PancakeSwap.</p>
                   <p> </p>
                </SubContainer>
                 <CartComponent>
                  <Cart1>
                      <p>Prediction</p>
                      <h2>$760 million</h2>
                      <p>in BNB won so far</p>
                      <p>Will BNB price rise or fall? guess<br></br>correctly to win!</p>
                     
                      <Button>Play Now</Button>
                  </Cart1>

                  
                  <Cart2>
                      <p>Lottery</p>
                      <h2>$230,117</h2>
                      <p>in CAKE prizes this round</p>
                      <p>Buy tickets with CAKE, win CAKE<br></br> if your numbers match</p>
                     
                      <Button>Buy Ticket</Button>
                  </Cart2>
                   </CartComponent>
               

                </Wrapper>
            </CartContainer>
        </div>
    )
}
