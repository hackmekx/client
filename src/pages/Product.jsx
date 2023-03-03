import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucements from "../components/Annoucements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })};
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    AlignItems: "center",
  })};
`;

const Title = styled.h1`
  font-weight: 200;
  ${mobile({
    fontSize: "34px",
    fontWeight: "500",
    textAlign: "center",
  })};
`;
const Desc = styled.p`
  font-size: 19px;
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 40px;
`;

const Button = styled.button`
  display: flex;
  flex: 1;
  margin-top: 15px;
  padding: 10px;
  width: 25%;
  justify-content: space-around;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.1);
  }
  ${mobile({
    padding: "10px",
    marginTop: "25px",
    width: "50%",
    height: "10%",
    fontSize: "20px",
  })};
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Annoucements />
      <Wrapper>
        <ImageContainer>
          <Image
            src={
              "https://cdn.shopify.com/s/files/1/0396/7870/5815/products/1_521701e9-a379-4113-b4a1-efa84d1c0c18.jpg?v=1595918263"
            }
          />
        </ImageContainer>
        <InfoContainer>
          <Title>Brass Cutlery</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quos
            maiores dolorem doloremque et in quam consequatur blanditiis ratione
            quia nihil, ipsa sequi a labore, molestiae at ducimus dolore saepe.
          </Desc>
          <Price>₹20</Price>
          <Button>Enquiry</Button>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
