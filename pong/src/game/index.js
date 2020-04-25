import React from 'react';
import Game from './Game';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


export default () => {
    const element = <Canvas  id="canvas"/>;
ReactDOM.render(
    element,
  document.getElementById('root')
);

    setTimeout(() => new Game().start(), 1500);

}


const Canvas = styled.canvas`
    position: absolute;
    top: 20%;
    left: 20%;
`;