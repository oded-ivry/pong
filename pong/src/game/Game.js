import Ball from './Ball';
import Player from './Player';

class Game {
    constructor(canvas, getPoints, isGameOver, gameType) {
        //singleton
        if(Game.instance) {
            return Game.instance;
        }
        Game.instance = this;
        this.isRunning = false;
        this.gameType = gameType;

        this.p1Points = 0;
        this.p2Points = 0;
        
        this.getPoints = getPoints;
        this.isGameOver = isGameOver;

        //field
        this.canvas = canvas;
        this.ctxt = this.canvas.getContext('2d');
        this.canvas.width = document.body.clientWidth * 0.7;
        this.canvas.height = window.innerHeight * 0.7;
        this.halfLinePos = this.canvas.width / 2;
        
        window.addEventListener('resize', () => {
            this.canvas.width = document.body.clientWidth*0.7;
            this.canvas.height = (window.innerHeight )*0.7;
            }
        );
    }
    
    start() {
        this.ball = new Ball(this.canvas);
        if (this.gameType === 1) {
            this.user = new Player('P1', this.canvas);
            this.pc = new Player('PC', this.canvas, this.ball);
        }else if (this.gameType === 2) {
            this.user = new Player('P1', this.canvas);
            this.pc = new Player('P2', this.canvas);
        }else if (this.gameType === 3) {
            this.user = new Player('P1', this.canvas);
            this.pc = new Player('P2', this.canvas);
        }
        this.isRunning = true;
        window.requestAnimationFrame(this.drawGame.bind(this));
    }
    
    stop() {
        this.isRunning = false;
    }

    checkTouchRightPlayer(){
        let userX = this.canvas.width - this.user.playerWidth;
        let touchX = (this.ball.x + this.ball.raduis > userX);
        let inYTop = (this.ball.y - this.ball.raduis > this.user.y);
        let inYBottom = (this.ball.y + this.ball.raduis < this.user.y + this.user.playerSize);
        
        if (touchX && inYBottom && inYTop){
            return true;
        }

        return false;
    }

    checkTouchLeftlayer(){
        let pcX = this.user.playerWidth;
        let touchX = (this.ball.x - this.ball.raduis < pcX);
        let inYTop = (this.ball.y - this.ball.raduis > this.pc.y);
        let inYBottom = (this.ball.y + this.ball.raduis< this.pc.y + this.pc.playerSize);

        if (touchX && inYBottom && inYTop){
            return true;
        }

        return false;
    }

    resetMiniGame(){
        this.ball.x = this.canvas.width / 2;
        this.ball.y = this.canvas.height / 2;
        this.ball.xDirection = -1;
        this.ball.yDirection = 1;
        this.ball.speed = 4;
    }

    checkMiniGameEnd(){
        //check left & right boundries ( win /lose )
        let rightBorder = this.canvas.width - this.ball.raduis;
        let leftBorder = this.ball.raduis;
        if (this.ball.x > rightBorder){
            this.p1Points++;
            this.getPoints(this.p1Points, 'Left');
            this.resetMiniGame();
            console.log(this.p1Points);
        }
        if(this.ball.x < leftBorder){
            this.p2Points++;
            this.getPoints(this.p2Points, 'Right');
            this.resetMiniGame();
            console.log(this.p2Points);
        }
    }
    
    checkGameOver(){
        if (this.p1Points === 3) {
            return('Left');
        }else if (this.p2Points === 3) {
            return('Right');
        }
    }

    drawGame(){
        //draw field
        this.ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctxt.fillStyle = 'black';
        this.ctxt.fillRect(0,0, this.canvas.width, this.canvas.height);
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
        
        //check minigame
        this.checkMiniGameEnd();
        
        //check gameOver
        if (this.checkGameOver() === 'Left') {
            this.isGameOver('Left');
            console.log('Left end');
        }else if (this.checkGameOver() === 'Right') {
            this.isGameOver('Right');
            console.log('Right end');
        }
        if (this.isRunning === true) {
            window.requestAnimationFrame(this.drawGame.bind(this));
        }else if (this.isRunning === false) {
            this.stop();
        }
            
    }
    
}
export default Game;

