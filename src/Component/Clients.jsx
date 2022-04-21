import styled from "styled-components";

import emily from "../Images/image-emily.jpg";
import jennie from "../Images/image-jennie.jpg";
import thomas from "../Images/image-thomas.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 40px 0px;
  flex-direction: column;
`;

const Title = styled.h1`
  color: var(--Grayishblue);
  font-family: "Fraunces", sans-serif;
  text-transform: uppercase;
  align-self: center;
  letter-spacing: 4px;
  ${mobile({
    letterSpacing: "2px",
    fontSize: "20px",
  })}
`;
const ClientsContainer = styled.div`
  display: flex;
  padding: 40px 60px;
  ${mobile({
    flexDirection: "column",
    padding: "20px",
  })}
`;
const Client = styled.div`
  text-align: center;
  width: 90%;
  margin: 0px 20px;
  ${mobile({
    margin: "20px",
  })}
`;
const Avatar = styled.img`
  width: 64px;
  border-radius: 50%;
`;
const Desc = styled.p`
  font-size: 14px;
  margin: 40px 0px;
  color: var(--Darkgrayishblue);
`;
const Author = styled.div`
  margin-top: 40px;
`;
const Name = styled.h3`
  font-family: "Fraunces", sans-serif;
  font-weight: 900;
  margin: 0;
`;
const Role = styled.span`
  font-size: 12px;
  color: var(--Grayishblue);
`;

export const Clients = () => {
  return (
    <Container>
      <Title> Client testimonials </Title>
      <ClientsContainer>
        <Client>
          <Avatar src={emily} alt="" />
          <Desc>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.{" "}
          </Desc>
          <Author>
            <Name>Emily R. </Name>
            <Role> Marketing Director</Role>
          </Author>
        </Client>
        <Client>
          <Avatar src={thomas} alt="" />
          <Desc>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </Desc>
          <Author>
            <Name>Thomas S. </Name>
            <Role> Chief Operating Officer </Role>
          </Author>
        </Client>
        <Client>
          <Avatar src={jennie} alt="" />
          <Desc>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </Desc>
          <Author>
            <Name>Jennie F. </Name>
            <Role> Business Owner</Role>
          </Author>
        </Client>
      </ClientsContainer>
    </Container>
  );
};
