import React, { createElement } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Game from '../src/game/Game';
import { useForm } from "react-hook-form";
import { error_messages } from './Error_messages/Error_Messages';
// import Counter from './game/Counter';



var gameOn = false;

function startGame(){
 gameOn = true;
}

function Pager() {
  const { register, handleSubmit, errors, field_name } = useForm();

  const get_error_msg = (errors, error_messages) => {
    const generate = name => {
      if (errors[name]) {
        switch (errors[name].type) {
          case "required":
            return error_messages[name].required;
          case "minLength":
            return error_messages[name].minLength;
          case "minSpeed":
            return error_messages[name].min;
          default:
            return "";
        }
      }
    };

    if (Array.isArray(field_name)) {
      for (const name of field_name) {
        const msg = generate(name);
        if (msg) return msg;
      }
    } else {
      return generate(field_name);
    }
  }

  const onSubmit = data => {
    console.log(data);
    // startGame();
  };
  
  return (
    <Page>
        <Title>Single Player</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>First Name:<FormItemInput 
                                name="first_name"
                                placeholder="First name"
                                ref={register({ required: true, minLength: 2 })}
                                error_styled={errors.first_name}
                                onChange={handleSubmit()}/>
            </Label>
            <ErrorMsg show={errors.first_name}>
              {get_error_msg(errors, error_messages, "first_name")}
            </ErrorMsg>
            <Label>Last Name:<FormItemInput
                                name="last_name" 
                                placeholder="Last name"
                                ref={register({ required: true, minLength: 2 })}
                                error_styled={errors.first_name}
                                onChange={handleSubmit()}/>
            </Label>
            <ErrorMsg show={errors.last_name}>
              {get_error_msg(errors, error_messages, "last_name")}
            </ErrorMsg>
            <Label>User speed:<FormItemInput 
                                name="minSpeed" 
                                placeholder="Positive numbers only"
                                ref={register({ required: true, min: 1 })}
                                error_styled={errors.minSpeed}
                                onChange={handleSubmit()}/>
            </Label>
            <ErrorMsg show={errors.minSpeed}>
              {get_error_msg(errors, error_messages, "minSpeed")}
            </ErrorMsg>
            <Label>PC speed:<FormItemInput 
                                name="minSpeed" 
                                placeholder="Positive numbers only"
                                ref={register({ required: true, min: 1 })}
                                error_styled={errors.minSpeed}
                                onChange={handleSubmit()}/>
            </Label>
            <ErrorMsg show={errors.minSpeed}>
              {get_error_msg(errors, error_messages, "minSpeed")}
            </ErrorMsg>
        </Form>
        <PlyButton  type="submit"/* onClick={() => startGame()} */>Play!</PlyButton>
         <StyledLink to="/play">Back</StyledLink>
    </Page>
);
}

function  GameArea() {
  setTimeout(() => new Game().start(), 1500);
  return(
    <div>
    <Canvas  id="canvas"/>
    {/* <Counter/>
    <Counter/> */}
    </div>
    );
  
}
  
function Single() {
  if (gameOn){
    return(
      GameArea()
    );
  }else{
    return(
      Pager()
    );
  }
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
const Canvas = styled.canvas`
    position: absolute;
    border:solid deepPink 3px;
    top: 20%;
    left: 15%;
`;
const ErrorMsg  =styled(Label)`
  color: red;
`