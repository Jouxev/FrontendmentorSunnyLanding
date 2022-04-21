import styled from "styled-components";
import { ReactComponent as Logo } from "../Images/logo.svg";
import { ReactComponent as ArrowDown } from "../Images/icon-arrow-down.svg";
import { ReactComponent as HamburgerMenu } from "../Images/icon-hamburger.svg";
import imageHeaderDesktop from "../Images/desktop/image-header.jpg";
import imageHeaderMobile from "../Images/mobile/image-header.jpg";
import { mobile } from "../responsive";
import { useState } from "react";

const Container = styled.header`
  background: no-repeat url(${imageHeaderDesktop});
  padding: 20px;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: auto;
  ${mobile({
    background: `no-repeat url(${imageHeaderMobile})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  })}
`;
const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  & > svg {
    cursor: pointer;
  }
`;
const LinksContainer = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  color: white;
  font-size: 18px;
  ${mobile({
    flexDirection: "column",
    color: "var(--Verydarkgrayishblue)",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    margin: "0px",
    padding: "10px",
  })}
`;
const Link = styled.li`
  cursor: pointer;
  margin: 0px 20px;

  ${mobile({
    margin: "20px 0px",
  })}
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  color: var(--Verydarkdesaturatedblue);
  border-radius: 40px;
  background: white;
  font-family: "Fraunces", sans-serif;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    color: white;
  }
  ${mobile({
    background: "var(--Yellow)",
  })}
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 20px 0px;
`;
const Title = styled.h1`
  font-family: "Fraunces", sans-serif;
  font-weight: 900;
  font-size: 48px;
  color: white;
  letter-spacing: 3px;
`;
const ArrowContainer = styled.div``;

const HamburgerContainer = styled.div`
  cursor: pointer;
  display: none;
  & > svg {
    &:hover {
      opacity: O.8;
    }
  }
  ${mobile({
    display: "block",
  })}
`;
const MenuListContainer = styled.div`
  position: absolute;
  width: 90%;
  margin-top: 1.3rem;
  background: transparent;
  display: none;
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })}
`;
const MenuArrow = styled.div`
  width: 0;
  height: 0;
  border-width: 0 0 20px 20px;
  border-color: transparent transparent white transparent;
  border-style: solid;
  align-self: flex-end;
`;

export const Navbar = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <Container>
      <NavbarContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <LinksContainer>
          <Links>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Projects</Link>
            <Link>
              <Button> CONTACT </Button>
            </Link>
          </Links>
        </LinksContainer>
        <HamburgerContainer>
          <HamburgerMenu onClick={() => setmenuOpened(!menuOpened)} />
        </HamburgerContainer>
      </NavbarContainer>
      {menuOpened && (
        <MenuListContainer>
          <MenuArrow></MenuArrow>
          <Links>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Projects</Link>
            <Link>
              <Button> CONTACT </Button>
            </Link>
          </Links>
        </MenuListContainer>
      )}
      <TitleContainer>
        <Title> WE ARE CREATIVES </Title>
        <ArrowContainer>
          <ArrowDown />
        </ArrowContainer>
      </TitleContainer>
    </Container>
  );
};
