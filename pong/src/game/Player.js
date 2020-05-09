// import Ball from './Ball';

const pcSpeed = 15;
const userSpeed = 10;

class Player {
    constructor(userType, canvas, ball) {

        Player.instance = this;
        this.ball = ball;
        this.userType = userType;
        this.keysDown = {};
        this.canvas = canvas;
        this.ctxt = this.canvas.getContext('2d');
        this.speed = (this.userType === 'P1' || this.userType === 'P2') ? userSpeed : pcSpeed;
        this.playerSize = 120;
        this.playerWidth = 20;
        this.y = this.canvas.height / 2 - this.playerSize / 2;

        this.setEventListeners();

    }

    setSpeed

    setEventListeners(){
        if (this.userType === 'P1'){
            window.addEventListener("keydown", event => {
                if(event.code === "ArrowRight"){
                    this.keysDown["Right"] = true; 
                }
                if(event.code === "ArrowLeft"){
                    this.keysDown["Left"] = true;
                }
            });
            
            window.addEventListener("keyup", event => {
                if(event.code === "ArrowRight"){
                    delete this.keysDown["Right"];
                }
                if(event.code === "ArrowLeft"){
                    delete this.keysDown["Left"];
                }
            });

            window.addEventListener('resize', () =>{
                this.canvas.width = document.body.clientWidth;
                this.canvas.height = window.innerHeight - 20;
                this.y = this.canvas.height / 2;
                }
            );
        }else if (this.userType === 'P2') {
            window.addEventListener("keydown", event => {
                if(event.code === 'KeyQ'){
                    this.keysDown["KeyQ"] = true; 
                }
                if(event.code === 'KeyA'){
                    this.keysDown["KeyA"] = true;
                }
            });
            
            window.addEventListener("keyup", event => {
                if(event.code === "KeyQ"){
                    delete this.keysDown["KeyQ"];
                }
                if(event.code === "KeyA"){
                    delete this.keysDown["KeyA"];
                }
            });

            // window.addEventListener('resize', () =>{
            //     this.canvas.width = document.body.clientWidth;
            //     this.canvas.height = window.innerHeight - 20;
            //     this.y = this.canvas.height / 2;
            //     }
            // );
        }
    }

    drawPlayer(){
        //set white color and draw player on correct side of the screen
        this.ctxt.fillStyle = 'white';
        if (this.userType === 'P1'){
            this.ctxt.fillRect(this.canvas.width - this.playerWidth, this.y, this.playerWidth , this.playerSize);
        }else if (this.userType === 'P2' || this.userType === 'PC') {
            this.ctxt.fillRect(0, this.y, this.playerWidth , this.playerSize);
        }

        //check field limits and block player from leaving the field + smoother key changes
        let topBorder = 0;
        let bottomBorder = this.canvas.height - this.playerSize;
        
        if (this.userType === 'P1') {
            if ('Right' in this.keysDown && this.y > topBorder){
                this.y -= this.speed;
            }
            if('Left' in this.keysDown && this.y < bottomBorder){ 
                this.y += this.speed;
            }
        }else if (this.userType === 'P2'){
            if ('KeyQ' in this.keysDown && this.y > topBorder){
                this.y -= this.speed;
            }
            if('KeyA' in this.keysDown && this.y < bottomBorder){ 
                this.y += this.speed;
            }
        } 
        else if (this.userType === 'PC'){
            if (this.y > topBorder && this.y > this.ball.y){
                this.y -= this.speed;
            }
            if(this.y < bottomBorder &&  this.y < this.ball.y ){ 
                this.y += this.speed;
            }
        }       
    }
}
export default Player;