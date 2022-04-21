import styled from "styled-components";
import cone from "../Images/desktop/image-gallery-cone.jpg";
import coneMobile from "../Images/mobile/image-gallery-cone.jpg";

import milkbottles from "../Images/desktop/image-gallery-milkbottles.jpg";
import milkbottlesMobile from "../Images/mobile/image-gallery-milkbottles.jpg";

import orange from "../Images/desktop/image-gallery-orange.jpg";
import orangeMobile from "../Images/mobile/image-gallery-orange.jpg";

import sugarcube from "../Images/desktop/image-gallery-sugarcubes.jpg";
import sugarubeMobile from "../Images/mobile/image-gallery-sugar-cubes.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  height: fit-content;
  width: 100vw;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;
const Image = styled.img`
  width: 50%;
  ${mobile({
    display: "none",
  })}
`;
const ImageMobile = styled.img`
  display: none;
  ${mobile({
    display: "block",
    width: "50%",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
`;

export const Gallery = () => {
  return (
    <Container>
      <Left>
        <Image src={milkbottles} alt="" />
        <ImageMobile src={milkbottlesMobile} alt="" />

        <Image src={orange} alt="" />
        <ImageMobile src={orangeMobile} alt="" />
      </Left>
      <Right>
        <Image src={cone} alt="" />
        <ImageMobile src={coneMobile} alt="" />
        <Image src={sugarcube} alt="" />
        <ImageMobile src={sugarubeMobile} alt="" />
      </Right>
    </Container>
  );
};
