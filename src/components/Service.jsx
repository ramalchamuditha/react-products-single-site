import React, { useState } from 'react'
import styled from 'styled-components'
import How from '../img/how.png';
import MiniCard from './MiniCard';
import Play from '../img/play.png';

const Container = styled.div`
    display: flex;
    height: 100%;
    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Image = styled.img`
    display: ${(props) => props.open && "none" };
    height: 100%;
    margin-left: 100px;
`;

const Video = styled.video`
    display: ${(props) => !props.open && "none" };
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px){
        padding: 20px;
    }
`;
const Title = styled.h1``;

const Desc = styled.p`
    margin-top: 20px;
    font-size: 20px;
    color: #555;
`;

const CardContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;    
`;

const Button = styled.button`
    width: 180px;
    background-color: darkblue;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 30%;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;    
`;

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`

const Service = () => {
    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;
    return (

        <Container>
            <Left>
                <Image open={open} src={How} />
                <Video open={open} autoPlay controls src="https://youtu.be/9U684GbFST4"/>
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>
                        We provide digital experience services to startup and small business to looking for a partner of their
                        digital media, design & development, lead generation and communication requirements. We work with you, 
                        not for you. Although we have a great resources.
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)} ><Icon src={Play} /> How it Works </Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video open={open} autoPlay controls src="https://youtu.be/9U684GbFST4" />
                    <CloseButton onClick={() => setOpen(false)} >Close</CloseButton>
                </Modal>
            )}
        </Container>

    )
}

export default Service