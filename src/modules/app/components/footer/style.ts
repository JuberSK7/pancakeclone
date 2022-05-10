import {
  FaDocker,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #27262c;
  font-family: 'Kanit', sans-serif;

`;

export const FooterWrap = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 2rem;
padding: 2rem;


@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}

`;

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

`;

export const FooterLinkTitle = styled.div`
margin-bottom: 16px;
color: #9A6AFF;
font-size: 16px;
font-weight: 600;

@media screen and (max-width: 400px) {
 font-size: 14px;
}
`;

export const FooterImage = styled.div`
img{
  width: 180px;
  cursor: pointer;
}
@media screen and (max-width: 400px) {
  img{
    width: 140px;
  }
 }

`

export const FooterLink = styled.div`
  font-size: 16px;
  color: #f4eeff;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #fff;
  padding-left: 12px;
`;

export const SocialIcon = styled.div`
padding: 8px;
@media screen and (max-width: 400px) {
  display: none;
 
 }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Tweeter = styled(FaTwitter)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);

`;
export const Telegram = styled(FaTelegram)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Reddit = styled(FaReddit)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Instagrm = styled(FaInstagram)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Github = styled(FaGithub)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Docker = styled(FaDocker)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Medium = styled(FaMedium)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
