// import Ball from './Ball';

class Player/*  extends PC  */{
    constructor(isUser, canvas) {

        Player.instance = this;
        this.isUser = isUser;
        this.keysDown = {};
        this.pcSpeed = 20;
        this.userSpeed = 10;

        this.canvas = canvas;
        this.ctxt = this.canvas.getContext('2d');
        this.y = this.canvas.height / 2;
        this.speed = this.isUser ? this.userSpeed:this.pcSpeed;
        this.playerSize = 120;
        this.playerWidth = 20;

        this.setEventListeners();
    }

    setEventListeners(){
        if (this.isUser){
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
        }else{
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

            window.addEventListener('resize', () =>{
                this.canvas.width = document.body.clientWidth;
                this.canvas.height = window.innerHeight - 20;
                this.y = this.canvas.height / 2;
                }
            );
        }
    }

    drawPlayer(){
        //set white color and draw player on correct side of the screen
        this.ctxt.fillStyle = 'white';
        if (this.isUser){
            this.ctxt.fillRect(this.canvas.width - this.playerWidth, this.y, this.playerWidth , this.playerSize);
        }else{
            this.ctxt.fillRect(0, this.y, this.playerWidth , this.playerSize);
        }

        //check field limits and block player from leaving the field + smoother key changes
        let topBorder = 0;
        let bottomBorder = this.canvas.height - this.playerSize;
        
        if (this.isUser){
            if ('Right' in this.keysDown && this.y > topBorder){
            this.y -= this.speed;
            }
            if('Left' in this.keysDown && this.y < bottomBorder){ 
            this.y += this.speed;
            }
        }else{
            if ('KeyQ' in this.keysDown && this.y > topBorder){
                this.y -= this.speed;
            }
            if('KeyA' in this.keysDown && this.y < bottomBorder){ 
                this.y += this.speed;
            }
        }        
    }
}
export default Player;