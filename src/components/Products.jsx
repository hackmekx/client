import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';
import Categories from './Categories';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {

  const [data, setData] = useState([]);
  const getProduct = async () => {
    axios
      .get("https://mysterious-crab-baseball-cap.cyclic.app/api/getProducts")
      .then((res) => {
        const data = res.data.data;
        setData(data);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <Categories />
        {data.map((item) => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products