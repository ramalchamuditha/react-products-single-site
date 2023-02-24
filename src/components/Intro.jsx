import React from 'react';
import styled from 'styled-components';
import HomeP from '../img/home.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width:60%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    @media only screen and (max-width: 480px){
        width: 100%;
        height: 100%;
    }
`;

const Right = styled.div`
    width:40%
    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Title = styled.div`
    font-size: 60px;
    width: 60%;
    @media only screen and (max-width: 480px){
        width: 100%;
        font-size: 50px
    }
`;

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 480px){
        width: 100%;
        flex-direction: column;
    }
`;

const Button = styled.button`
    padding: 15px;
    color: white;
    background-color: darkblue;
    border-radius: 10px;
    border: none; 
    cursor: pointer;
    font-weight:bold;
    letter-spacing: 2px;
    @media only screen and (max-width: 480px){
        margin-bottom: 20px;
    }
`;

const Image = styled.img`
    width:100%;
    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;    
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`;

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventures in creative age</Title>
            <Desc>We believe that designing products and 
                services in close partnership with our client is the only way to have
                a real impact on their business.  
            </Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call Us (012) 345-6789</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right>
            <Image src={HomeP}/>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Intro