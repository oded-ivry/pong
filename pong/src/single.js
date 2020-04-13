import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import startGame from './game/index.js';

function Single() {
  const uSpeed = document.getElementById("uSpeed");
  const pcSpeed = document.getElementById("pcSpeed");
  return (
        <Page>
            <Title>Single Player</Title>
            <Form action='/action_page.php' target='_blank'>
                <Label>Name:<FormItemInput type='text' id='name'/></Label>
                <Label>User speed:<FormItemInput type='number' min="1" max="10" id='uSpeed'/></Label>
                <Label>PC speed:<FormItemInput type='number' min="1" max="10" id='pcSpeed'/></Label>
            </Form>
            <PlyButton onClick={(props) => startGame()}>Play!</PlyButton>
            <StyledLink to="/play">Back</StyledLink>
        </Page>
    );
}
export default Single;

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
  color: mintcream;
  background-color: #282c34;
  font-size: calc(5px + 2vmin);
  font-family: 'Press Start 2P', cursive;
  border-bottom: solid 3px mintcream;
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