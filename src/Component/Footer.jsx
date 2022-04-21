import styled from "styled-components";

import { ReactComponent as Logo } from "../Images/logo.svg";
import { ReactComponent as Facebook } from "../Images/icon-facebook.svg";
import { ReactComponent as Insta } from "../Images/icon-instagram.svg";
import { ReactComponent as Twitter } from "../Images/icon-twitter.svg";
import { ReactComponent as Pin } from "../Images/icon-pinterest.svg";

const Container = styled.footer`
  background: #90d4c5;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  align-items: center;
  & > svg > path {
    fill: var(--Darkmoderatecyan);
  }
`;
const Links = styled.ul`
  display: flex;
  list-style: none;
  color: var(--Darkmoderatecyan);
  margin: 20px 0px;
  padding: 0;
`;
const Link = styled.li`
  cursor: pointer;
  margin: 0px 20px;
  &:hover {
    color: white;
  }
`;
const SocialContainer = styled.div`
  margin: 50px 0px;
  & > svg {
    margin: 0px 20px;
    cursor: pointer;
    transition: 0.2s ease all;
    &:hover {
      transform: scale(1.5);
      & > path {
        fill: white;
      }
    }
  }
`;

export const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <Logo />
        <Links>
          <Link>About </Link>
          <Link>Services </Link>
          <Link>Projects </Link>
        </Links>
        <SocialContainer>
          <Facebook />
          <Insta />
          <Twitter />
          <Pin />
        </SocialContainer>
      </FooterContainer>
    </Container>
  );
};
