import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarMenu,
  SidebarWrapper,
  SideBarBtnWrap,
  SideBarButton
} from "./style";

interface Props {
  isOpen: boolean;
  mytoggle: any;
}

export const Sidebar = (props: Props) => {
  const { isOpen, mytoggle } = props;
  return (
    <div>
      <SideBarContainer isOpen={isOpen} onClick={mytoggle}>
        <Icon onClick={mytoggle}>
          <CloseIcon />
        </Icon>

        <SidebarWrapper>
          <SideBarMenu>
            <SideBarLink>Home</SideBarLink>

            <SideBarLink>About</SideBarLink>

            <SideBarLink>Trading</SideBarLink>

            <SideBarLink>Play Now</SideBarLink>

            <SideBarLink>Dashboard</SideBarLink>

            <SideBarLink>Privecy</SideBarLink>

            <SideBarLink>Swap-ing</SideBarLink>

          </SideBarMenu>
          <SideBarBtnWrap>
            <SideBarButton>Connect</SideBarButton>
          </SideBarBtnWrap>
        </SidebarWrapper>
      </SideBarContainer>
    </div>
  );
};
