import React from 'react';
import Game from './Game';
import ReactDOM from 'react-dom';

export default () => {
    const element = <canvas  id="canvas"/>;
ReactDOM.render(
    element,
  document.getElementById('root')
);

    setTimeout(() => new Game().start(), 1500);

}