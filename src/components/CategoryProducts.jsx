import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryWiseProducts from "./CategoryWiseProducts"
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CategoryProducts = (props) => {
  const category = props.category;
  console.log(category);
  const [data, setData] = useState([]);
  const getProduct = async () => {
    axios
      .get("http://13.232.204.108:5000/api/getProductCategorywise", {
        params: {
            title: category
        }
      })
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
      {data.map((item) => (
        <CategoryWiseProducts item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default CategoryProducts;
