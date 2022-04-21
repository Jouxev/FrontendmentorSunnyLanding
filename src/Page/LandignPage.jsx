import styled from "styled-components";
import { Clients } from "../Component/Clients";
import { Footer } from "../Component/Footer";
import { Gallery } from "../Component/Gallery";
import { GridSection } from "../Component/GridSection";
import { Navbar } from "../Component/Navbar";

const Container = styled.div``;
export const LandignPage = () => {
  return (
    <Container>
      <Navbar />
      <GridSection />
      <Clients />
      <Gallery />
      <Footer />
    </Container>
  );
};
