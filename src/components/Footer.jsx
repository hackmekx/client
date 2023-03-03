import React from 'react'
import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from "../responsive";


const Container = styled.div`
    display: flex;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;


const Left = styled.div`
    flex: 1;
    padding: 30px;
    margin-top: 20px;
    ${mobile({
        display:"none"
    })};
`;

const Logo = styled.h1`
    flex: 1;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    background-color: #${(props) => props.color};
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-in;
    &:hover{
        transform: scale(1.1);
    }
`;

const Title = styled.h3`
    margin: 30px 0px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Desc = styled.p`
    flex: 1;
    margin: 20px 0px;
`;

const Contact = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>gramya.shilp</Logo>
            <Desc>
                There are very huge varities of product available for you and if you need
                anything customize then you can also contact us. For that purpose.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999" onClick={() => window.open("https://www.facebook.com/jpmmsssociety/", "_")}>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E440F5">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <LinkedInIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <YouTubeIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
       
        <Right>
            <Title>Contact</Title>
            <Contact>
            <LocationOnIcon style={{marginRight:"10px"}}/>
                JPM(P)ITI Lane, Kusmhi , Kasya Road, Gorakhpur, Uttar Pradesh, India, 273002
            </Contact>
            <Contact> 
            <LocalPhoneIcon style={{marginRight:"10px"}}/>
            +91-9999227420, +91-7898695840
            </Contact>
            <Contact>
            <EmailIcon style={{marginRight:"10px"}}/>
                gaurav.tuhin@gmail.com, jpmsociety@outlook.com
            </Contact>
        </Right>
    </Container>
  )
}

export default Footer