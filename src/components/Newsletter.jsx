import React, {useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import {mobile} from "../responsive";
import axios from 'axios';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({
        fontSize:"35px"
    })};
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({
        textAlign: "center",
        fontSize:"24px"
    })};
    
`

const InputContainer = styled.div`
    width: 30%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({
        justifyContent:"center"
    })};
`

const Input = styled.input`
    text-align: center;
    border: none;
    flex: 8;
`

const Button = styled.button`
    flex: 2;
    border: none;
    background-color: teal;
    color: white;
`


const Newsletter = () => {

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleClick = async () => {
        try {
            await axios.post("http://localhost:5000/api/newsletter", {
                email: email,
            }).then((res) => {
                alert("successfull");
                return res.status(200).json("news letter uploaded successfully");
            });
        }catch(err) {
            console.log(err);
        }
    }

  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get Timely Updates For Your Favourite Products</Desc>
        <InputContainer>
            <Input placeholder='Your email' onChange={handleChange}/>
            <Button onClick={handleClick}>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter