import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Game from '../src/game/Game';
import Counter from './game/Counter';
import { useState, useCallback } from 'react';

const MULTI = 2;

function Multi() {
  const [gameOn, setGameOn] = useState(false);
  const [game, setGame] = useState(null);

  const [p1Name, setp1Name] = useState("Player 1");
  const [p2Name, setp2Name] = useState("Player 2");
  
  const [p1Count, setP1Count] = useState(0);
  const [p2Count, setP2Count] = useState(0);

  const canvas = useRef(null);
  
  const getPointsFromGame = useCallback((points, player) => {
    if (player === 'Left') {
      setP1Count(points);
    }
    if (player === 'Right') {
      setP2Count(points);
    }
  },[])
  
  const isGameOver = useCallback(player => {
    if (player === 'Left') {
      setGameOn(false);
      console.log('multi left');
    }
    if (player === 'Right') {
      setGameOn(false);
      console.log('multi right');
    }
      console.log('isGameOver invoked');
  },[]);

  useEffect( () => { 
    if(gameOn === true){
      let thisGame = game;
      if (!thisGame){
         thisGame = new Game(canvas.current, getPointsFromGame, isGameOver, MULTI)
      }
      thisGame.start();
      setGame(thisGame);
    }else if (game) {
      game.stop();
      setGameOn(false);
    }
    return () => {
      console.log('umounting');
      if (game) {game.stop()}
    }
      //why do I need getPointsFromGame in this array?
  },[gameOn, getPointsFromGame, isGameOver,game])
  
  const onSubmit = props => {
    setGameOn(true);
  };

  if (gameOn){
    return (
      <GamePage>
        <LeftCounter name={p1Name} count={p1Count}/>
        <RightCounter name={p2Name} count={p2Count}/>
        <Canvas  ref={canvas}/>
      </GamePage>
    );
  }else{
    return (
      <Page>
          <Title>Multi Player</Title>
          <Form>
              <Label>1st player's name:<FormItemInput name="p1Name" type='text'
                                        onChange={event => setp1Name(event.target.value)}/></Label>
              <Label>2nd player's name:<FormItemInput name="p2Name" type='text'
                                        onChange={event => setp2Name(event.target.value)}/></Label>
              <PlyButton onClick={(props) => onSubmit()}>Play!</PlyButton>
          </Form>
          <StyledLink to="/play">Back</StyledLink>
      </Page>
    );
  }
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
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;
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

const Canvas = styled.canvas`
    position: absolute;
    border:solid deepPink 3px;
    top: 20%;
    left: 15%;
`;
const GamePage = styled.div`
  // border:solid deepPink 3px;
  // display: flex;
  flex-direction: row;
  align-content: flex-end;
`;
const LeftCounter =styled(Counter)`

`;
const RightCounter =styled(Counter)`

`;