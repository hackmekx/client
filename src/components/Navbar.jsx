import React from "react";
import { Search } from "@mui/icons-material";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 60px;
  ${mobile({
    height: "50px"
  })};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
  })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none"
  })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent:"center",
    flex:"2"
  })};
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Logo = styled.h1`
  font-size: 40px;
  color: whitesmoke;
  font-family: Apple Chancery, cursive;
  background-color: teal;
  ${mobile({
    fontSize: "40px"
  })};
`;

const InputSearch = styled.input`
  border: none;
  ${mobile({
    width: "50px"
  })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft:"10px"
  })}; 
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>gramya.shilp</Logo>
        </Center>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
