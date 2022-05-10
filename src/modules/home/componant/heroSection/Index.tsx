import React from "react";
import Logo from "../../../../assets/image/hero.png";
import clock from "../../../../assets/image/clock.png";
import boximg from "../../../../assets/image/boximg.jpg";
import {
  InfoMain,
  Container,
  ColumnLeft,
  ColumnRight,
  Button,
  Wrapper,
  Box,
  BoxImg,
  ClockDiv
} from "./style";
interface Props {}

export const Hero = (props: Props) => {
  return (
    <div>
      <InfoMain>
        <Wrapper>
          <Box>
            <h2>Win $1213 In Lottary</h2>

            <ClockDiv>
              {" "}
              <img src={clock} alt="clock" />{" "}
              </ClockDiv>
            <Button>Play Now</Button>
          </Box>
          <BoxImg>
            <img src={boximg} alt="boximg" />
          </BoxImg>
        </Wrapper>

        <Container>
          <ColumnLeft>
            <h1>The moon is made of pancakes.</h1>
            <p>
              Trade, earn, and win crypto on the most popular decentralized
              platform in the galaxy.
            </p>

            <Button>Connect Wallet</Button>
          </ColumnLeft>
          <ColumnRight>
            <img src={Logo} alt="home" />
          </ColumnRight>
        </Container>
      </InfoMain>
    </div>
  );
};
