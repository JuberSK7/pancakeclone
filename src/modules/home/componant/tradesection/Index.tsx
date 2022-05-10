import React from "react";
import { Button } from "../heroSection/style";
import { TradeContainer, Wrapper, ColumnLeft, ColumnRight } from "./style";
import Trad from "../../../../assets/image/about3.webp";

interface Props {}

export const Trade = (props: Props) => {
  return (
    <div>
      <TradeContainer>
        <Wrapper>
          <ColumnLeft>
            <h2><span>Trade</span> anything. No registration, no hassle. </h2>
            <h2></h2>
            <p>
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </p>
            <Button>Trade Now</Button>
          </ColumnLeft>
          <ColumnRight>
            <img src={Trad} />
          </ColumnRight>
        </Wrapper>
      </TradeContainer>
    </div>
  );
};
