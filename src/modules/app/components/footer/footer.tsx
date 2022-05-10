import React from "react";

import {
  FooterContainer,
  FooterWrap,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialIcon,
  Tweeter,
  Telegram,
  Instagrm,
  Docker,
  Github,
  Medium,
  Reddit,
  FooterImage
} from "./style";

import Logo from '../../../../assets/image/Logo.png'

interface Props {}

export const Footer = (props: Props) => {
  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkItems>
            <FooterLinkTitle>ABOUT</FooterLinkTitle>
            <FooterLink>Contact</FooterLink>
            <FooterLink>Brand </FooterLink>
            <FooterLink>Blog </FooterLink>
            <FooterLink>Community </FooterLink>
            <FooterLink>CAKE Token </FooterLink>
            <FooterLink>— </FooterLink>
            <FooterLink>Online Store</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>HELP</FooterLinkTitle>
            <FooterLink>Customer Support</FooterLink>
            <FooterLink>Troubleshooting </FooterLink>
            <FooterLink>Guides </FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>DEVELOPERS</FooterLinkTitle>
            <FooterLink>Github </FooterLink>
            <FooterLink>Documentation </FooterLink>
            <FooterLink>Bug Bounty</FooterLink>
            <FooterLink>Audits</FooterLink>
            <FooterLink>Careers</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>
              <FooterImage><img src={Logo}/></FooterImage>
            </FooterLinkTitle>
          </FooterLinkItems>
          </FooterWrap>

        <SocialMedia>
          <SocialMediaWrap>

            <SocialIcon>
              <Tweeter />
            </SocialIcon>

            <SocialIcon>
              <Telegram />
            </SocialIcon>

            <SocialIcon>
              <Reddit />
            </SocialIcon>

            <SocialIcon>
              <Instagrm />
            </SocialIcon>

            <SocialIcon>
              <Github />
            </SocialIcon>

            <SocialIcon>
              <Docker />
            </SocialIcon>

            <SocialIcon>
              <Medium />
            </SocialIcon>

          </SocialMediaWrap>
        </SocialMedia>
        
      </FooterContainer>
    </div>
  );
};
