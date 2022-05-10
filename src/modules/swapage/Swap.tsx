import React from "react";
import {
  Container,
  Wrapper,
  Form,
  Label,
  Input,
  ArrowButton,
  GraphContainer,
  SwapLine,
  InputTag,
  BottomLeble,
  Graph,
  SettingIcon,
  Clockdown,
  Clockwise,
  DownArr,
  ArrowCircle1,
  CopyIcon,
} from "./style";
import { Button } from "./style";
interface Props {}
const Swap = (props: Props) => {
  return (
    <div>
      <Container>
        <Wrapper>
          <SwapLine>
            <Graph />
            <h3>Swap</h3>
            <SettingIcon />
            <Clockdown />
            <Clockwise />
          </SwapLine>
          <GraphContainer>
            <Form>
              <Label>
                BNB
                <DownArr />
              </Label>
              <InputTag>
                <Input type="number" name="bnb" placeholder="0.0" />
              </InputTag>
              <ArrowButton>
                <ArrowCircle1 />
              </ArrowButton>
              <Label>
                CAKE
                <DownArr />
                <CopyIcon />
              </Label>
              <Input type="number" name="cake" placeholder="0.0" />
              <BottomLeble>
                <p>Slippage Tolerance</p>
                <span>0.5%</span>
              </BottomLeble>
            </Form>
          </GraphContainer>
          <Button>Swapping</Button>
        </Wrapper>
      </Container>
    </div>
  );
};
export default Swap;