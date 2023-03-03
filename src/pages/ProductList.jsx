import React from 'react'
import styled from "styled-components"
import Navbar from "../components/Navbar";
import CategoryProducts from "../components/CategoryProducts";
import Footer from '../components/Footer';
import Newsletter from "../components/Newsletter";
import { useLocation } from 'react-router-dom';

const Container = styled.div``
const Title = styled.div`
    text-align: left;
    font-family: sans-serif;
    text-transform: capitalize;
    color: gray;
    font-size: 40px;
    margin: 20px;
`

const ProductList = () => {
    const location = useLocation();
    const cat = location.state.category; 
  return (
    <Container>
        <Navbar />
        <Title>{cat}</Title>
        <CategoryProducts category={cat}/>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList