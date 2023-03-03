import styled from "styled-components";
import React from "react";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
  padding: 10px;
  ${mobile({ 
    marginTop: "20px",
  })};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "30vh",
  })};
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;


const CategoryItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => navigate("/products", {
          state: {
            category: item.title
          }
        })}>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
