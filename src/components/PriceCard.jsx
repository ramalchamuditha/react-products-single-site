import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-right: 50px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    background-color: white;
    margin-right: 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;    
    @media only screen and (max-width: 480px){
        margin-right: 0;
        margin-bottom: 10px;
        padding: 10px;
    }
`;
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Price = styled.span`
    font-size: 50px;
    font-weight: bold;
    @media only screen and (max-width: 480px){
        font-size: 30px;
    }
`;
const Type = styled.button`
    color: crimson;
    border: 1.5px solid crimson;
    background-color: white;
    padding: 10px;
    border-radius: 20px;
    margin: 10px 0;
    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const List = styled.ul`
    list-style: none;
`;
const ListItem = styled.li`
    margin: 30px 0;
    font-size: 20px;
    @media only screen and (max-width: 480px){
        margin: 10px;
        font-size: 12px;
    }
`;
const Button = styled.button`
    color: white;
    font-weight: bold;
    font-size: 16px;
    background-color: darkblue;
    border: none;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    @media only screen and (max-width: 480px){
        font-size: 12px;
        padding: 5px;
    }
`;

const PriceCard = ({price,type}) => {
  return (
    <Container>
        <PriceContainer>
            $<Price>{price}</Price>/month
        </PriceContainer>
        <Type>{type} Plan</Type>
            <List>
                <ListItem>200 Hand-Crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Website</ListItem>
                <ListItem>Premium Plugins</ListItem>{""}
            </List>
        <Button>Join Now</Button>        
    </Container>
  )
}

export default PriceCard