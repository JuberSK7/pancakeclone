import React from "react";
import { Button } from "../heroSection/style";
import {
  BottomContainer,
  Wrapper,
  Heading,
  Paragrap,
  Paragrap2,
  Deadline,
} from "./style";

interface Props {}

export const Bottom = (props: Props) => {
  return (
    <div>
      <BottomContainer>
        <Wrapper>
          <Heading>
            <h1>Start in seconds.</h1>
          </Heading>
          <Paragrap>
            <p>Connect your crypto wallet to start using the app in seconds.</p>
          </Paragrap>
          <Paragrap2>
            <p>No registration needed.</p>
          </Paragrap2>
          <Deadline>Learn how to start</Deadline>
          <Button>Connect Wallet</Button>
        </Wrapper>
      </BottomContainer>
    </div>
  );
};