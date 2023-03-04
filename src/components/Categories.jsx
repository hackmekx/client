import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import CategoryItem from './CategoryItem'
import {mobile} from "../responsive";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

  ${mobile({
    padding:"0px",
    alignItems:"center",
    width:"100%",
    flexDirection:"column"
  })};
`

const Categories = () => {
  const [data, setData] = useState([]);

  const getCategories = async () => {
    axios
      .get("http://13.232.204.108:5000/api/getCategory")
      .then((res) => {
        const data = res.data.data;
        setData(data);
      });
  }; 

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <Container>
        {data.map(item => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories