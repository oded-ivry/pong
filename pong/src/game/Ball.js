// import Player from './Player';

class Ball {
    raduis = 25;

    constructor(canvas) {
        //singleton
        if(Ball.instance) {
            return Ball.instance;
        }
        Ball.instance = this;

        this.canvas = canvas;
        this.ctxt = this.canvas.getContext('2d');
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.xDirection = -1;
        this.yDirection = 1;
        this.color = 'red';
        this.speed = 4;

        window.addEventListener('resize', () => {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = window.innerHeight - 20;
            }
        );
    }

    drawCircle(){
        this.ctxt.beginPath();
        this.ctxt.arc(this.x, this.y, this.raduis, 0, 2 * Math.PI);
        this.ctxt.fillStyle = this.color;
        this.ctxt.stroke();
        this.ctxt.fill();
        this.ctxt.closePath();
    }
    
    drawBall() {
        //updating ball's coordinates
        this.x += this.speed * this.xDirection;
        this.y += this.speed * this.yDirection;
        this.drawCircle();

        // check upper & lower field boundries
        let topBorder = 0;
        let bottomBorder = this.canvas.height - this.raduis;
        if (this.y < topBorder || this.y > bottomBorder) {
            this.yDirection = -this.yDirection;
        }
    } 
}

export default Ball;