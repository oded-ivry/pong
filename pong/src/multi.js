import React from 'react';
import { Link} from "react-router-dom";
import styled from 'styled-components';
import startGame from './game/index.js';

function Multi() {

    return (
        <Page>
            <Title>Multi Player</Title>
            <Form action='/action_page.php' target='_blank'>
                <Label>1st player's name:<FormItemInput type='text' id='fpName'/></Label>
                <Label>2nd player's name:<FormItemInput type='text' id='spName'/></Label>
                <Label>1st player's speed:<FormItemInput type='number' min="1" max="10" id='fpSpeed'/></Label>
                <Label>2nd player's speed:<FormItemInput type='number' min="1" max="10" id='spSpeed'/></Label>
            </Form>
            <PlyButton onClick={() => startGame()}>Play!</PlyButton>
            <StyledLink to="/play">Back</StyledLink>
        </Page>
    );
}
export default Multi;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const Title = styled.h1`
  font-size: calc(5px + 2vmin);
`
const Form = styled.form`
  display: flex;
  // border: 2px solid pink;
  flex-direction: column;
  justify-content: center;
  // text-align: center;
  align-items: stretch;
  padding:50px;
  font-size: calc(5px + 2vmin);
  direction: ltr;
`;
const StyledLink = styled(Link)`
  color: mintcream;
  text-decoration: none;
`;

const Label =styled.label`
padding: 20px;
`
const FormItemInput = styled.input`
  border: none;
  padding: 3px;
  color: white;
  background-color: #282c34;
  font-size: calc(5px + 2vmin);
  font-family: 'Press Start 2P', cursive;
  border-bottom: solid 3px white;
`;

const PlyButton = styled.button`
  color: mintcream;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding:50px;
  font-size: calc(10px + 2vmin);
  background-color: #282c34;
  font-family: 'Press Start 2P', cursive;
  border: none;
  &:hover {
    font-size: calc(20px + 2vmin);;
  }
`;