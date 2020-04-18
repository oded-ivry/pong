import Ball from './Ball';
import Player from './Player';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

const ISPC = false;
const ISUSER = true;

class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
        

        }
        //singleton
        if(Game.instance) {
            return Game.instance;
        }
        Game.instance = this;
        
        //field
        this.canvas = document.getElementById("canvas");
        this.ctxt = this.canvas.getContext('2d');
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = window.innerHeight - 20;
        this.halfLinePos = this.canvas.width / 2;
        
        window.addEventListener('resize', () => {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = window.innerHeight - 20;
            }
        );
    }
    
    start() {
        this.ball = new Ball();
        this.pc = new Player(ISPC);
        this.user = new Player(ISUSER);
        window.requestAnimationFrame(this.drawGame.bind(this));
    }
    
    checkTouchRightPlayer(){
        let userX = this.canvas.width - this.user.playerWidth;
        let touchX = (this.ball.x + this.ball.raduis > userX);
        let inYTop = (this.ball.y > this.user.y);
        let inYBottom = (this.ball.y < this.user.y + this.user.playerSize);
        
        if (touchX && inYBottom && inYTop){
            return true;
        }

        return false;
    }

    checkTouchLeftlayer(){
        let pcX = this.user.playerWidth;
        let touchX = (this.ball.x - this.ball.raduis < pcX);
        let inYTop = (this.ball.y > this.pc.y);
        let inYBottom = (this.ball.y < this.pc.y + this.pc.playerSize);

        if (touchX && inYBottom && inYTop){
            return true;
        }

        return false;
    }

    checkEndGame(){
        //check left & right boundries ( win /lose )
        let rightBorder = this.canvas.width - this.ball.raduis;
        let leftBorder = this.ball.raduis;
        if (this.ball.x > rightBorder){
            return 'right';
        }
        if(this.ball.x < leftBorder){
            return 'left';
        }
    }
    
    drawGame(){
        //draw field
        this.ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctxt.fillStyle = 'black';
        this.ctxt.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctxt.fillStyle = 'white';
        this.ctxt.fillRect(this.halfLinePos, 0, 7, this.canvas.height);
        
        //check if ball hit right player
        if (this.checkTouchRightPlayer()){
            this.ball.speed += 0.3;
            this.ball.xDirection = -this.ball.xDirection;
        }
        
        //check if ball hit left player
        if (this.checkTouchLeftlayer()){
            this.ball.speed += 0.3;
            this.ball.xDirection = -this.ball.xDirection;
        }
        
        this.ball.drawBall();
        this.pc.drawPlayer();
        this.user.drawPlayer();
        
        if (this.checkEndGame() === 'right'){
            console.log('right lost');
            window.cancelAnimationFrame(this.drawGame.bind(this));
            ReactDOM.render(
                <App />,
              document.getElementById('root')
            );
        }else if (this.checkEndGame() === 'left'){
            console.log('left lost');
            window.cancelAnimationFrame(this.drawGame.bind(this));
            window.location.reload();
        }
        window.requestAnimationFrame(this.drawGame.bind(this));
    }
}

export default Game;
