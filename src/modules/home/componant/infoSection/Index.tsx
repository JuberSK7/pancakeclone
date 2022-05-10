import React from "react";
import {
  InfoContainer,
  Wrapper,
  LeftContainer,
  RightContainer,
  DataWrapper,
  Button,
  FiDiv,
  SeDiv,
  TiDiv,
  FoDiv,
} from "./style";

interface Props {
  heading: string;
  paragraphOne: string;
  buttonLabel: string;
  reverse: boolean;
  image: any;
}

export const Info = (props: Props) => {
  const { heading, paragraphOne, buttonLabel, reverse, image } = props;
  return (
    <div>
      <InfoContainer>
        <Wrapper>
          <LeftContainer reverse={reverse}>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>

            <Button>{buttonLabel}</Button>
          </LeftContainer>
          <RightContainer reverse={reverse}>
            <img src={image} />
            
          </RightContainer>
        </Wrapper>

        <DataWrapper>
          <FiDiv>
            <p>Total supply</p>
            <h3>290,853,574</h3>
          </FiDiv>
          <SeDiv>
            <p>Burned to date</p>
            <h3>440,138,078</h3>
          </SeDiv>
          <TiDiv>
            <p>Market cap</p>
            <h3>$2.4 billion</h3>
          </TiDiv>
          <FoDiv>
            <p>Current emissions</p>
            <h3>14.25/block</h3>
          </FoDiv>
        </DataWrapper>
      </InfoContainer>
    </div>
  );
};
