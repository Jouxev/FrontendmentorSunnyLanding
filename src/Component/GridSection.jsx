import transformDesktop from "../Images/desktop/image-transform.jpg";
import transformMobile from "../Images/mobile/image-transform.jpg";
import standOutDektop from "../Images/desktop/image-stand-out.jpg";
import standOutmobile from "../Images/mobile/image-stand-out.jpg";

import photoGraphyDesktop from "../Images/desktop/image-photography.jpg";
import photoGrapyMobile from "../Images/mobile/image-photography.jpg";

import graphicDesignDesktop from "../Images/desktop/image-graphic-design.jpg";
import graphichDesignMobile from "../Images/mobile/image-graphic-design.jpg";

import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.main`
  width: 100%;
`;
const BrandSection = styled.div`
  height: 60vh;
  width: 100%;
  border: 1px;
  display: flex;
  ${mobile({
    height: "fit-content",
  })}
  ${(props) =>
    props.reverse
      ? mobile({
          flexDirection: "column-reverse",
        })
      : mobile({ flexDirection: "column" })}
`;
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`;
const ContentContainer = styled.div`
  width: 70%;
`;
const Title = styled.h2`
  font-family: "Fraunces", sans-serif;
  font-size: 2rem;
  color: var(--Verydarkdesaturatedblue);
  font-weight: 600;
`;
const Desc = styled.p`
  color: var(--Grayishblue);
  line-height: 25px;
`;
const Link = styled.a`
  font-family: "Fraunces", sans-serif;
  text-transform: uppercase;
  padding: 5px;
  font-size: 16px;
  background-image: ${(props) => props.backColor};
  background-position: 0px 17px;
  background-repeat: no-repeat;
  background-size: 100% 19px;
  border-radius: 10px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    display: "none",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  })}
`;
const ImageMobile = styled.img`
  display: none;
  ${mobile({
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  })}
`;
const ImageText = styled.div`
  flex: 1;
  position: relative;
`;
const InsideContent = styled.div`
  position: absolute;
  z-index: 9 !important;
  bottom: -60px;
  text-align: center;
  width: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  ${mobile({
    width: "90%",
  })}
`;
const InsideTitle = styled.h2`
  font-family: "Fraunces", sans-serif;
  font-weight: 600;
  color: var(--Darkdesaturatedcyan);
`;
const InsideDesc = styled.p`
  color: var(--Darkdesaturatedcyan);
`;
export const GridSection = () => {
  return (
    <Container>
      <BrandSection reverse>
        <TextContainer>
          <ContentContainer>
            <Title> Transform your brand </Title>
            <Desc>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you
            </Desc>
            <Link backColor="linear-gradient(90deg,rgba(250, 212, 0, 0.4),rgba(250, 212, 0, 0.4))">
              Learn more
            </Link>
          </ContentContainer>
        </TextContainer>
        <ImageContainer>
          <Image src={transformDesktop} alt="image" />
          <ImageMobile src={transformMobile} mobile alt="image" />
        </ImageContainer>
      </BrandSection>
      <BrandSection>
        <ImageContainer>
          <Image src={standOutDektop} alt="image" />
          <ImageMobile src={standOutmobile} mobile alt="image" />
        </ImageContainer>
        <TextContainer>
          <ContentContainer>
            <Title> Stand out to the right audience </Title>
            <Desc>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </Desc>
            <Link backColor="linear-gradient(90deg,rgba(37, 86, 75, 0.4),rgba(37, 86, 75, 0.4))">
              Learn more
            </Link>
          </ContentContainer>
        </TextContainer>
      </BrandSection>
      <BrandSection>
        <ImageText>
          <Image src={graphicDesignDesktop} alt="" />
          <ImageMobile src={graphichDesignMobile} alt="" />
          <InsideContent>
            <InsideTitle>Graphic Design</InsideTitle>
            <InsideDesc>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </InsideDesc>
          </InsideContent>
        </ImageText>
        <ImageText>
          <Image src={photoGraphyDesktop} alt="" />
          <ImageMobile src={photoGrapyMobile} alt="" />
          <InsideContent>
            <InsideTitle>Photography</InsideTitle>
            <InsideDesc>
              Photography Increase your credibility by getting the most
              stunning, high-quality photos that improve your business imag.
            </InsideDesc>
          </InsideContent>
        </ImageText>
      </BrandSection>
    </Container>
  );
};
